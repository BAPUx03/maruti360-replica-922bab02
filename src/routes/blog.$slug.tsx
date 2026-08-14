import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo-defaults";
import { PROJECT_FACTS } from "@/lib/project-facts";
import { getBlogPost, BLOG_BYLINE } from "@/lib/blog-posts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EnquiryCta } from "@/components/site/EnquiryCta";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogArticlePage,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${PROJECT_FACTS.canonicalBase}/blog/${loaderData.slug}`;
    return {
      ...seoHead(`/blog/${loaderData.slug}`, {
        title: loaderData.title,
        description: loaderData.description,
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: loaderData.h1,
            description: loaderData.description,
            url,
            datePublished: loaderData.publishedDate,
            dateModified: loaderData.publishedDate,
            author: { "@type": "Organization", name: BLOG_BYLINE },
            publisher: {
              "@type": "Organization",
              name: PROJECT_FACTS.brand,
              logo: {
                "@type": "ImageObject",
                url: `${PROJECT_FACTS.canonicalBase}/favicon.png`,
              },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
});

function BlogArticlePage() {
  const post = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="bg-surface-2 px-5 pt-32 pb-14 md:px-10 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="eyebrow">Buying Guide</p>
            <h1 className="mt-4 font-display text-[28px] leading-tight text-foreground md:text-[46px]">
              {post.h1}
            </h1>
            <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {BLOG_BYLINE} · Published{" "}
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
          </div>
        </section>

        <Reveal>
          <article className="bg-surface px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[720px]">
              <p className="text-[15px] leading-[2] text-foreground">{post.intro}</p>

              {post.sections.map((section) => (
                <div key={section.h2} className="mt-12">
                  <h2 className="font-display text-[22px] leading-snug text-foreground md:text-[26px]">
                    {section.h2}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-[13px] leading-[2] text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-[13px] leading-[1.9] text-muted-foreground"
                        >
                          <span className="mt-[10px] h-px w-4 shrink-0 bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.16em]">
                {post.relatedLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-gold hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
        <EnquiryCta />
      </main>
      <SiteFooter />
    </div>
  );
}
