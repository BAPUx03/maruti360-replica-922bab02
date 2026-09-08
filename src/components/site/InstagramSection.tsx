import { Reveal } from "./Reveal";
import towers from "@/assets/Maruti_360_1.webp";
import banner from "@/assets/main-banner-scaled.webp";
import deck from "@/assets/Maruti_360_view.webp";
import pool from "@/assets/Maruti_360_POOL_3.webp";
import play from "@/assets/Maruti360_PLAY_AREA_4.webp";
import bedroom from "@/assets/Maruti_360_bedroom_2.webp";
import render from "@/assets/adasd-1.webp";

// Presentation-only project gallery. No social links or "Follow"/"Load more"
// controls until real, verified profile and post URLs exist.
const SHOTS = [
  { img: towers, caption: "Twin towers rising 41 storeys above the skyline." },
  { img: bedroom, caption: "Bedrooms framed by uninterrupted horizons." },
  { img: pool, caption: "An emerald pool deck wrapped in greenery." },
  { img: play, caption: "Indoor games arena built for every generation." },
  { img: deck, caption: "The 360 viewing gallery — spectacles come alive." },
  { img: banner, caption: "Sunsets watched from 501 feet above." },
  { img: render, caption: "Architecture designed to outlast trends." },
  { img: bedroom, caption: "Real luxury is lived in life's finest moments." },
];

export function InstagramSection() {
  return (
    <section className="bg-surface px-5 py-14 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Project Gallery</p>
            <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[36px]">
              A Closer Look At Maruti 360
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-2 gap-1 sm:grid-cols-4">
            {SHOTS.map((shot, i) => (
              <figure
                key={`${shot.caption}-${i}`}
                className="group relative block aspect-square overflow-hidden bg-surface-2"
              >
                <img
                  src={shot.img}
                  alt={shot.caption}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[10px] leading-snug text-foreground/90">{shot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
