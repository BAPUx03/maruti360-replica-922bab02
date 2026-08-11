import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";

const FAQS = [
  { q: "What is the starting price at Maruti 360?", a: "The current indicative starting price for select 4 BHK residences is shared by the sales team after confirming availability. Prices, taxes and charges are subject to change." },
  { q: "Can I get the latest price list?", a: "Yes. Request the latest price list and payment schedule through the contact form or WhatsApp sales enquiry." },
  { q: "Are home-loan options available?", a: "The sales team can share the current lender and documentation information for eligible buyers. Final approval is issued by the lender." },
];

export const Route = createFileRoute("/price")({
  component: PricePage,
  loader: () => getSeo({ data: { path: "/price" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/price", loaderData),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
  }),
});

function PricePage() {
  return <SeoIndexPage eyebrow="Price & Payment" title="Maruti 360 Price & Payment Plan" intro="Request the latest price list, payment schedule and availability for 4 BHK and 5 BHK residences on SG Highway, Ahmedabad.">
    <IndexSection title="Current price information">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["4 BHK", "From approximately ₹5.75 Cr", "5,750 sq ft carpet area reference"],
          ["5 BHK", "From approximately ₹7 Cr", "7,650 sq ft carpet area reference"],
          ["Penthouse & duplex", "Up to approximately ₹10.33 Cr", "Select premium formats"],
        ].map(([name, price, note]) => <article key={name} className="border border-border p-7"><p className="font-display text-[25px] text-foreground">{name}</p><p className="mt-4 text-[13px] text-gold">{price}</p><p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground">{note}. Confirm carpet area, taxes, charges and availability with the sales team.</p></article>)}
      </div>
      <p className="mt-8 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">These are indicative figures from the project brief, not a final quotation. Inventory, floor premium, taxes, registration, maintenance and other statutory charges can change. Contact the official sales team for the current price list and payment schedule.</p>
      <IndexLinks />
    </IndexSection>
    <FaqSection items={FAQS} />
  </SeoIndexPage>;
}
