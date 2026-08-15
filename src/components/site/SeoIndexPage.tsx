import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Faqs, type Faq } from "@/components/site/ResidencePage";
import { EnquiryCta } from "@/components/site/EnquiryCta";

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
        <EnquiryCta />
      </main>
      <SiteFooter />
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

export type ContextualLink = { label: string; to: string };

const DEFAULT_LINKS: ContextualLink[] = [
  { label: "View Floor Plans", to: "/floor-plan" },
  { label: "Explore Amenities", to: "/amenities" },
  { label: "Book a Site Visit", to: "/contact-us" },
];

/** Visible, crawlable "Explore Maruti 360" module — real <a href> links via
 *  router Link, not button-only JS actions. Each page passes the specific
 *  set called for by its row in the internal-linking plan. */
export function IndexLinks({ links = DEFAULT_LINKS }: { links?: ContextualLink[] }) {
  return (
    <div className="flex flex-wrap gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.16em]">
      {links.map((link) => (
        <Link key={link.to} to={link.to} className="text-gold hover:underline">
          {link.label}
        </Link>
      ))}
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
