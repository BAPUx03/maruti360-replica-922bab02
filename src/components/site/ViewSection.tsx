import { useState } from "react";
import landscape from "@/assets/landscape-drive.jpg";
import { Reveal } from "./Reveal";

const VIEWS = ["Night View", "Sunset View", "Day View"];
const HEIGHTS = ["150M", "125M", "100M", "70M", "45M", "25M"];

export function ViewSection() {
  const [view, setView] = useState(VIEWS[0]);
  const [height, setHeight] = useState(HEIGHTS[2]);

  return (
    <section className="bg-surface">
      <img
        src={landscape}
        alt="Landscaped arrival driveway at Maruti 360"
        loading="lazy"
        width={1920}
        height={720}
        className="h-[280px] w-full object-cover md:h-[520px]"
      />

      <div className="px-5 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow">The Kind Of View</p>
          <h2 className="mx-auto mt-4 max-w-[900px] font-display text-[28px] leading-snug text-foreground md:text-[42px]">
            Where Spectacles Come Alive
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">
            Experience Ahmedabad like never before. From the mesmerising city lights to the tranquil
            beauty of Ahmedabad, every view from Maruti 360 will remain purely breathtaking forever.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {VIEWS.map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`border px-5 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  view === v
                    ? "border-gold text-gold"
                    : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {HEIGHTS.map((h) => (
              <button
                key={h}
                onClick={() => setHeight(h)}
                className={`px-3 py-1 text-[11px] tracking-[0.12em] transition-colors ${
                  height === h ? "text-gold" : "text-muted-foreground hover:text-gold"
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {view} · {height}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
