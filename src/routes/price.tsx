import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";

const FAQS = [
  { q: "How do I know what a residence costs?", a: "Costing depends on tower, floor zone, view and format. Details are shared privately after you submit the enquiry form." },
  { q: "Can I get the latest details?", a: "Yes. Submit the enquiry form and the current payment schedule and availability are shared with you." },
  { q: "Are home-loan options available?", a: "Yes. Lender and documentation guidance is shared on enquiry. Final approval is issued by the lender." },
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
  return <SeoIndexPage eyebrow="Price & Payment" title="Maruti 360 Price & Payment Plan" intro="Request the latest payment schedule and availability for 4 BHK and 5 BHK residences on SG Highway, Ahmedabad.">
    <IndexSection title="Current price information">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["4 BHK", "Details on enquiry", "Spacious sky residences"],
          ["5 BHK", "Details on enquiry", "Expansive sky residences"],
          ["Penthouse & duplex", "Details on enquiry", "Select premium formats"],
        ].map(([name, price, note]) => <article key={name} className="border border-border p-7"><p className="font-display text-[25px] text-foreground">{name}</p><p className="mt-4 text-[13px] text-gold">{price}</p><p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground">{note}. Carpet area, payment schedule and availability are shared after you submit the enquiry form.</p></article>)}
      </div>
      <p className="mt-8 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">Figures are not published on this website. Inventory, floor premium, taxes, registration, maintenance and other statutory charges vary. Submit the enquiry form to receive current details.</p>
      <IndexLinks />
    </IndexSection>
    <FaqSection items={FAQS} />
  </SeoIndexPage>;
}
