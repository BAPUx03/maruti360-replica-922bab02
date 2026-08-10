import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import towers from "@/assets/Maruti_360_1.webp";
import banner from "@/assets/main-banner-scaled.webp";
import deck from "@/assets/Maruti_360_view.webp";
import pool from "@/assets/Maruti_360_POOL_3.webp";
import play from "@/assets/Maruti360_PLAY_AREA_4.webp";
import bedroom from "@/assets/Maruti_360_bedroom_2.webp";
import render from "@/assets/adasd-1.webp";

const POSTS = [
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
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
            {POSTS.map((post, i) => (
              <a
                key={`${post.caption}-${i}`}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden bg-surface-2"
              >
                <img
                  src={post.img}
                  alt={post.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[10px] leading-snug text-foreground/90">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="border border-border px-5 py-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-gold hover:text-gold">
            Load More
          </button>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-gold"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
