import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { SeoMeta } from "@/lib/seo-defaults";

/** Public: read stored SEO overrides for one page. */
export const getSeo = createServerFn({ method: "GET" })
  .inputValidator((data: { path: string }) => z.object({ path: z.string().max(120) }).parse(data))
  .handler(async ({ data }) => {
    const { readSeo } = await import("@/lib/seo.server");
    return (await readSeo(data.path)) as Partial<SeoMeta> | null;
  });

/** Admin: sign in with server-side credentials. */
export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) =>
    z
      .object({ username: z.string().min(1).max(120), password: z.string().min(1).max(200) })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { signInAdmin } = await import("@/lib/admin-session.server");
    return await signInAdmin(data.username, data.password);
  });

/** Is the current visitor already signed in as admin? */
export const adminStatus = createServerFn({ method: "POST" }).handler(async () => {
  const { isAdmin } = await import("@/lib/admin-session.server");
  return { authed: await isAdmin() };
});

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const { signOutAdmin } = await import("@/lib/admin-session.server");
  await signOutAdmin();
  return { ok: true };
});

/** Admin: list every page with its current SEO values. Returns authed:false when signed out. */
export const adminGetSeoPages = createServerFn({ method: "POST" }).handler(async () => {
  const { isAdmin } = await import("@/lib/admin-session.server");
  if (!(await isAdmin())) {
    return { authed: false as const, pages: [] as SeoMeta[] };
  }
  const { readAllSeo } = await import("@/lib/seo.server");
  return { authed: true as const, pages: await readAllSeo() };
});

/** Admin: save one page's SEO values. */
export const adminSaveSeoPage = createServerFn({ method: "POST" })
  .inputValidator((data: SeoMeta) =>
    z
      .object({
        path: z.string().min(1).max(120),
        title: z.string().min(1).max(200),
        description: z.string().min(1).max(400),
        keywords: z.string().max(400).nullish(),
        og_image: z.string().max(500).nullish(),
        noindex: z.boolean().optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { isAdmin } = await import("@/lib/admin-session.server");
    if (!(await isAdmin())) return { ok: false, error: "Not authorised" };
    const { writeSeo } = await import("@/lib/seo.server");
    const ok = await writeSeo(data as SeoMeta);
    return { ok, error: ok ? null : "Save failed" };
  });
