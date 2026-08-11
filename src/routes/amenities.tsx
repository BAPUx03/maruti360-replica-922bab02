import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import {
  Eye,
  Building2,
  Gamepad2,
  Dumbbell,
  Waves,
  Clapperboard,
  HeartPulse,
  Flower2,
  Baby,
  Trees,
  Car,
  ShieldCheck,
} from "lucide-react";
import { ResidenceLayout, Faqs } from "@/components/site/ResidencePage";
import hero from "@/assets/Maruti_360_POOL_3.webp";
import play from "@/assets/Maruti360_PLAY_AREA_4.webp";
import view from "@/assets/Maruti_360_view.webp";

const TITLE = "Amenities — Sky Deck, Pool, Clubhouse & Wellness | 41-Storey Towers";
const DESCRIPTION =
  "Explore the amenities of our 41-storey twin towers off SG Highway, Ahmedabad: a 360° viewing gallery, lap pool, clubhouse, theatre, gym, yoga deck, indoor games arena and landscaped gardens.";
const URL = "https://www.maruti-360.com/amenities";

const GROUPS = [
  {
    title: "Sky & Leisure",
    items: [
      { icon: Eye, label: "360° Viewing Gallery", copy: "A telescope-fitted observation deck framing the entire city skyline." },
      { icon: Waves, label: "Lap Pool", copy: "A tree-lined swimming pool with a separate kids' pool and deck seating." },
      { icon: Clapperboard, label: "Private Theatre", copy: "An acoustically treated screening room for family evenings." },
    ],
  },
  {
    title: "Fitness & Wellness",
    items: [
      { icon: Dumbbell, label: "Gymnasium", copy: "Cardio and strength zones with natural light and skyline-facing glazing." },
      { icon: HeartPulse, label: "Wellness Centre", copy: "Spa, steam and massage rooms for recovery days." },
      { icon: Flower2, label: "Yoga & Meditation Deck", copy: "A quiet open-air deck oriented for sunrise practice." },
    ],
  },
  {
    title: "Family & Community",
    items: [
      { icon: Building2, label: "Grand Clubhouse", copy: "Banquet, lounge and co-working corners for residents and guests." },
      { icon: Gamepad2, label: "Indoor Games Arena", copy: "Pool, foosball, table tennis and a dedicated board-game lounge." },
      { icon: Baby, label: "Children's Play Area", copy: "Soft-surface play zones with shaded seating for parents." },
      { icon: Trees, label: "Landscaped Gardens", copy: "Walking loops, lawns and seating pockets across the podium." },
    ],
  },
  {
    title: "Everyday Convenience",
    items: [
      { icon: Car, label: "Multi-Level Parking", copy: "Covered parking with EV-ready provisioning on select levels." },
      { icon: ShieldCheck, label: "24×7 Security", copy: "Perimeter CCTV, controlled lobby access and trained staff." },
    ],
  },
];

const FAQS = [
  {
    q: "What is the 360° viewing gallery?",
    a: "It is a dedicated observation deck at height, fitted with a telescope and framed seating, so residents can take in the full Ahmedabad skyline — the amenity the project is named after.",
  },
  {
    q: "Are amenities shared across both towers?",
    a: "Yes. The clubhouse, pool, wellness centre and landscaped podium serve residents of both towers, planned for comfortable capacity rather than crowding.",
  },
  {
    q: "Is there a separate children's zone?",
    a: "Yes — a soft-surface outdoor play area plus indoor games facilities, with shaded parent seating alongside.",
  },
  {
    q: "Who maintains the amenities after possession?",
    a: "A professional facility management team handles housekeeping, landscaping, pool treatment and equipment servicing, funded through the resident maintenance structure.",
  },
  {
    q: "Can I see the amenities before booking?",
    a: "Yes. A guided walkthrough of the amenity plan, sample layouts and material palette is part of every scheduled site visit.",
  },
];

export const Route = createFileRoute("/amenities")({
  component: AmenitiesPage,
  loader: () => getSeo({ data: { path: "/amenities" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/amenities", loaderData),
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

function AmenitiesPage() {
  return (
    <ResidenceLayout
      eyebrow="Amenities"
      title="Live A Life Above It All"
      intro="Over thirty curated amenities across the podium, the clubhouse and the sky — designed so the building gives back time rather than taking it."
      image={hero}
      imageAlt="A long luxury lap pool surrounded by trees"
    >
      {GROUPS.map((g, gi) => (
        <section
          key={g.title}
          className={`${gi % 2 === 0 ? "bg-surface" : "bg-surface-2"} px-5 py-16 md:px-10 md:py-24`}
        >
          <div className="mx-auto max-w-[1150px]">
            <p className="eyebrow">{g.title}</p>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map(({ icon: Icon, label, copy }) => (
                <div key={label} className="border-t border-gold/25 pt-6">
                  <Icon size={28} strokeWidth={1} className="text-gold" />
                  <h3 className="mt-4 font-display text-[19px] text-foreground">
                    {label}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-[1.95] text-muted-foreground">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-surface px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1150px] gap-6 md:grid-cols-2">
          <img
            src={play}
            alt="Indoor games arena with pool tables and foosball"
            loading="lazy"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
          <img
            src={view}
            alt="Observation deck with a telescope overlooking the city"
            loading="lazy"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="eyebrow text-center">Questions</p>
          <h2 className="mt-3 text-center font-display text-[26px] text-foreground md:text-[36px]">
            Amenities FAQ
          </h2>
          <Faqs items={FAQS} />
          <div className="mt-10 text-center">
            <a href="/#contact" className="btn-gold inline-block">
              Book A Walkthrough
            </a>
          </div>
        </div>
      </section>
    </ResidenceLayout>
  );
}
