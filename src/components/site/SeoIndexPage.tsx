import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Faqs, type Faq } from "@/components/site/ResidencePage";

export function SeoIndexPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="bg-surface-2 px-5 pt-32 pb-14 md:px-10 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-display text-[32px] leading-tight text-foreground md:text-[56px]">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-[13px] leading-[2] text-muted-foreground">
              {intro}
            </p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

export function IndexSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-surface px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-display text-[26px] text-foreground md:text-[38px]">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function IndexLinks() {
  return (
    <div className="flex flex-wrap gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.16em]">
      <Link to="/floor-plan" className="text-gold hover:underline">View Floor Plans</Link>
      <Link to="/amenities" className="text-gold hover:underline">Explore Amenities</Link>
      <Link to="/contact-us" className="text-gold hover:underline">Book a Site Visit</Link>
    </div>
  );
}

export function FaqSection({ items }: { items: Faq[] }) {
  return (
    <section className="bg-surface-2 px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <p className="eyebrow text-center">Questions</p>
        <Faqs items={items} />
      </div>
    </section>
  );
}
