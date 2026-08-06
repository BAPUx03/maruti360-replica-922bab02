import twinTowers from "@/assets/adasd-1.webp.asset.json";
import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section id="about" className="bg-surface px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <img
            src={twinTowers.url}
            alt="Maruti 360 twin residential towers render"
            loading="lazy"
            width={912}
            height={1200}
            className="w-full object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Luxurious Suites in Ahmedabad</p>
          <h2 className="mt-4 font-display text-[30px] leading-snug text-foreground md:text-[42px]">
            Rise Above The Horizon
          </h2>
          <p className="mt-6 text-[13px] leading-[2] text-muted-foreground">
            Welcome to Maruti 360, where sophistication and luxury redefine urban living. Our twin
            towers, 4 &amp; 5 BHK rise majestically, gracing the skyline with 41 storeys of
            unparalleled elegance. Located adjacent to the prestigious Karnavati Club on S.G.
            Highway, Maruti 360 offers residents a coveted lifestyle immersed in tranquillity and
            natural beauty. Every residence boasts lifetime panoramic views of the picturesque R3
            zone, adorned with lush greenery that complements the architectural masterpiece.
            Experience the epitome of modern living, where every detail is crafted to elevate your
            lifestyle to new heights.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
