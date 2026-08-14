import { createFileRoute, Link } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";
import { BLOG_POSTS, BLOG_BYLINE } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  loader: () => getSeo({ data: { path: "/blog" } }),
  head: ({ loaderData }) => ({ ...seoHead("/blog", loaderData) }),
});

function BlogPage() {
  return (
    <SeoIndexPage
      eyebrow="Insights"
      title="Maruti 360 Insights"
      intro="Practical, fact-checked guides on luxury homes, project documents, layouts and location research in Ahmedabad."
    >
      <IndexSection title="Buying guides">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block border border-border p-7 transition-colors hover:border-gold/60"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Buying guide</p>
              <h2 className="mt-4 font-display text-[20px] leading-snug text-foreground group-hover:text-gold">
                {post.h1}
              </h2>
              <p className="mt-4 text-[12px] leading-[1.9] text-muted-foreground">
                {post.description}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {BLOG_BYLINE} · {new Date(post.publishedDate).toLocaleDateString("en-IN")}
              </p>
            </Link>
          ))}
        </div>
        <IndexLinks />
      </IndexSection>
    </SeoIndexPage>
  );
}
