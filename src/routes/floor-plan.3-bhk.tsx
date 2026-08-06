import { createFileRoute } from "@tanstack/react-router";
import { ResidenceLayout, Faqs } from "@/components/site/ResidencePage";
import towers from "@/assets/adasd-1.webp.asset.json";

const TITLE = "3 BHK in Ahmedabad — Available in Our Other Projects";
const DESCRIPTION =
  "This project does not offer a 3 BHK, but our other Ahmedabad projects do. See 3 BHK layout guidance, carpet-area ranges, pricing pointers and FAQs, or explore 4 & 5 BHK sky residences here.";
const URL = "https://maruti360.lovable.app/floor-plan/3-bhk";

const FAQS = [
  {
    q: "Is a 3 BHK available in this project?",
    a: "No. This project does not have any 3 BHK configuration — the twin towers are planned exclusively as 4 BHK and 5 BHK sky residences. Our other projects do offer 3 BHK homes.",
  },
  {
    q: "Where can I see your 3 BHK homes?",
    a: "Share your requirement through the enquiry form and our team will present the currently available 3 BHK inventory across our other Ahmedabad developments, including layouts and pricing.",
  },
  {
    q: "Why are there no 3 BHK units here?",
    a: "The tower footprint was planned for wide-frontage, low-density living — four homes per typical floor — so every residence receives a skyline frontage and a deep deck. That planning does not accommodate a 3 BHK format.",
  },
  {
    q: "What is the closest option to a 3 BHK in this project?",
    a: "The 4 BHK sky residence is the closest fit. Many buyers use the fourth bedroom as a study, home office or guest suite.",
  },
  {
    q: "Do the other projects share the same amenities standard?",
    a: "Amenity programmes differ by project, but all our developments follow the same standards of planning, material specification and construction quality.",
  },
];

export const Route = createFileRoute("/floor-plan/3-bhk")({
  component: ThreeBhk,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
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

function ThreeBhk() {
  return (
    <ResidenceLayout
      eyebrow="3 BHK · Other Projects"
      title="3 BHK Homes — Not In This Project"
      intro="This project does not have any 3 BHK, but our other projects do. Tell us what you are looking for and we will show you the closest 3 BHK homes available today."
      image={towers.url}
      imageAlt="Twin luxury residential towers at twilight"
    >
      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="eyebrow">Please Note</p>
          <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[38px]">
            A 3 BHK Is Available — Just Not Here
          </h2>
          <p className="mt-6 text-[13px] leading-[2] text-muted-foreground">
            The twin towers off SG Highway are planned exclusively as 4 BHK and 5 BHK sky
            residences, with only four homes on a typical floor. That low-density planning gives
            every residence a skyline frontage and a deep private deck — and it leaves no room for a
            3 BHK layout.
          </p>
          <p className="mt-5 text-[13px] leading-[2] text-muted-foreground">
            If a three-bedroom home is what you need, our other Ahmedabad projects carry
            well-planned 3 BHK residences with efficient carpet areas, cross ventilation and the
            same construction standards. Availability, floor levels and pricing change frequently,
            so our team shares a live inventory sheet on request.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              ["Configuration", "3 BHK — other projects only"],
              ["This project", "4 BHK & 5 BHK sky residences"],
              ["Homes per floor", "Four, wide-frontage planning"],
              ["Closest fit here", "4 BHK with study / guest suite"],
            ].map(([k, v]) => (
              <div key={k} className="border border-border p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gold">{k}</p>
                <p className="mt-2 text-[13px] text-foreground">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/floor-plan/4-bhk" className="btn-gold">
              Explore 4 BHK
            </a>
            <a
              href="/#contact"
              className="border border-gold/50 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-surface"
            >
              Ask For 3 BHK Options
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 className="mt-4 font-display text-[26px] text-foreground md:text-[36px]">
              3 BHK Questions, Answered
            </h2>
          </div>
          <Faqs items={FAQS} />
        </div>
      </section>
    </ResidenceLayout>
  );
}
