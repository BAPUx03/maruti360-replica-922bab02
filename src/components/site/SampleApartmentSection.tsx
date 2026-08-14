import { CheckCircle2 } from "lucide-react";
import { EnquiryButton } from "@/components/site/EnquiryCta";

const POINTS = [
  "Fully furnished show residence ready to view",
  "Walk through the actual 4 & 5 BHK layouts",
  "Private, by-appointment viewing slots",
];

export function SampleApartmentSection() {
  return (
    <section className="border-t border-border bg-surface px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">Now Ready</p>
          <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[38px]">
            Sample Apartment Ready
          </h2>
          <p className="mt-5 max-w-[52ch] text-[13px] leading-[2] text-muted-foreground">
            Experience the scale, finish and light of a Maruti 360 residence in person. Our sample
            apartment is complete and open for private viewings — see the material palette,
            proportions and views exactly as they will be delivered.
          </p>
          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[13px] leading-[1.9] text-foreground/85">
                <CheckCircle2 size={15} className="mt-1 shrink-0 text-gold" />
                {p}
              </li>
            ))}
          </ul>
          <EnquiryButton className="mt-8">Book a Sample Apartment Visit</EnquiryButton>
        </div>
        <div className="border border-border bg-surface-2 p-8 text-center md:p-12">
          <p className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
            Viewing Status
          </p>
          <p className="mt-4 font-display text-[34px] leading-none text-gold md:text-[48px]">Ready</p>
          <p className="mt-4 text-[12px] leading-[1.9] text-muted-foreground">
            Sample apartment viewings are strictly by prior appointment. Share your details and our
            residence advisor will confirm a slot.
          </p>
        </div>
      </div>
    </section>
  );
}
