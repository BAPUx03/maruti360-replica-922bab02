import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROJECT_FACTS, PUBLIC_ROUTES, BLOG_ARTICLE_SLUGS } from "@/lib/project-facts";

// Generated from the single public-route registry — no fabricated lastmod,
// changefreq or priority. Every URL here must be a canonical, indexable 200
// page; admin/login/thank-you/draft states are never added.
const URLS: string[] = [...PUBLIC_ROUTES, ...BLOG_ARTICLE_SLUGS.map((slug) => `/blog/${slug}`)];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...URLS.map((path) =>
            [`  <url>`, `    <loc>${PROJECT_FACTS.canonicalBase}${path}</loc>`, `  </url>`].join(
              "\n",
            ),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
