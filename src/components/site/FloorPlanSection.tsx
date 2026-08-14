import { useState } from "react";
import blueprint from "@/assets/Maruti-Buildings-01.png";
import { Reveal } from "./Reveal";

export function FloorPlanSection() {
  const [plan, setPlan] = useState("4 BHK");
  const PLANS = [
    { label: "4 BHK", href: "/floor-plan/4-bhk" },
    { label: "5 BHK", href: "/floor-plan/5-bhk" },
  ];
  const active = PLANS.find((p) => p.label === plan) ?? {
    label: "4 BHK",
    href: "/floor-plan/4-bhk",
  };

  return (
    <section id="floor-plan" className="bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Our Floor Plan</p>
            <h2 className="mt-4 font-display text-[28px] leading-snug text-foreground md:text-[42px]">
              An Engineering Perfection
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
              Every residence is a reflection of years of exclusive research, mindful planning,
              systematic execution, functional amenities and a philosophy of committing ourselves to
              a few exclusive projects at a time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Find Your Uber Luxurious Suite Plan</p>
              <p className="mt-4 text-[13px] leading-[2] text-muted-foreground">
                Come find a home that equates to your lifestyle and enhances it.
              </p>

              <div className="mt-6 flex flex-wrap gap-6">
                {PLANS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setPlan(p.label)}
                    className={`w-fit border-b pb-1 text-[12px] uppercase tracking-[0.16em] transition-colors ${
                      plan === p.label
                        ? "border-gold text-gold"
                        : "border-transparent text-muted-foreground hover:text-gold"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <a href={active.href} className="btn-gold mt-8">
                Explore {active.label}
              </a>
            </div>

            <img
              src={blueprint}
              alt="Architect drafting the Maruti 360 floor plan"
              loading="lazy"
              width={900}
              height={600}
              className="mx-auto w-full max-w-[520px] object-contain md:max-w-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
