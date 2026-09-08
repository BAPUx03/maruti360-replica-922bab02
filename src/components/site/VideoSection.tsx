import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import poster from "@/assets/Maruti_360_1.webp";

const FILM_SRC = "https://maruti360.com/wp-content/uploads/2024/05/bg-video.mp4";

export function VideoSection() {
  // The film is a large third-party file, so nothing is requested until the
  // visitor explicitly asks for it: no autoplay, preload="none", and the
  // <source> is only attached after the first click.
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!started) {
      setStarted(true);
      // Wait for the source element to render before loading/playing.
      setTimeout(() => {
        const el = videoRef.current;
        if (!el) return;
        el.load();
        void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }, 0);
      return;
    }
    if (!v) return;
    if (v.paused) {
      void v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="over-media relative overflow-hidden bg-background">
      <div className="relative h-[70vh] min-h-[420px] w-full">
        {started ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            poster={poster}
            controls
            muted
            loop
            playsInline
            preload="none"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={FILM_SRC} type="video/mp4" />
          </video>
        ) : (
          <img
            src={poster}
            alt="Maruti 360 twin towers at dusk — still from the project film"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            started
              ? "bg-gradient-to-b from-black/20 via-transparent to-black/35"
              : "bg-gradient-to-b from-black/70 via-black/40 to-black/80"
          }`}
        />

        {!started && (
          <div className="relative flex h-full items-center justify-center px-6 text-center">
            <div>
              <p className="eyebrow">The Film</p>
              <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[28px] leading-snug text-foreground md:text-[44px]">
                A Skyline Written In Light
              </h2>
              <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-[2] text-muted-foreground">
                Twin towers, 41 storeys, and an address that turns every evening into an occasion.
              </p>
              <button
                type="button"
                onClick={toggle}
                aria-label="Play the Maruti 360 project film"
                className="btn-gold mt-8 inline-flex items-center gap-2"
              >
                <Play size={14} />
                Play film
              </button>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Loads only when you press play
              </p>
            </div>
          </div>
        )}

        {started && (
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause the project film" : "Play the project film"}
            className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 border border-gold/50 bg-black/50 px-5 py-2 text-[11px] uppercase tracking-[0.16em] text-gold"
          >
            <span className="inline-flex items-center gap-2">
              {playing ? <Pause size={13} /> : <Play size={13} />}
              {playing ? "Pause" : "Play"}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
