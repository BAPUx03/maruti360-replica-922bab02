import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { LogOut, Save, Search, ExternalLink } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { adminGetSeoPages, adminSaveSeoPage, adminLogout } from "@/lib/seo.functions";
import type { SeoMeta } from "@/lib/seo-defaults";
import logo from "@/assets/Group-35-2.png";

export const Route = createFileRoute("/admin")({
  ssr: false,
  loader: async () => {
    const res = await adminGetSeoPages();
    if (!res.authed) throw redirect({ to: "/secure-login" });
    return res;
  },
  component: AdminPanel,
  head: () => ({
    meta: [{ title: "SEO Admin" }, { name: "robots", content: "noindex, nofollow" }],
  }),
});

function AdminPanel() {
  const { pages } = Route.useLoaderData();
  const router = useRouter();
  const save = useServerFn(adminSaveSeoPage);
  const logout = useServerFn(adminLogout);
  const [rows, setRows] = useState<SeoMeta[]>(pages);
  const [savingPath, setSavingPath] = useState<string | null>(null);

  function update(path: string, patch: Partial<SeoMeta>) {
    setRows((prev) => prev.map((r) => (r.path === path ? { ...r, ...patch } : r)));
  }

  async function onSave(row: SeoMeta) {
    setSavingPath(row.path);
    try {
      const res = await save({ data: row });
      if (res.ok) toast.success(`Saved ${row.path}`);
      else toast.error(res.error ?? "Save failed");
    } catch {
      toast.error("Save failed");
    } finally {
      setSavingPath(null);
    }
  }

  async function onLogout() {
    await logout({});
    await router.navigate({ to: "/secure-login", replace: true });
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-40 border-b border-border bg-surface-2/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-auto" />
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              <Search size={12} /> SEO Control Panel
            </span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 border border-border px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <LogOut size={12} /> Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5 py-10">
        <h1 className="font-display text-[22px] text-foreground md:text-[28px]">
          Page titles &amp; meta descriptions
        </h1>
        <p className="mt-2 max-w-[70ch] text-[12px] leading-[1.9] text-muted-foreground">
          Edit what Google and social platforms show for each page. Changes go live immediately.
          Keep titles under 60 characters and descriptions under 160 characters for best results.
        </p>

        <div className="mt-8 space-y-6">
          {rows.map((row) => {
            const titleLen = row.title.length;
            const descLen = row.description.length;
            return (
              <section key={row.path} className="border border-border bg-surface-2 p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] tracking-[0.08em] text-gold">{row.path}</span>
                    <a
                      href={row.path}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-gold"
                      aria-label={`Open ${row.path}`}
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={Boolean(row.noindex)}
                      onChange={(e) => update(row.path, { noindex: e.target.checked })}
                    />
                    Hide from Google
                  </label>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Field
                    label={`Title (${titleLen}/60)`}
                    warn={titleLen > 60}
                    value={row.title}
                    onChange={(v) => update(row.path, { title: v })}
                  />
                  <Field
                    label="Keywords (comma separated)"
                    value={row.keywords ?? ""}
                    onChange={(v) => update(row.path, { keywords: v })}
                  />
                </div>

                <label className="mt-4 block">
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] ${
                      descLen > 160 ? "text-red-400" : "text-muted-foreground"
                    }`}
                  >
                    Meta description ({descLen}/160)
                  </span>
                  <textarea
                    rows={3}
                    value={row.description}
                    onChange={(e) => update(row.path, { description: e.target.value })}
                    className="mt-2 w-full resize-y border border-border bg-surface px-3 py-2 text-[13px] leading-[1.7] text-foreground outline-none focus:border-gold"
                  />
                </label>

                <div className="mt-4">
                  <Field
                    label="Social share image URL (optional)"
                    value={row.og_image ?? ""}
                    onChange={(v) => update(row.path, { og_image: v })}
                  />
                </div>

                <div className="mt-5 rounded-sm border border-border/70 bg-surface p-4">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    Google preview
                  </p>
                  <p className="mt-2 text-[15px] leading-snug text-gold">{row.title}</p>
                  <p className="text-[11px] text-muted-foreground">www.maruti-360.com{row.path}</p>
                  <p className="mt-1 text-[12px] leading-[1.7] text-foreground/80">
                    {row.description}
                  </p>
                </div>

                <button
                  onClick={() => onSave(row)}
                  disabled={savingPath === row.path}
                  className="mt-5 flex items-center gap-2 border border-gold/50 bg-gold/10 px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-surface disabled:opacity-50"
                >
                  <Save size={12} /> {savingPath === row.path ? "Saving…" : "Save changes"}
                </button>
              </section>
            );
          })}
        </div>
      </main>
      <Toaster position="top-center" richColors />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  warn,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  warn?: boolean;
}) {
  return (
    <label className="block">
      <span
        className={`text-[10px] uppercase tracking-[0.2em] ${
          warn ? "text-red-400" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-border bg-surface px-3 py-2 text-[13px] text-foreground outline-none focus:border-gold"
      />
    </label>
  );
}
