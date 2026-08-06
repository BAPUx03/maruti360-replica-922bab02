import { Reveal } from "./Reveal";

const PARTNERS = [
  { role: "Architect Partner", name: "Sanjay Puri Architects" },
  { role: "Design Partner", name: "DUCON" },
  { role: "Construction Partner", name: "JMC" },
];

export function PartnersSection() {
  return (
    <section className="bg-surface px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <p className="eyebrow">Our Partners</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PARTNERS.map((p) => (
              <div key={p.role}>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.role}
                </p>
                <div className="mt-4 flex h-[110px] items-center justify-center bg-white px-6">
                  <span className="text-center font-display text-[15px] tracking-[0.06em] text-[#141b38]">
                    {p.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
