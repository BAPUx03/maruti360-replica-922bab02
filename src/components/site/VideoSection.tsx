import { Reveal } from "./Reveal";

export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative h-[70vh] min-h-[420px] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://maruti360.com/wp-content/uploads/2024/05/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <Reveal>
            <p className="eyebrow">The Film</p>
            <h2 className="mx-auto mt-4 max-w-[820px] font-display text-[28px] leading-snug text-foreground md:text-[44px]">
              A Skyline Written In Light
            </h2>
            <p className="mx-auto mt-5 max-w-[640px] text-[13px] leading-[2] text-muted-foreground">
              Twin towers, 41 storeys, and an address that turns every evening into an occasion.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
