import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
import { adminLogin, adminStatus } from "@/lib/seo.functions";
import logo from "@/assets/Group-35-2.png";

export const Route = createFileRoute("/secure-login")({
  ssr: false,
  component: SecureLogin,
  head: () => ({
    meta: [{ title: "Sign In" }, { name: "robots", content: "noindex, nofollow" }],
  }),
});

function SecureLogin() {
  const router = useRouter();
  const login = useServerFn(adminLogin);
  const status = useServerFn(adminStatus);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [caps, setCaps] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [checking, setChecking] = useState(true);

  // Already signed in? Go straight to the panel.
  useEffect(() => {
    let alive = true;
    status({})
      .then((r) => {
        if (!alive) return;
        if (r.authed) router.navigate({ to: "/admin", replace: true });
        else setChecking(false);
      })
      .catch(() => alive && setChecking(false));
    return () => {
      alive = false;
    };
  }, [status, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const res = await login({ data: { username: username.trim(), password } });
      if (res.ok) {
        window.location.replace("/admin");
        return;
      }
      setError(
        res.reason === "unconfigured"
          ? "Admin access is not configured on this deployment."
          : res.reason === "error"
            ? "Could not start a secure session. Please try again."
            : "Incorrect username or password.",
      );
      setPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <Loader2 size={18} className="animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-5">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-[380px] border border-border bg-surface-2 p-8"
        autoComplete="off"
        noValidate
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
              autoCapitalize="none"
              spellCheck={false}
              disabled={busy}
              autoFocus
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Password
            </span>
            <div className="relative mt-2">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => setCaps(e.getModifierState?.("CapsLock") ?? false)}
                className="w-full border border-border bg-surface px-3 py-2 pr-10 text-[13px] text-foreground outline-none focus:border-gold"
                autoComplete="current-password"
                disabled={busy}
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-gold"
              >
                {show ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </label>
          {caps && (
            <p className="text-[11px] tracking-[0.08em] text-muted-foreground">Caps Lock is on</p>
          )}
        </div>

        {error && (
          <p
            role="alert"
            className="mt-4 border border-red-500/30 bg-red-500/5 px-3 py-2 text-[12px] text-red-400"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 flex w-full items-center justify-center gap-2 border border-gold/50 bg-gold/10 py-3 text-[11px] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-surface disabled:opacity-50"
        >
          {busy && <Loader2 size={12} className="animate-spin" />}
          {busy ? "Signing in…" : "Sign In"}
        </button>

        <a
          href="/"
          className="mt-6 block text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
        >
          Back to website
        </a>
      </form>
    </div>
  );
}
