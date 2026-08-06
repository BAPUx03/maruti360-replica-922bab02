import { Reveal } from "./Reveal";

const PLACES = [
  { id: "01", name: "SG Highway", top: "38%", left: "32%" },
  { id: "02", name: "Karnavati Club", top: "52%", left: "26%" },
  { id: "03", name: "Iskcon-Ambli Road", top: "68%", left: "44%" },
  { id: "04", name: "SBR", top: "58%", left: "62%" },
];

export function LocationSection() {
  return (
    <section className="bg-surface-2 px-5 py-24 text-center md:px-10 md:py-32">
      <Reveal>
        <p className="eyebrow">Fulfill Your Dream To</p>
        <h2 className="mx-auto mt-4 max-w-[900px] font-display text-[26px] leading-snug text-foreground md:text-[40px]">
          Live in Ahmedabad&apos;s Most Prestigious Location
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto mt-14 h-[380px] w-full max-w-[1000px] border border-border bg-surface md:h-[460px]">
          {PLACES.map((p) => (
            <div
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: p.top, left: p.left }}
            >
              <div className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-gold/70 bg-surface-2 text-[10px] text-gold">
                {p.id}
                <span className="pointer-events-none absolute left-1/2 top-9 w-max -translate-x-1/2 whitespace-nowrap bg-surface-2 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                  {p.name}
                </span>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 right-5 w-[220px] border border-border bg-surface-2 p-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gold">Key Locations</p>
            <ul className="mt-3 space-y-2">
              {PLACES.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-2 text-[11px] text-muted-foreground"
                >
                  <span className="text-gold">{p.id}</span>
                  {p.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <span className="inline-block h-3 w-3 rounded-full bg-gold" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
