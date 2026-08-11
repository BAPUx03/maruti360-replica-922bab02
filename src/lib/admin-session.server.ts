import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

export type AdminSession = { admin?: boolean; user?: string };

function sessionConfig() {
  const password = process.env["ADMIN_SESSION_SECRET"];
  if (!password) throw new Error("ADMIN_SESSION_SECRET is not configured");
  return {
    password,
    name: "m360-admin",
    maxAge: 60 * 60 * 8, // 8 hours
    cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
  };
}

function matches(input: string, expected: string) {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

/** Verify credentials against server-only env vars. Nothing is ever sent to the browser. */
export async function signInAdmin(username: string, password: string) {
  const user = process.env["ADMIN_USERNAME"];
  const pass = process.env["ADMIN_PASSWORD"];
  if (!user || !pass) {
    console.error("Admin credentials are not configured");
    return false;
  }
  if (!matches(username.trim(), user) || !matches(password, pass)) return false;

  const session = await useSession<AdminSession>(sessionConfig());
  await session.update({ admin: true, user: username.trim() });
  return true;
}

export async function signOutAdmin() {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
}

export async function isAdmin() {
  try {
    const session = await useSession<AdminSession>(sessionConfig());
    return session.data.admin === true;
  } catch {
    return false;
  }
}
