import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reveal } from "@/components/site/Reveal";
import { Faqs } from "@/components/site/ResidencePage";
import blueprint from "@/assets/Maruti-Buildings-01.png";
import bedroom from "@/assets/Maruti_360_bedroom_2.webp";

const TITLE = "Floor Plans — 4 & 5 BHK Sky Residences Off SG Highway, Ahmedabad";
const DESCRIPTION =
  "Explore 4 BHK and 5 BHK luxury floor plans in 41-storey twin towers off SG Highway, Ahmedabad — carpet areas, layouts, sky decks and FAQs.";
const URL = "https://maruti360.lovable.app/floor-plan";

const FAQS = [
  {
    q: "Which configurations are available in this project?",
    a: "The twin towers offer 4 BHK and 5 BHK sky residences across 41 storeys. Jodi, duplex and penthouse formats can be planned on select floors on request.",
  },
  {
    q: "Can I see the floor plan before booking?",
    a: "Yes. Detailed unit plans, floor keys and typical-level layouts are shared at the experience centre, and a soft copy can be sent after a quick verification call.",
  },
  {
    q: "Are the layouts Vastu compliant?",
    a: "Layouts have been planned with Vastu principles in mind, with entrances, kitchens and master bedrooms positioned to suit most orientation preferences.",
  },
  {
    q: "What is the possession timeline?",
    a: "Construction is progressing as per the RERA-declared schedule. Current possession timelines and the latest construction status are shared with every site visit.",
  },
];

const PLANS = [
  {
    href: "/floor-plan/4-bhk",
    name: "4 BHK",
    note: "Available in this project",
    copy: "Wide-frontage four-bedroom sky residences with deep decks and skyline-facing living rooms.",
  },
  {
    href: "/floor-plan/5-bhk",
    name: "5 BHK",
    note: "Available in this project",
    copy: "Signature five-bedroom residences with private lounge, family deck and staff quarters.",
  },
];

export const Route = createFileRoute("/floor-plan/")({
  component: FloorPlanIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
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

function FloorPlanIndex() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="over-media relative flex min-h-[58vh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center md:px-10">
          <img
            src={bedroom}
            alt="Master bedroom interior of a sky residence"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
          <div className="relative mx-auto max-w-[900px]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
              Our Floor Plans
            </p>
            <h1 className="mt-5 font-display text-[32px] leading-[1.15] text-foreground sm:text-[46px] md:text-[60px]">
              An Engineering Perfection
            </h1>
            <p className="mx-auto mt-6 max-w-[660px] text-[13px] leading-[2] text-foreground/75">
              Choose the configuration that fits your life — every plan is the outcome of years of
              research, mindful planning and systematic execution.
            </p>
          </div>
        </section>

        <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-3">
                {PLANS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    className="group border border-border p-7 transition-colors hover:border-gold/60"
                  >
                    <p className="font-display text-[30px] text-foreground group-hover:text-gold">
                      {p.name}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-gold">
                      {p.note}
                    </p>
                    <p className="mt-4 text-[13px] leading-[2] text-muted-foreground">{p.copy}</p>
                    <span className="mt-6 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.18em] text-gold">
                      Explore
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <img
                src={blueprint}
                alt="Line drawing of the twin residential towers"
                loading="lazy"
                width={900}
                height={600}
                className="mx-auto mt-16 w-full max-w-[560px] object-contain"
              />
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-16 text-center">
                <p className="eyebrow">Frequently Asked Questions</p>
                <h2 className="mt-4 font-display text-[26px] text-foreground md:text-[38px]">
                  Floor Plan Questions, Answered
                </h2>
              </div>
              <Faqs items={FAQS} />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
