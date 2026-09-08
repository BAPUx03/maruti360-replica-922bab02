import { useState } from "react";
import { Expand, Loader2 } from "lucide-react";
import landscape from "@/assets/Maruti_360_view.webp";
import { Reveal } from "./Reveal";

const TOUR_URL = "https://view.pixeldo.com/Maruti360/";

export function ViewSection() {
  const [loaded, setLoaded] = useState(false);
  // The Pixeldo panorama is a heavy third-party embed: nothing is fetched
  // until the visitor explicitly clicks "Load 360° view".
  const [requested, setRequested] = useState(false);

  return (
    <section className="bg-surface">
      <img
        src={landscape}
        alt="Panoramic observation deck view from Maruti 360"
        loading="lazy"
        width={1920}
        height={720}
        className="h-[280px] w-full object-cover md:h-[520px]"
      />

      <div className="px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">The Kind Of View</p>
            <h2 className="mx-auto mt-4 max-w-[900px] font-display text-[28px] leading-snug text-foreground md:text-[42px]">
              Where Spectacles Come Alive
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-[13px] leading-[2] text-muted-foreground">
              Experience Ahmedabad like never before. Explore the live 360° panorama — drag to look
              around and rise through every level of the skyline from Maruti 360.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-[1240px]">
            <div className="relative overflow-hidden border border-gold/25 bg-background shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-gold/20 px-4 py-3 md:px-6">
                <span className="text-[10px] uppercase tracking-[0.24em] text-gold md:text-[11px]">
                  360° Experience
                </span>
                <a
                  href={TOUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold md:text-[11px]"
                >
                  <Expand size={13} />
                  Full Screen
                </a>
              </div>

              <div className="relative aspect-[16/10] w-full md:aspect-[16/8]">
                {!requested ? (
                  <>
                    <img
                      src={landscape}
                      alt="Preview of the Maruti 360 panoramic city view"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/55 px-6 text-center">
                      <button
                        type="button"
                        onClick={() => setRequested(true)}
                        className="btn-gold"
                      >
                        Load 360° view
                      </button>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/70">
                        Loads an external interactive panorama
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {!loaded && (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        <Loader2 size={15} className="animate-spin text-gold" />
                        Loading View
                      </div>
                    )}
                    <iframe
                      src={TOUR_URL}
                      title="Maruti 360 interactive 360 degree view"
                      allowFullScreen
                      allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
                      onLoad={() => setLoaded(true)}
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </>
                )}
              </div>
            </div>

            <p className="mt-5 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Drag to explore · Pinch or scroll to zoom
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
