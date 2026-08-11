import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";

const TOPICS = [
  ["Buying a luxury residence in Ahmedabad", "A practical checklist for comparing carpet area, approvals, amenities, maintenance and total purchase cost."],
  ["4 BHK vs 5 BHK: choosing your layout", "Questions to ask about household needs, privacy, storage, staff space and long-term flexibility."],
  ["Why location matters on SG Highway", "A framework for evaluating daily connectivity, neighbourhood services and future convenience."],
];

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  loader: () => getSeo({ data: { path: "/blog" } }),
  head: ({ loaderData }) => ({ ...seoHead("/blog", loaderData) }),
});

function BlogPage() {
  return <SeoIndexPage eyebrow="Insights" title="Maruti 360 Blog | Ahmedabad Real Estate & Project Updates" intro="Helpful guides for evaluating luxury homes, layouts, locations and the purchase process in Ahmedabad.">
    <IndexSection title="Coming soon"><div className="grid gap-5 md:grid-cols-3">{TOPICS.map(([title, copy]) => <article key={title} className="border border-border p-7"><p className="text-[10px] uppercase tracking-[0.2em] text-gold">Buying guide</p><h2 className="mt-4 font-display text-[22px] leading-snug text-foreground">{title}</h2><p className="mt-4 text-[12px] leading-[1.9] text-muted-foreground">{copy}</p></article>)}</div><p className="mt-8 text-[13px] leading-[2] text-muted-foreground">New articles will be added only when the underlying information can be checked and kept current.</p><IndexLinks /></IndexSection>
  </SeoIndexPage>;
}
