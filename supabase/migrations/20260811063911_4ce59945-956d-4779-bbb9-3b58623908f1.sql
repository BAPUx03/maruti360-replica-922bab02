CREATE TABLE public.seo_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text NOT NULL UNIQUE,
  title text NOT NULL,
  description text NOT NULL,
  keywords text,
  og_image text,
  noindex boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.seo_pages TO anon;
GRANT SELECT ON public.seo_pages TO authenticated;
GRANT ALL ON public.seo_pages TO service_role;

ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "SEO settings are publicly readable"
ON public.seo_pages FOR SELECT TO anon, authenticated USING (true);