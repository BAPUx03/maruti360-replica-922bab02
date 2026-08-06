import {
  Eye,
  Building2,
  Gamepad2,
  Dumbbell,
  Waves,
  Clapperboard,
  HeartPulse,
  Flower2,
  Baby,
  Trees,
} from "lucide-react";
import { Reveal } from "./Reveal";

const AMENITIES = [
  { icon: Eye, label: "The 360 Viewing Gallery" },
  { icon: Building2, label: "Clubhouse" },
  { icon: Gamepad2, label: "Indoor Games Arena" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Clapperboard, label: "Theatre" },
  { icon: HeartPulse, label: "Wellness Centre" },
  { icon: Flower2, label: "Yoga Deck" },
  { icon: Baby, label: "Children's Play Area" },
  { icon: Trees, label: "Landscape Garden & Lawn" },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-surface-2 px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[320px_1fr] md:gap-16">
        <Reveal>
          <p className="eyebrow">Amenities</p>
          <h2 className="mt-4 font-display text-[30px] leading-tight text-foreground md:text-[42px]">
            Live A Life
            <br />
            Above It All
          </h2>
          <a href="/amenities" className="btn-gold mt-8">
            Explore Amenities
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon size={30} strokeWidth={1} className="text-gold" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-foreground/80">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
