import brochureBg from "@/assets/brochure-bg.jpg";
import { Download } from "lucide-react";
import { Reveal } from "./Reveal";

export function BrochureSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={brochureBg}
        alt="Wooden slat feature wall inside Maruti 360"
        loading="lazy"
        width={1920}
        height={600}
        className="h-[320px] w-full object-cover md:h-[360px]"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-center px-5 md:px-14">
        <Reveal>
          <div className="max-w-[520px]">
            <h2 className="font-display text-[26px] text-foreground md:text-[34px]">
              The 360 Brochure
            </h2>
            <p className="mt-4 text-[11px] leading-[1.9] text-muted-foreground">
              RERA Number: PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12039/280623
            </p>
            <p className="text-[11px] text-muted-foreground">
              RERA Website:{" "}
              <a
                href="http://www.gujrera.gujarat.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="text-gold"
              >
                http://www.gujrera.gujarat.gov.in/
              </a>
            </p>
            <a href="/brochure.pdf" className="btn-gold mt-6 gap-2">
              <Download size={13} />
              Download Brochure
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
