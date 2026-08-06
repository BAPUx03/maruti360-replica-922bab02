import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    h: "Luxury 4 & 5 BHK Apartments on S.G. Highway, Ahmedabad",
    p: "Maruti 360 is a landmark twin-tower residential development rising 41 storeys — 501 feet — above S.G. Highway, Ahmedabad. Each home is a sky residence designed for panoramic, uninterrupted views of the city skyline, with wide sun-decks, deep terraces and layouts that place light and air at the centre of everyday living.",
  },
  {
    h: "Why Buyers Choose This Address",
    p: "The location connects you to Ahmedabad's business districts, international schools, hospitals and retail within minutes, while the towers themselves offer resort-grade amenities — an infinity-edge lap pool, an indoor games arena, wellness studios, landscaped decks and a 360° observation lounge that gives the project its name.",
  },
  {
    h: "Configurations & Pricing",
    p: "Choose from spacious 4 BHK residences and expansive 5 BHK sky homes, with jodi, duplex and penthouse formats available on select floors. Detailed carpet areas, layout drawings and current price bands are shared on request — our team responds the same working day.",
  },
];

export function SeoSection() {
  return (
    <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <p className="eyebrow">Project Overview</p>
          <h2 className="mt-4 font-display text-[24px] leading-snug text-foreground md:text-[34px]">
            Sky Residences Above S.G. Highway, Ahmedabad
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.h} delay={80 * i}>
              <article>
                <h3 className="font-display text-[15px] leading-snug text-foreground md:text-[17px]">
                  {b.h}
                </h3>
                <p className="mt-3 text-[12px] leading-[2] text-muted-foreground">{b.p}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Explore Residences
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-[12px]">
              <Link to="/floor-plan" className="text-gold hover:underline">
                All Floor Plans
              </Link>
              <Link to="/floor-plan/3-bhk" className="text-gold hover:underline">
                3 BHK Apartments in Ahmedabad
              </Link>
              <Link to="/floor-plan/4-bhk" className="text-gold hover:underline">
                4 BHK Luxury Residences
              </Link>
              <Link to="/floor-plan/5-bhk" className="text-gold hover:underline">
                5 BHK Sky Homes
              </Link>
              <a href="#contact" className="text-gold hover:underline">
                Book a Site Visit
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
