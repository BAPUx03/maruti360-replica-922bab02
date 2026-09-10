import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { pageSchema, seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage, FaqSection } from "@/components/site/SeoIndexPage";
import { FACTUAL_DISCLAIMER, LAST_CHECKED, PROJECT_FACTS } from "@/lib/project-facts";

const PARTNERS = [
  { role: "Architect partner", name: "Sanjay Puri Architects" },
  { role: "Design partner", name: "DUCON" },
  { role: "Construction partner", name: "JMC" },
];

const FAQS = [
  {
    q: "Who is the developer of Maruti 360?",
    a: "Maruti 360 is developed by Maruti Buildcon. Confirm the registered promoter name exactly as recorded on the official GujRERA portal before booking.",
  },
  {
    q: "Who designed Maruti 360?",
    a: "Sanjay Puri Architects is the architect partner, DUCON the design partner and JMC the construction partner.",
  },
  {
    q: "How do I verify the promoter details?",
    a: "Search the project registration number on the GujRERA portal, which lists the registered promoter and project record.",
  },
];

export const Route = createFileRoute("/developer")({
  component: DeveloperPage,
  loader: () => getSeo({ data: { path: "/developer" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/developer", loaderData),
    scripts: [
      ...pageSchema("/developer"),
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

function DeveloperPage() {
  return (
    <SeoIndexPage
      eyebrow="Developer"
      title="Maruti 360 Developer — Maruti Buildcon"
      intro="Who is behind Maruti 360 in Ahmedabad: the developer, the project partners and how to verify the registered promoter record before you book."
    >
      <IndexSection title="Maruti Buildcon">
        <p className="max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
          Maruti 360 is developed by {PROJECT_FACTS.developer}, building on promises since 1985. The
          project is a {PROJECT_FACTS.projectType.toLowerCase()} development{" "}
          {PROJECT_FACTS.location.toLowerCase()}, {PROJECT_FACTS.locationQualifier.toLowerCase()},
          offering {PROJECT_FACTS.configurations.join(" and ")} residences.
        </p>
        <p className="mt-5 max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
          The registered promoter name, project registration number and approval details are held on
          the official Gujarat RERA record. Always treat that record — not marketing material — as
          the source of truth on the developer entity behind the project.
        </p>
        <a
          href={PROJECT_FACTS.reraPortalUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.16em] text-gold"
        >
          Verify the promoter on GujRERA
        </a>
      </IndexSection>

      <IndexSection title="Project partners">
        <div className="grid gap-5 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <article key={p.role} className="border border-border p-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.role}
              </p>
              <p className="mt-3 font-display text-[21px] text-foreground">{p.name}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[800px] text-[13px] leading-[2] text-muted-foreground">
          Information last checked: {LAST_CHECKED}. {FACTUAL_DISCLAIMER}
        </p>
        <IndexLinks
          links={[
            { label: "About the Project", to: "/about" },
            { label: "Specifications", to: "/specifications" },
            { label: "RERA Details", to: "/rera-legal" },
            { label: "Contact Us", to: "/contact-us" },
          ]}
        />
      </IndexSection>
      <FaqSection items={FAQS} />
    </SeoIndexPage>
  );
}
