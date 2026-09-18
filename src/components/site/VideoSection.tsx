import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import poster from "@/assets/Maruti_360_1.webp";

const FILM_SRC = "https://maruti360.com/wp-content/uploads/2024/05/bg-video.mp4";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
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
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label="Maruti 360 project film"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={FILM_SRC} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

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
      </div>
    </section>
  );
}
