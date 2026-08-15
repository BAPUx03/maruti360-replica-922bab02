import { useEffect, useRef, useState } from "react";

export function VideoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          setInView(e.isIntersecting);
          const v = videoRef.current;
          if (!v) return;
          if (e.isIntersecting) void v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Text reveals on scroll, then clears once the film is running
  useEffect(() => {
    if (!inView || !playing) return;
    const t = setTimeout(() => setInView(false), 2200);
    return () => clearTimeout(t);
  }, [inView, playing]);

  const showText = inView;

  return (
    <section ref={sectionRef} className="over-media relative overflow-hidden bg-background">
      <div className="relative h-[70vh] min-h-[420px] w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="https://maruti360.com/wp-content/uploads/2024/05/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setPlaying(true)}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            showText
              ? "bg-gradient-to-b from-black/70 via-black/40 to-black/80 opacity-100"
              : "bg-gradient-to-b from-black/30 via-transparent to-black/45 opacity-100"
          }`}
        />

        <div className="pointer-events-none relative flex h-full items-center justify-center px-6 text-center">
          <div
            className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showText ? "translate-y-0 opacity-100 blur-0" : "-translate-y-4 opacity-0 blur-[6px]"
            }`}
          >
            <p className="eyebrow">The Film</p>
            <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[28px] leading-snug text-foreground md:text-[44px]">
              A Skyline Written In Light
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-[2] text-muted-foreground">
              Twin towers, 41 storeys, and an address that turns every evening into an occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
