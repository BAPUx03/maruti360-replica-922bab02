import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { EnquiryButton } from "@/components/site/EnquiryCta";
import { FACTUAL_DISCLAIMER, LAST_CHECKED, PROJECT_FACTS } from "@/lib/project-facts";

const WHAT_YOU_GET = [
  {
    title: "Current stage of work",
    body: "The structural and finishing stage reported for each tower at the time you ask, rather than a static claim published once and left to age.",
  },
  {
    title: "Declared timeline",
    body: "The completion timeline as declared in the project registration record, which is the only timeline you should plan around.",
  },
  {
    title: "Site photographs",
    body: "Recent project photographs shared on request, along with a guided walkthrough if you would like to see progress in person.",
  },
];

const FAQS = [
  {
    q: "What is the current construction status of Maruti 360?",
    a: "Construction progress changes month to month, so the current stage is shared directly on request instead of being published as a fixed claim on this page.",
  },
  {
    q: "What is the possession date?",
    a: "Plan only around the completion timeline declared in the official project registration record. Verify it on the GujRERA portal and confirm it with the sales team before booking.",
  },
  {
    q: "Can I visit the site to see progress?",
    a: "Yes. A guided site visit can be arranged, including the sample apartment.",
  },
];

export const Route = createFileRoute("/construction-update")({
  component: ConstructionUpdatePage,
  loader: () => getSeo({ data: { path: "/construction-update" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/construction-update", loaderData),
    scripts: [
      ...pageSchema("/construction-update"),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function ConstructionUpdatePage() {
  return (
    <SeoIndexPage
      eyebrow="Construction Update"
      title="Maruti 360 Construction Update"
      intro="Request the latest verified construction progress for Maruti 360 in Ahmedabad, along with the completion timeline declared in the official project registration record."
    >
      <IndexSection title="What you receive on request">
        <div className="grid gap-5 md:grid-cols-3">
          {WHAT_YOU_GET.map((s) => (
            <article key={s.title} className="border border-border p-7">
              <p className="font-display text-[20px] text-foreground">{s.title}</p>
              <p className="mt-4 text-[12px] leading-[1.9] text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. This page deliberately does not publish a
          percentage-complete figure or a possession date, because both change and only the official
          record is authoritative. {FACTUAL_DISCLAIMER}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <EnquiryButton>Request The Latest Update</EnquiryButton>
          <a
            href={PROJECT_FACTS.reraPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-[0.16em] text-gold"
          >
            Check the official GujRERA record
          </a>
        </div>
        <IndexLinks
          links={[
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Book a Site Visit", to: "/site-visit" },
            { label: "Specifications", to: "/specifications" },
            { label: "Gallery", to: "/gallery" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
