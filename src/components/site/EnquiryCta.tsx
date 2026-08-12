import type { ReactNode } from "react";

export const ENQUIRY_EVENT = "open-enquiry";

export function openEnquiry() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(ENQUIRY_EVENT));
}

export function EnquiryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openEnquiry} className={`btn-gold ${className}`}>
      {children}
    </button>
  );
}

export function EnquiryCta({
  eyebrow = "Continue",
  title = "Continue Your Enquiry",
  text = "Share your requirement and our residence advisor will get back to you with floor plans, availability and a private site-visit slot.",
  label = "Continue",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  label?: string;
}) {
  return (
    <section className="border-t border-border bg-surface-2 px-5 py-16 text-center md:px-10 md:py-24">
      <div className="mx-auto max-w-[640px]">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-[26px] leading-snug text-foreground md:text-[38px]">
          {title}
        </h2>
        <p className="mx-auto mt-5 text-[13px] leading-[2] text-muted-foreground">{text}</p>
        <EnquiryButton className="mt-8">{label}</EnquiryButton>
      </div>
    </section>
  );
}
