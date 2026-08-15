import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { IndexLinks, IndexSection, SeoIndexPage } from "@/components/site/SeoIndexPage";
import { PROJECT_FACTS, FACTUAL_DISCLAIMER } from "@/lib/project-facts";

export const Route = createFileRoute("/rera-legal")({
  component: ReraPage,
  loader: () => getSeo({ data: { path: "/rera-legal" } }),
  head: ({ loaderData }) => ({ ...seoHead("/rera-legal", loaderData) }),
});

function ReraPage() {
  return (
    <SeoIndexPage
      eyebrow="RERA & Legal"
      title="Maruti 360 RERA and Legal Details"
      intro="Review the project registration reference and request the latest approved documents from the official sales team before making a purchase decision."
    >
      <IndexSection title="Project registration reference">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border border-border p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              RERA registration number
            </p>
            <p className="mt-4 break-words font-display text-[20px] leading-relaxed text-foreground">
              {PROJECT_FACTS.reraNumber}
            </p>
          </div>
          <div className="border border-border p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Possession timeline
            </p>
            <p className="mt-4 font-display text-[19px] leading-snug text-foreground">
              {PROJECT_FACTS.possessionDisplay}
            </p>
            <p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground">
              Confirm the latest RERA-declared possession timeline and construction status directly
              with the sales team before booking.
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-[800px] text-[13px] leading-[2] text-muted-foreground">
          RERA registration is not a substitute for independent legal or financial advice. Ask for
          the sanctioned plans, agreement for sale, payment schedule, carpet-area details and the
          latest project disclosures before booking. {FACTUAL_DISCLAIMER}
        </p>
        <a
          href={PROJECT_FACTS.reraPortalUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.16em] text-gold"
        >
          Verify on Gujarat RERA
        </a>
        <IndexLinks
          links={[
            { label: "FAQ", to: "/faq" },
            { label: "View Price & Payment Plan", to: "/price" },
            { label: "Contact / Document Request", to: "/contact-us" },
          ]}
        />
      </IndexSection>
    </SeoIndexPage>
  );
}
