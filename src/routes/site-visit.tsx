import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { EnquiryButton } from "@/components/site/EnquiryCta";
import { FACTUAL_DISCLAIMER, LAST_CHECKED } from "@/lib/project-facts";

const STEPS = [
  {
    step: "1",
    title: "Share your requirement",
    body: "Tell us the configuration you are considering, your preferred floor zone and a convenient time window.",
  },
  {
    step: "2",
    title: "Confirmed appointment",
    body: "A residence advisor confirms the visit slot and shares the meeting point off S.G. Highway near Karnavati Club.",
  },
  {
    step: "3",
    title: "Guided walkthrough",
    body: "See the sample apartment, the amenity plan and the view corridors the residences are designed around.",
  },
  {
    step: "4",
    title: "Documents and next steps",
    body: "Approved plans, the current price list and the project registration record are reviewed with you before any commitment.",
  },
];

const CHECKLIST = [
  "Match the plan you are shown against the sanctioned plan in the approved document set.",
  "Confirm which areas are carpet, built-up and saleable in writing.",
  "Ask which floor zones and view orientations are actually available today.",
  "Check what the quoted price includes and which charges sit outside it.",
  "Verify the project registration record on the official GujRERA portal.",
  "Ask for the current construction status and the declared completion timeline.",
];

const FAQS = [
  {
    q: "How do I book a Maruti 360 site visit?",
    a: "Submit the enquiry form with your preferred time. A residence advisor confirms the appointment and shares the meeting point.",
  },
  {
    q: "Is there a sample apartment to see?",
    a: "Yes, a sample apartment is ready and is part of the guided walkthrough.",
  },
  {
    q: "What should I verify during the visit?",
    a: "Sanctioned plans, the area terminology used, current availability, the full cost breakdown and the project registration record.",
  },
];

export const Route = createFileRoute("/site-visit")({
  component: SiteVisitPage,
  loader: () => getSeo({ data: { path: "/site-visit" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/site-visit", loaderData),
    scripts: [
      ...pageSchema("/site-visit"),
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

function SiteVisitPage() {
  return (
    <SeoIndexPage
      eyebrow="Site Visit"
      title="Book a Maruti 360 Site Visit"
      intro="Plan a private, guided visit to Maruti 360 off S.G. Highway in Ahmedabad — see the sample apartment, the location and the approved documents in one appointment."
    >
      <IndexSection title="How the visit works">
        <div className="grid gap-5 md:grid-cols-2">
          {STEPS.map((s) => (
            <article key={s.step} className="border border-border p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Step {s.step}</p>
              <p className="mt-3 font-display text-[21px] text-foreground">{s.title}</p>
              <p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
        <EnquiryButton className="mt-8">Book a Site Visit</EnquiryButton>
      </IndexSection>

      <IndexSection title="What to check while you are there">
        <ul className="grid max-w-[900px] gap-3">
          {CHECKLIST.map((item) => (
            <li
              key={item}
              className="border-l border-gold/40 pl-4 text-[13px] leading-[1.9] text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[800px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. Visit timings and availability are confirmed at
          the time of booking. {FACTUAL_DISCLAIMER}
        </p>
        <IndexLinks
          links={[
            { label: "Location & Connectivity", to: "/location" },
            { label: "View Floor Plans", to: "/floor-plan" },
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Request The Brochure", to: "/brochure" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
