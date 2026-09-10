import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { EnquiryButton } from "@/components/site/EnquiryCta";
import { FACTUAL_DISCLAIMER, LAST_CHECKED, PROJECT_FACTS } from "@/lib/project-facts";

const SECTIONS = [
  {
    title: "Residence layouts",
    body: "Approved 4 BHK and 5 BHK plan sheets with the terminology used in the sanctioned document, so carpet, built-up and saleable figures are read the same way you will see them in the agreement.",
  },
  {
    title: "Amenities and shared spaces",
    body: "The clubhouse, wellness, sports, leisure and landscape spaces planned across the development, including the 360° viewing gallery.",
  },
  {
    title: "Location and connectivity",
    body: "The project address off S.G. Highway near Karnavati Club, with the surrounding landmarks buyers usually check before a site visit.",
  },
  {
    title: "Project and legal details",
    body: `Project registration reference (RERA ${PROJECT_FACTS.reraNumber}) and the document list to verify before booking.`,
  },
];

const FAQS = [
  {
    q: "Is the Maruti 360 brochure available for download?",
    a: "Yes. The latest approved brochure is shared directly with you once you submit the enquiry form, so you always receive the current version rather than an outdated file.",
  },
  {
    q: "What does the brochure contain?",
    a: "Residence layouts, amenities, location details and the project registration reference. Commercial terms such as price and payment schedule are shared separately as a current price list.",
  },
  {
    q: "How current is the brochure?",
    a: `Only the latest sanctioned version is shared. Information on this page was last checked on ${LAST_CHECKED}.`,
  },
];

export const Route = createFileRoute("/brochure")({
  component: BrochurePage,
  loader: () => getSeo({ data: { path: "/brochure" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/brochure", loaderData),
    scripts: [
      ...pageSchema("/brochure"),
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

function BrochurePage() {
  return (
    <SeoIndexPage
      eyebrow="Brochure"
      title="Maruti 360 Brochure"
      intro="Request the latest approved Maruti 360 brochure for 4 & 5 BHK residences in Ahmedabad. Here is exactly what the document covers before you ask for it."
    >
      <IndexSection title="What the brochure covers">
        <div className="grid gap-5 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <article key={s.title} className="border border-border p-7">
              <p className="font-display text-[21px] text-foreground">{s.title}</p>
              <p className="mt-4 break-words text-[12px] leading-[1.9] text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[800px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. Only the current sanctioned brochure is shared,
          and its contents should be read together with the approved project documents.{" "}
          {FACTUAL_DISCLAIMER}
        </p>
        <EnquiryButton className="mt-8">Request The Brochure</EnquiryButton>
        <IndexLinks
          links={[
            { label: "View Floor Plans", to: "/floor-plan" },
            { label: "Price & Payment", to: "/price" },
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Book a Site Visit", to: "/site-visit" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
