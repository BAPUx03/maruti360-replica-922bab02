import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Lock } from "lucide-react";
import { adminLogin } from "@/lib/seo.functions";
import logo from "@/assets/Group-35-2.png";

export const Route = createFileRoute("/secure-login")({
  component: SecureLogin,
  head: () => ({
    meta: [
      { title: "Sign In" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function SecureLogin() {
  const router = useRouter();
  const login = useServerFn(adminLogin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await login({ data: { username, password } });
      if (res.ok) {
        await router.navigate({ to: "/admin", replace: true });
      } else {
        setError("Incorrect username or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-5">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[380px] border border-border bg-surface-2 p-8"
        autoComplete="off"
      >
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="" className="h-10 w-auto" />
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <Lock size={12} /> Admin Access
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Username
            </span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full border border-border bg-surface px-3 py-2 text-[13px] text-foreground outline-none focus:border-gold"
              autoComplete="username"
              required
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-border bg-surface px-3 py-2 text-[13px] text-foreground outline-none focus:border-gold"
              autoComplete="current-password"
              required
            />
          </label>
        </div>

        {error && <p className="mt-4 text-[12px] text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full border border-gold/50 bg-gold/10 py-3 text-[11px] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-surface disabled:opacity-50"
        >
          {busy ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
