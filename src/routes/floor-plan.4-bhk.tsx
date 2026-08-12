import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { ResidenceLayout, Faqs } from "@/components/site/ResidencePage";
import bedroom from "@/assets/Maruti_360_bedroom_2.webp";

const TITLE = "4 BHK Sky Residences Off SG Highway, Ahmedabad — Floor Plan";
const DESCRIPTION =
  "4 BHK luxury apartments in 41-storey twin towers off SG Highway, Ahmedabad: wide-frontage layout, deep sky deck, four homes per floor, premium specifications and FAQs.";
const URL = "https://www.maruti-360.com/floor-plan/4-bhk";

const FAQS = [
  {
    q: "What does the 4 BHK layout include?",
    a: "Four bedrooms with attached bathrooms, a skyline-facing living and dining space, a deep private deck, a modular-ready kitchen with utility, and a dedicated staff area on select levels.",
  },
  {
    q: "How many 4 BHK homes are there per floor?",
    a: "A typical floor holds four residences only, so every home enjoys a wide frontage, cross ventilation and privacy from neighbouring units.",
  },
  {
    q: "Which floors are available?",
    a: "Inventory spans low, mid and high zones across both towers of 41 storeys. Higher zones command a premium for the uninterrupted skyline view.",
  },
  {
    q: "Is the fourth bedroom usable as a study or home office?",
    a: "Yes. The fourth bedroom is planned with a flexible wall position, so it converts easily into a study, home office or guest suite.",
  },
  {
    q: "How do I get costing for a 4 BHK?",
    a: "Costing depends on floor zone, tower and view. Details are shared privately after you submit the enquiry form.",
  },
  {
    q: "Is parking included?",
    a: "Covered car parking is allotted with every residence, with additional bays available on request subject to availability.",
  },
];

export const Route = createFileRoute("/floor-plan/4-bhk")({
  component: FourBhk,
  loader: () => getSeo({ data: { path: "/floor-plan/4-bhk" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/floor-plan/4-bhk", loaderData),
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

const SPECS: [string, string][] = [
  ["Configuration", "4 BHK sky residence"],
  ["Homes per floor", "Four only"],
  ["Tower height", "41 storeys, twin towers"],
  ["Deck", "Deep skyline-facing private deck"],
  ["Kitchen", "Modular-ready with utility"],
  ["Parking", "Covered allotted parking"],
];

const HIGHLIGHTS = [
  "Wide-frontage living and dining opening onto the sky deck",
  "All four bedrooms with attached bathrooms and wardrobes planned",
  "Cross ventilation on every principal face",
  "Vastu-conscious entrance, kitchen and master bedroom placement",
  "High-speed lift lobbies with private-landing feel",
];

function FourBhk() {
  return (
    <ResidenceLayout
      eyebrow="4 BHK · Available"
      title="The 4 BHK Sky Residence"
      intro="Four bedrooms, a wide skyline frontage and a deck deep enough to live on — planned for families who measure luxury in horizons, not square feet."
      image={bedroom}
      imageAlt="Interior of a 4 BHK sky residence bedroom"
    >
      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="eyebrow">The Plan</p>
          <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[38px]">
            Planned Around The View
          </h2>
          <p className="mt-6 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">
            The 4 BHK is the heart of the project. With only four homes on a typical floor, the
            layout stretches along the tower frontage — living, dining and the primary bedrooms all
            face the skyline, while services and utility are tucked to the rear so the home stays
            quiet and uncluttered.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECS.map(([k, v]) => (
              <div key={k} className="border border-border p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gold">{k}</p>
                <p className="mt-2 text-[13px] text-foreground">{v}</p>
              </div>
            ))}
          </div>

          <ul className="mt-12 space-y-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex gap-3 text-[13px] leading-[2] text-muted-foreground">
                <span className="mt-[13px] h-px w-4 shrink-0 bg-gold" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/#contact" className="btn-gold">
              Request The Floor Plan
            </a>
            <a
              href="/floor-plan/5-bhk"
              className="border border-gold/50 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-surface"
            >
              Explore 5 BHK
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-[26px] text-foreground md:text-[36px]">
              4 BHK Questions, Answered
            </h2>
          </div>
          <Faqs items={FAQS} />
        </div>
      </section>
    </ResidenceLayout>
  );
}
