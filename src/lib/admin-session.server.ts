// Aliased: the linter's react-hooks rule treats any `use*`-named function as a
// React hook and flags calls outside components/hooks otherwise.
import { useSession as getServerSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

export type AdminSession = { admin?: boolean; user?: string };

function sessionConfig() {
  const password = process.env["ADMIN_SESSION_SECRET"];
  if (!password) throw new Error("ADMIN_SESSION_SECRET is not configured");
  return {
    password,
    name: "m360-admin",
    maxAge: 60 * 60 * 8, // 8 hours
    cookie: {
      httpOnly: true,
      // Browsers drop `secure` cookies on plain http://localhost, which would
      // block admin sign-in in local dev. Only require it once actually served over HTTPS.
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

function matches(input: string, expected: string) {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

/** Verify credentials against server-only env vars. Nothing is ever sent to the browser. */
export async function signInAdmin(
  username: string,
  password: string,
): Promise<{ ok: boolean; reason?: "unconfigured" | "invalid" | "error" }> {
  const user = process.env["ADMIN_USERNAME"];
  const pass = process.env["ADMIN_PASSWORD"];
  if (!user || !pass || !process.env["ADMIN_SESSION_SECRET"]) {
    console.error("Admin credentials are not configured");
    return { ok: false, reason: "unconfigured" };
  }
  if (!matches(username.trim(), user) || !matches(password, pass)) {
    return { ok: false, reason: "invalid" };
  }

  try {
    const session = await getServerSession<AdminSession>(sessionConfig());
    await session.update({ admin: true, user: username.trim() });
    return { ok: true };
  } catch (e) {
    console.error("Admin session could not be created", e);
    return { ok: false, reason: "error" };
  }
}

export async function signOutAdmin() {
  const session = await getServerSession<AdminSession>(sessionConfig());
  await session.clear();
}

export async function isAdmin() {
  try {
    const session = await getServerSession<AdminSession>(sessionConfig());
    return session.data.admin === true;
  } catch {
    return false;
  }
}

/* ---------------- Database-backed admin accounts ---------------- */

import { pbkdf2Sync, randomBytes } from "node:crypto";

function hashPassword(password: string, salt: string) {
  return pbkdf2Sync(password, salt, 100_000, 32, "sha256").toString("hex");
}

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

/** Has an admin account been created yet? */
export async function adminAccountExists(): Promise<boolean> {
  try {
    const db = await admin();
    const { count, error } = await db
      .from("admin_users")
      .select("id", { count: "exact", head: true });
    if (error) throw error;
    return (count ?? 0) > 0;
  } catch (e) {
    console.error("admin_users lookup failed", e);
    return false;
  }
}

/** First-run signup: stores the credentials and signs the visitor in. */
export async function signUpAdmin(
  username: string,
  password: string,
): Promise<{ ok: boolean; reason?: "exists" | "error" }> {
  try {
    if (await adminAccountExists()) return { ok: false, reason: "exists" };
    const salt = randomBytes(16).toString("hex");
    const db = await admin();
    const { error } = await db.from("admin_users").insert({
      username: username.trim(),
      password_hash: hashPassword(password, salt),
      salt,
    });
    if (error) throw error;
    const session = await getServerSession<AdminSession>(sessionConfig());
    await session.update({ admin: true, user: username.trim() });
    return { ok: true };
  } catch (e) {
    console.error("Admin signup failed", e);
    return { ok: false, reason: "error" };
  }
}

/** Verify against a stored admin account (returns null when no account matches). */
export async function verifyStoredAdmin(username: string, password: string) {
  try {
    const db = await admin();
    const { data, error } = await db
      .from("admin_users")
      .select("username, password_hash, salt")
      .eq("username", username.trim())
      .maybeSingle();
    if (error || !data) return false;
    return matches(hashPassword(password, data.salt), data.password_hash);
  } catch (e) {
    console.error("Admin verification failed", e);
    return false;
  }
}
