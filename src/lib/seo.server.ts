import { createClient } from "@supabase/supabase-js";
import { SEO_PATHS, getDefaultSeo, type SeoMeta } from "@/lib/seo-defaults";

type Row = {
  path: string;
  title: string;
  description: string;
  keywords: string | null;
  og_image: string | null;
  noindex: boolean;
};

function publicClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

/** Public read — used by every page loader. Never throws: falls back to defaults. */
export async function readSeo(path: string): Promise<Partial<SeoMeta> | null> {
  const supabase = publicClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("seo_pages")
    .select("path, title, description, keywords, og_image, noindex")
    .eq("path", path)
    .maybeSingle();
  if (error || !data) return null;
  return data as Row;
}

/** Admin read — every known page, merged with stored overrides. */
export async function readAllSeo(): Promise<SeoMeta[]> {
  const supabase = publicClient();
  const rows: Record<string, Row> = {};
  if (supabase) {
    const { data } = await supabase
      .from("seo_pages")
      .select("path, title, description, keywords, og_image, noindex");
    for (const row of (data ?? []) as Row[]) rows[row.path] = row;
  }
  return SEO_PATHS.map((path) => {
    const def = getDefaultSeo(path);
    const row = rows[path];
    return {
      path,
      title: row?.title ?? def.title,
      description: row?.description ?? def.description,
      keywords: row?.keywords ?? def.keywords ?? "",
      og_image: row?.og_image ?? "",
      noindex: row?.noindex ?? false,
    };
  });
}

/** Admin write — service role, called only after the session check passes. */
export async function writeSeo(input: SeoMeta) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("seo_pages").upsert(
    {
      path: input.path,
      title: input.title,
      description: input.description,
      keywords: input.keywords || null,
      og_image: input.og_image || null,
      noindex: input.noindex ?? false,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "path" },
  );
  if (error) {
    console.error("SEO save failed", error.message);
    return false;
  }
  return true;
}
