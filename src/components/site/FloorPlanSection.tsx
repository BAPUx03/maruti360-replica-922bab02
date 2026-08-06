import { useState } from "react";
import blueprint from "@/assets/Maruti-Buildings-01.png.asset.json";
import { Reveal } from "./Reveal";

export function FloorPlanSection() {
  const [plan, setPlan] = useState("4 BHK");

  return (
    <section id="floor-plan" className="bg-surface px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Our Floor Plan</p>
            <h2 className="mt-4 font-display text-[28px] leading-snug text-foreground md:text-[42px]">
              An Engineering Perfection
            </h2>
            <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-[2] text-muted-foreground">
              Maruti 360 is a reflection of years of exclusive research, mindful planning,
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

              <div className="mt-6 flex flex-col gap-3">
                {["4 BHK", "5 BHK"].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlan(p)}
                    className={`w-fit border-b pb-1 text-[12px] uppercase tracking-[0.16em] transition-colors ${
                      plan === p
                        ? "border-gold text-gold"
                        : "border-transparent text-muted-foreground hover:text-gold"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <a href="/floor-plan" className="btn-gold mt-8">
                Explore
              </a>
            </div>

            <img
              src={blueprint.url}
              alt="Architect drafting the Maruti 360 floor plan"
              loading="lazy"
              width={900}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
