import brochureBg from "@/assets/brochure-bg.jpg";
import { Download } from "lucide-react";
import { Reveal } from "./Reveal";

export function BrochureSection() {
  return (
    <section className="over-media relative overflow-hidden">
      <img
        src={brochureBg}
        alt="Wooden slat feature wall inside Maruti 360"
        loading="lazy"
        width={1920}
        height={600}
        className="h-[420px] w-full object-cover sm:h-[360px]"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-center px-5 py-10 md:px-14">
        <Reveal>
          <div className="max-w-[520px]">
            <h2 className="font-display text-[24px] leading-tight text-foreground sm:text-[28px] md:text-[34px]">
              The 360 Brochure
            </h2>
            <p className="mt-4 break-words text-[11px] leading-[1.9] text-muted-foreground">
              RERA Number: PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12039/280623
            </p>
            <p className="mt-1 break-all text-[11px] leading-[1.9] text-muted-foreground">
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
            <a
              href="https://wa.me/919909923456?text=Hi%2C%20please%20share%20the%20Maruti%20360%20brochure%2C%20floor%20plans%20and%20price%20list."
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-6 gap-2"
            >
              <Download size={13} />
              Download Brochure on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
