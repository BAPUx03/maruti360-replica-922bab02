import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";

const POSTS = [
  "Everyday well-being ensured ✨ 4 BHK living craft",
  "Your sanctuary of peace and luxury! 4 BHK living",
  "Homes where daily life looks like a calming retrea",
  "From ultra-luxurious amenities to never-ending com",
  "Landmark residences that are not only luxurious bu",
  "Homes that honour the importance of what you're ch",
  "Close to everything that matters. From spiritual e",
  "Real luxury is lived in life's finest moments. At",
];

export function InstagramSection() {
  return (
    <section className="bg-surface px-5 py-14 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
            {POSTS.map((caption, i) => (
              <a
                key={caption}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden bg-surface-2"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${140 + i * 20}deg, oklch(0.26 0.01 60), oklch(0.19 0.01 60))`,
                  }}
                />
                <div className="absolute inset-0 flex items-end bg-black/25 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-[10px] leading-snug text-foreground/90">{caption}</p>
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
