import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { EnquiryButton } from "@/components/site/EnquiryCta";
import { FACTUAL_DISCLAIMER, LAST_CHECKED, PROJECT_FACTS } from "@/lib/project-facts";

const CHECKS = [
  {
    title: "Start with the official record",
    body: "Search the project registration number on the GujRERA portal. Promoter details, approvals, declared timelines and any complaints history sit there, not in a review snippet.",
  },
  {
    title: "Read portal listings critically",
    body: "Property portals often carry configuration, area and price figures that conflict with the sanctioned document. Treat them as leads to verify, not as facts.",
  },
  {
    title: "Visit before you judge",
    body: "A guided site visit and the sample apartment tell you more about build quality, layout and views than any aggregated star rating.",
  },
  {
    title: "Ask for the documents",
    body: "Sanctioned plans, the agreement for sale, the payment schedule and carpet-area details reveal far more than opinion-based reviews.",
  },
];

const FAQS = [
  {
    q: "Are there verified Maruti 360 reviews on this website?",
    a: "No. We do not publish resident or buyer reviews here, because unverified testimonials are not a fair basis for a purchase of this size. This page explains how to verify the project independently instead.",
  },
  {
    q: "How can I check the project's credibility?",
    a: "Verify the registration record on the official GujRERA portal, review the sanctioned documents, and inspect the site and sample apartment in person.",
  },
  {
    q: "Can I speak to the team about concerns?",
    a: "Yes. Submit the enquiry form with your questions and a residence advisor will respond with the relevant documents.",
  },
];

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  loader: () => getSeo({ data: { path: "/reviews" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/reviews", loaderData),
    scripts: [
      ...pageSchema("/reviews"),
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

function ReviewsPage() {
  return (
    <SeoIndexPage
      eyebrow="Reviews & Verification"
      title="Maruti 360 Reviews — How To Verify Before You Buy"
      intro="We do not publish unverified reviews or ratings. Instead, here is a practical way to check Maruti 360 for yourself using official records, documents and a site visit."
    >
      <IndexSection title="Four ways to verify the project">
        <div className="grid gap-5 md:grid-cols-2">
          {CHECKS.map((c) => (
            <article key={c.title} className="border border-border p-7">
              <p className="font-display text-[21px] text-foreground">{c.title}</p>
              <p className="mt-4 text-[12px] leading-[1.9] text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. RERA registration number:{" "}
          <span className="break-words text-foreground">{PROJECT_FACTS.reraNumber}</span>.{" "}
          {FACTUAL_DISCLAIMER}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <EnquiryButton>Ask Your Questions</EnquiryButton>
          <a
            href={PROJECT_FACTS.reraPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="border-b border-gold pb-1 text-[11px] uppercase tracking-[0.16em] text-gold"
          >
            Verify on Gujarat RERA
          </a>
        </div>
        <IndexLinks
          links={[
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Book a Site Visit", to: "/site-visit" },
            { label: "Developer", to: "/developer" },
            { label: "FAQ", to: "/faq" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
