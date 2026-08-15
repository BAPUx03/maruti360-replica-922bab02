import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { FaqSection, IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";

const FAQS = [
  {
    q: "What is Maruti 360?",
    a: "Maruti 360 is a luxury residential project offering 4 BHK and 5 BHK residences off SG Highway in Ahmedabad.",
  },
  {
    q: "Where is Maruti 360 located?",
    a: "The project is located off SG Highway, Ahmedabad, near Karnavati Club. Confirm the current visit route with the sales team.",
  },
  {
    q: "Which configurations are available?",
    a: "4 BHK and 5 BHK residences are presented in the project material. Select jodi, duplex and penthouse formats may be available on request.",
  },
  {
    q: "How can I get the floor plan?",
    a: "Use the floor plan pages or contact the sales team to request the latest detailed layout and availability.",
  },
  {
    q: "What is the expected possession date?",
    a: "Request the current official RERA timeline and construction status, then verify both against the latest approved project documents before booking.",
  },
  {
    q: "How do I book a site visit?",
    a: "Submit the enquiry form on the contact page to request a convenient private appointment.",
  },
  {
    q: "Where can I verify project documents?",
    a: "Request the current RERA and sanctioned project documents from the authorised sales team and verify them independently before purchase.",
  },
];

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  loader: () => getSeo({ data: { path: "/faq" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/faq", loaderData),
    scripts: [
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

function FaqPage() {
  return (
    <SeoIndexPage
      eyebrow="FAQ"
      title="Maruti 360 Frequently Asked Questions"
      intro="Answers to common questions about Maruti 360 residences, floor plans, visits, documents and the buying process."
    >
      <FaqSection items={FAQS} />
      <IndexSection title="Need a specific answer?">
        <p className="max-w-[700px] text-[13px] leading-[2] text-muted-foreground">
          For current prices, availability, approved documents and a personalised walkthrough, speak
          directly with the Maruti 360 sales team.
        </p>
        <div className="mt-8">
          <IndexLinks
            links={[
              { label: "View Floor Plans", to: "/floor-plan" },
              { label: "View Price & Payment Plan", to: "/price" },
              { label: "RERA Details", to: "/rera-legal" },
              { label: "Contact Us", to: "/contact-us" },
            ]}
          />
        </div>
      </IndexSection>
    </SeoIndexPage>
  );
}
