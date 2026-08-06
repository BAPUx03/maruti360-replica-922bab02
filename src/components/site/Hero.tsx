import heroNight from "@/assets/main-banner-scaled.webp.asset.json";
import { Phone, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] w-full overflow-hidden">
      <img
        src={heroNight.url}
        alt="Rooftop observation deck overlooking the Ahmedabad skyline at sunset"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/80" />



      <div className="relative hidden w-full border-b border-white/10 pt-24 text-[11px] text-foreground/70 md:block">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-end gap-6 px-10 pb-3">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-gold" />
            Maruti Road, Off SG Highway, Sanidhya, Ahmedabad
          </span>
          <a href="tel:+919909923456" className="flex items-center gap-2 hover:text-gold">
            <Phone size={13} className="text-gold" />
            +91 9909923456
          </a>
          <a
            href="mailto:sales@marutibuildcon.com"
            className="flex items-center gap-2 hover:text-gold"
          >
            <Mail size={13} className="text-gold" />
            sales@marutibuildcon.com
          </a>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-5">
        <h1 className="reveal-up text-center font-display text-[42px] leading-tight tracking-[0.06em] text-foreground/90 md:text-[74px]">
          Above It All
        </h1>
      </div>
    </section>
  );
}
