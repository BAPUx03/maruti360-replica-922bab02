import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { ResidenceLayout, Faqs } from "@/components/site/ResidencePage";
import view from "@/assets/Maruti_360_view.webp";

const TITLE = "5 BHK Luxury Apartments Off SG Highway, Ahmedabad — Floor Plan";
const DESCRIPTION =
  "5 BHK signature residences in 41-storey twin towers off SG Highway, Ahmedabad: private lounge, family deck, staff quarters, jodi and penthouse options, specifications and FAQs.";
const URL = "https://www.maruti-360.com/floor-plan/5-bhk";

const FAQS = [
  {
    q: "What makes the 5 BHK different from the 4 BHK?",
    a: "The 5 BHK adds a fifth bedroom, a separate family lounge and a larger deck, along with a dedicated staff room and service entry on most levels.",
  },
  {
    q: "Are jodi, duplex or penthouse formats possible?",
    a: "Yes. Select high-zone levels can be planned as jodi or duplex residences, and limited penthouse formats are available on request.",
  },
  {
    q: "Can the layout be customised?",
    a: "Internal non-structural changes can be discussed before the fit-out stage, subject to structural and statutory approvals.",
  },
  {
    q: "What views do the 5 BHK residences enjoy?",
    a: "Corner planning gives these homes two open faces — the SG Highway skyline on one side and open western horizons on the other.",
  },
  {
    q: "What is the price range for a 5 BHK?",
    a: "Pricing varies with floor zone, tower and format. Live price sheets are shared after a short verification call.",
  },
  {
    q: "Is a site visit possible before booking?",
    a: "Yes. Guided experience-centre visits with sample layouts and construction-status walkthroughs can be scheduled through the enquiry form.",
  },
];

export const Route = createFileRoute("/floor-plan/5-bhk")({
  component: FiveBhk,
  loader: () => getSeo({ data: { path: "/floor-plan/5-bhk" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/floor-plan/5-bhk", loaderData),
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
  ["Configuration", "5 BHK signature residence"],
  ["Planning", "Corner homes, two open faces"],
  ["Extras", "Family lounge + staff quarters"],
  ["Deck", "Extended wrap-around deck"],
  ["Formats", "Jodi / duplex / penthouse on request"],
  ["Parking", "Multiple covered bays"],
];

const HIGHLIGHTS = [
  "Separate formal living and private family lounge",
  "Master suite with walk-in wardrobe and deck access",
  "Service entry and staff quarters kept fully independent",
  "Extended deck planned for outdoor dining",
  "Priority allocation on high-zone levels",
];

function FiveBhk() {
  return (
    <ResidenceLayout
      eyebrow="5 BHK · Available"
      title="The 5 BHK Signature Residence"
      intro="A corner home with two open faces, a private family lounge and a wrap-around deck — the most generous format in the towers."
      image={view}
      imageAlt="Panoramic skyline view from a high-floor residence"
    >
      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="eyebrow">The Plan</p>
          <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[38px]">
            Space That Keeps Its Distance
          </h2>
          <p className="mt-6 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">
            The 5 BHK occupies the tower corners, so guest, family and private zones each get their
            own quiet address within the home. Formal living opens to the skyline; the family lounge
            and bedrooms sit on the calmer western face; services and staff quarters are entered
            separately.
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
              href="/floor-plan/4-bhk"
              className="border border-gold/50 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-surface"
            >
              Explore 4 BHK
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-[26px] text-foreground md:text-[36px]">
              5 BHK Questions, Answered
            </h2>
          </div>
          <Faqs items={FAQS} />
        </div>
      </section>
    </ResidenceLayout>
  );
}
