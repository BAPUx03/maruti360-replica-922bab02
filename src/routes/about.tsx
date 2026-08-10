import { createFileRoute } from "@tanstack/react-router";
import { ResidenceLayout, Faqs } from "@/components/site/ResidencePage";
import hero from "@/assets/adasd-1.webp";
import groupImg from "@/assets/maruti-group.jpg";

const TITLE = "About The Developer — 40 Years Of Inspiring Realty In Ahmedabad";
const DESCRIPTION =
  "Since 1985, our team has delivered residential and commercial landmarks across Ahmedabad. Learn about the vision, design partners and construction standards behind the 41-storey twin towers off SG Highway.";
const URL = "https://www.maruti-360.com/about";

const MILESTONES = [
  { year: "1985", text: "Foundation laid — the first residential development delivered in Ahmedabad." },
  { year: "2000s", text: "Expansion into large-format residential townships and commercial addresses." },
  { year: "2015", text: "Design-led high-rise living introduced with in-house project management." },
  { year: "Today", text: "41-storey twin towers off SG Highway — 501 ft of skyline-facing living." },
];

const VALUES = [
  { h: "Build Quality", p: "RCC design reviewed by independent structural consultants, with imported formwork systems for a truer finish on every floor." },
  { h: "Design Partners", p: "Architecture, landscape, MEP and facade handled by specialist consultants rather than a single generalist team." },
  { h: "Transparency", p: "RERA-registered, with documented payment schedules, carpet-area disclosures and no hidden charges." },
  { h: "After Handover", p: "A dedicated facility management framework so the amenity decks and common areas age well." },
];

const FAQS = [
  {
    q: "How long has the developer been building in Ahmedabad?",
    a: "Since 1985 — nearly four decades of residential and commercial delivery across the city, with a focus on west Ahmedabad and the SG Highway corridor.",
  },
  {
    q: "Is the project RERA registered?",
    a: "Yes. The project is registered with Gujarat RERA and the registration number, approved plans and sanctioned layout are shared at the experience centre.",
  },
  {
    q: "Who are the consultants on the project?",
    a: "Architecture, structural design, MEP, landscape and facade engineering are each handled by specialist consultants, coordinated by the in-house project management team.",
  },
  {
    q: "Can I visit past delivered projects?",
    a: "Yes. A site-visit itinerary can include a completed development nearby so you can judge finish quality and maintenance first-hand.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "luxury builder Ahmedabad, real estate developer SG Highway, RERA registered project Ahmedabad, high rise developer Gujarat",
      },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
        }),
      },
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

function AboutPage() {
  return (
    <ResidenceLayout
      eyebrow="Since 1985"
      title="Inspiring Realty, Built On Promises"
      intro="Four decades of building homes in Ahmedabad — and one address that finally puts the whole city in the frame."
      image={hero}
      imageAlt="Twin luxury residential towers at twilight"
    >
      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow">The Studio</p>
            <h2 className="mt-3 font-display text-[28px] leading-tight text-foreground md:text-[40px]">
              Rooted In Craft, Driven By Innovation
            </h2>
            <p className="mt-6 text-[13px] leading-[2] text-muted-foreground">
              We have been building in Ahmedabad since 1985, one project at a
              time, with the same idea each time — that a home should feel
              considered long after the handover. That belief shows up in the
              structural detailing, the ventilation planning, the depth of the
              decks and the way common areas are maintained years later.
            </p>
            <p className="mt-4 text-[13px] leading-[2] text-muted-foreground">
              The twin towers off SG Highway are the clearest expression of that
              approach: 41 storeys, 501 feet, and residences designed so the
              skyline is part of everyday life rather than a weekend view.
            </p>
            <a href="/#contact" className="btn-gold mt-8 inline-block">
              Talk To An Advisor
            </a>
          </div>
          <img
            src={groupImg}
            alt="A delivered residential tower at golden hour"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1150px]">
          <p className="eyebrow text-center">Milestones</p>
          <h2 className="mt-3 text-center font-display text-[26px] text-foreground md:text-[36px]">
            Four Decades In The Making
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m) => (
              <div key={m.year} className="border-t border-gold/30 pt-5">
                <p className="font-display text-[26px] text-gold">{m.year}</p>
                <p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1150px]">
          <p className="eyebrow text-center">What We Hold To</p>
          <h2 className="mt-3 text-center font-display text-[26px] text-foreground md:text-[36px]">
            Standards That Do Not Move
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.h} className="border-l border-gold/30 pl-6">
                <h3 className="font-display text-[20px] text-foreground">{v.h}</h3>
                <p className="mt-3 text-[13px] leading-[2] text-muted-foreground">
                  {v.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="eyebrow text-center">Questions</p>
          <h2 className="mt-3 text-center font-display text-[26px] text-foreground md:text-[36px]">
            About The Developer
          </h2>
          <Faqs items={FAQS} />
        </div>
      </section>
    </ResidenceLayout>
  );
}
