import heroNight from "@/assets/main-banner-scaled.webp.asset.json";

export function Hero() {
  return (
    <section className="over-media relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroNight.url}
        alt="Rooftop observation deck overlooking the Ahmedabad skyline at sunset"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="reveal-up text-[10px] uppercase tracking-[0.34em] text-gold sm:text-[11px]">
          Sanidhya &middot; Off SG Highway, Ahmedabad
        </span>

        <h1 className="reveal-up mt-6 max-w-[16ch] font-display text-[36px] leading-[1.12] tracking-[0.04em] text-foreground sm:text-[54px] md:text-[76px]">
          A Life Written
          <span className="block text-gold">In The Sky</span>
        </h1>

        <p className="reveal-up mt-6 max-w-[560px] text-[13px] leading-[2] text-foreground/75 sm:text-[14px]">
          501 feet of considered living — twin 41-storey towers crafted for those who measure
          luxury in horizons, not square feet.
        </p>

        <div className="reveal-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.22em] text-foreground/65 sm:text-[11px]">
          <span>4 &amp; 5 BHK Sky Residences</span>
          <span className="hidden h-3 w-px bg-gold/50 sm:block" />
          <span>41 Storeys</span>
          <span className="hidden h-3 w-px bg-gold/50 sm:block" />
          <span>Twin Towers</span>
        </div>

        <a href="#contact" className="btn-gold reveal-up mt-10">
          Request Priority Access
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-7 flex justify-center">
        <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/45">Scroll</span>
      </div>
    </section>
  );
}
