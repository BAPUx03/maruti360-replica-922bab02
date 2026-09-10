import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { FACTUAL_DISCLAIMER, LAST_CHECKED, PROJECT_FACTS } from "@/lib/project-facts";

// Only figures already published across this site are repeated here.
const PROJECT_FIGURES = [
  { label: "Height", value: "501 ft" },
  { label: "Towers", value: "2" },
  { label: "Storeys", value: "41" },
  { label: "Residences", value: "124" },
];

const DETAILS = [
  { label: "Configurations", value: PROJECT_FACTS.configurations.join(" & ") },
  { label: "Project type", value: PROJECT_FACTS.projectType },
  { label: "Location", value: `${PROJECT_FACTS.location} (${PROJECT_FACTS.locationQualifier})` },
  { label: "Developer", value: PROJECT_FACTS.developer },
  { label: "Architect partner", value: "Sanjay Puri Architects" },
  { label: "Design partner", value: "DUCON" },
  { label: "Construction partner", value: "JMC" },
  { label: "RERA registration", value: PROJECT_FACTS.reraNumber },
];

const FAQS = [
  {
    q: "How many floors does Maruti 360 have?",
    a: "The project is planned as two towers of 41 storeys, rising to 501 ft.",
  },
  {
    q: "How many residences are there?",
    a: "124 residences are planned across the twin towers, in 4 BHK and 5 BHK formats.",
  },
  {
    q: "Where can I get the detailed specification sheet?",
    a: "Material, fitting and finish specifications are listed in the sanctioned document set and are shared on request with the current brochure.",
  },
];

export const Route = createFileRoute("/specifications")({
  component: SpecificationsPage,
  loader: () => getSeo({ data: { path: "/specifications" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/specifications", loaderData),
    scripts: [
      ...pageSchema("/specifications"),
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

function SpecificationsPage() {
  return (
    <SeoIndexPage
      eyebrow="Specifications"
      title="Maruti 360 Specifications and Project Details"
      intro="Key Maruti 360 project details — towers, storeys, height, residence count, configurations and project partners — with the source documents to verify them against."
    >
      <IndexSection title="Project at a glance">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {PROJECT_FIGURES.map((f) => (
            <div key={f.label} className="border border-border p-7 text-center">
              <p className="font-display text-[34px] leading-none text-foreground">{f.value}</p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </IndexSection>

      <IndexSection title="Project details">
        <dl className="max-w-[900px] divide-y divide-border border-y border-border">
          {DETAILS.map((d) => (
            <div key={d.label} className="grid gap-1 py-4 md:grid-cols-[220px_1fr] md:gap-6">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {d.label}
              </dt>
              <dd className="break-words text-[13px] leading-[1.9] text-foreground">{d.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-[800px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. Room dimensions, materials and finish schedules
          are only confirmed by the sanctioned document set — request the current brochure and
          approved plans before relying on any figure. {FACTUAL_DISCLAIMER}
        </p>
        <IndexLinks
          links={[
            { label: "View Floor Plans", to: "/floor-plan" },
            { label: "Explore Amenities", to: "/amenities" },
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Request The Brochure", to: "/brochure" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
