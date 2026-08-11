import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { FaqSection, IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";

const FAQS = [
  { q: "What is Maruti 360?", a: "Maruti 360 is a luxury residential project offering 4 BHK and 5 BHK residences off SG Highway in Ahmedabad." },
  { q: "Where is Maruti 360 located?", a: "The project is located off SG Highway, Ahmedabad, near Karnavati Club. Confirm the current visit route with the sales team." },
  { q: "Which configurations are available?", a: "4 BHK and 5 BHK residences are presented in the project material. Select jodi, duplex and penthouse formats may be available on request." },
  { q: "How can I get the floor plan?", a: "Use the floor plan pages or contact the sales team to request the latest detailed layout and availability." },
  { q: "What is the expected possession date?", a: "The project material references December 2028. Ask for the latest RERA-declared timeline before booking." },
  { q: "How do I book a site visit?", a: "Contact the sales team through the contact page, phone or WhatsApp to request a convenient appointment." },
  { q: "Where can I verify project documents?", a: "Request the current RERA and sanctioned project documents from the authorised sales team and verify them independently before purchase." },
];

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  loader: () => getSeo({ data: { path: "/faq" } }),
  head: ({ loaderData }) => ({ ...seoHead("/faq", loaderData), scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }] }),
});

function FaqPage() {
  return <SeoIndexPage eyebrow="FAQ" title="Maruti 360 FAQ | Price, Floor Plans, Location & RERA" intro="Answers to common questions about Maruti 360 residences, floor plans, visits, documents and the buying process.">
    <FaqSection items={FAQS} />
    <IndexSection title="Need a specific answer?"><p className="max-w-[700px] text-[13px] leading-[2] text-muted-foreground">For current prices, availability, approved documents and a personalised walkthrough, speak directly with the Maruti 360 sales team.</p><div className="mt-8"><IndexLinks /></div></IndexSection>
  </SeoIndexPage>;
}
