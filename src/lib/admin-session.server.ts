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
