import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reveal } from "@/components/site/Reveal";

export type Faq = { q: string; a: string };

export function Faqs({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-[860px] divide-y divide-border border-y border-border">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-[13px] leading-relaxed text-foreground md:text-[15px]">{f.q}</span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="pb-6 pr-8 text-[13px] leading-[2] text-muted-foreground">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function ResidenceLayout({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="over-media relative flex min-h-[62vh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center md:px-10">
          <img
            src={image}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
          <div className="relative mx-auto max-w-[900px]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[32px] leading-[1.15] text-foreground sm:text-[46px] md:text-[62px]">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-[13px] leading-[2] text-foreground/75">
              {intro}
            </p>
            <a href="/#contact" className="btn-gold mt-9 inline-block">
              Request Priority Access
            </a>
          </div>
        </section>
        <Reveal>{children}</Reveal>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
