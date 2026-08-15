import { Reveal } from "./Reveal";
import { MapPin } from "lucide-react";

// Qualitative proximity only — no specific drive-time figures, since none
// are verified against an approved source.
const PLACES = [
  { id: "01", name: "S.G. Highway", note: "Direct connectivity" },
  { id: "02", name: "Karnavati Club", note: "Nearby" },
  { id: "03", name: "Iskcon–Ambli Road", note: "Short drive away" },
  { id: "04", name: "Business District", note: "Well connected" },
];

const MAP_QUERY = "Karnavati Club, S.G. Highway, Ahmedabad, Gujarat";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export function LocationSection() {
  return (
    <section id="location" className="bg-surface-2 px-5 py-16 md:px-10 md:py-28">
      <Reveal>
        <div className="text-center">
          <p className="eyebrow">Fulfill Your Dream To</p>
          <h2 className="mx-auto mt-4 max-w-[900px] font-display text-[26px] leading-snug text-foreground md:text-[40px]">
            Live in Ahmedabad&apos;s Most Prestigious Location
          </h2>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-14 grid max-w-[1200px] gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="overflow-hidden rounded-lg border border-gold/25 bg-surface">
            <iframe
              title="Project location on Google Maps"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full border-0 grayscale-[0.35] contrast-[1.05] md:h-[480px]"
              allowFullScreen
            />
          </div>

          <div className="rounded-lg border border-border bg-surface p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Key Locations</p>
            <ul className="mt-6 space-y-5">
              {PLACES.map((p) => (
                <li key={p.id} className="flex gap-4 border-b border-border pb-4 last:border-0">
                  <span className="font-display text-[15px] text-gold">{p.id}</span>
                  <span>
                    <span className="block text-[13px] text-foreground">{p.name}</span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {p.note}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-gold transition-opacity hover:opacity-80"
            >
              <MapPin size={14} />
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
