import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { MapPin, Clock, FileText, CalendarCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactSection } from "@/components/site/ContactSection";
import { EnquiryCta, openEnquiry } from "@/components/site/EnquiryCta";
import { Faqs } from "@/components/site/ResidencePage";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Contact Us — Book A Site Visit Off SG Highway, Ahmedabad";
const DESCRIPTION =
  "Enquire about 4 & 5 BHK sky residences off SG Highway, Ahmedabad. Submit the enquiry form to request floor plans, availability and a private site-visit slot.";
const URL = "https://www.maruti-360.com/contact-us";

const FAQS = [
  {
    q: "How soon will someone get back to me?",
    a: "An advisor calls back within the same working day, and within a couple of hours for enquiries placed between 10 AM and 7 PM.",
  },
  {
    q: "How do I get the brochure and floor plans?",
    a: "Submit the enquiry form on this page and the brochure, floor plates and availability details are shared with you directly.",
  },
  {
    q: "Do I need an appointment to visit?",
    a: "Walk-ins are welcome, but a scheduled slot means a dedicated advisor, a sample-layout walkthrough and no waiting.",
  },
  {
    q: "Do you assist with home loans?",
    a: "Yes. The team coordinates with leading banks and NBFCs for sanction, documentation and disbursement support.",
  },
];

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  loader: () => getSeo({ data: { path: "/contact-us" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/contact-us", loaderData),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          url: URL,
          description: DESCRIPTION,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const CARDS = [
  {
    icon: CalendarCheck,
    label: "Site Visit",
    value: "Request a private appointment",
  },
  {
    icon: FileText,
    label: "Brochure & Floor Plans",
    value: "Shared after you submit the form",
  },
  {
    icon: MapPin,
    label: "Experience Centre",
    value: "S.G. Highway, Ahmedabad, Gujarat",
  },
  {
    icon: Clock,
    label: "Visiting Hours",
    value: "All days, 10:00 AM – 7:00 PM",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="bg-surface-2 px-5 pt-32 pb-14 text-center md:px-10 md:pt-40 md:pb-20">
          <p className="eyebrow">Contact Us</p>
          <h1 className="mx-auto mt-4 max-w-[820px] font-display text-[30px] leading-tight text-foreground md:text-[48px]">
            Book a Private Visit to Maruti 360
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[2] text-muted-foreground">
            Floor plans, availability and a private walkthrough of the sample residence — arranged
            around your calendar.
          </p>
        </section>

        <section className="bg-surface px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto grid max-w-[1150px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map(({ icon: Icon, label, value }) => (
              <button
                key={label}
                type="button"
                onClick={openEnquiry}
                className="group border border-border p-6 text-left transition-colors hover:border-gold/60"
              >
                <Icon size={22} strokeWidth={1.2} className="text-gold" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-foreground/55">
                  {label}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground transition-colors group-hover:text-gold">
                  {value}
                </p>
              </button>
            ))}
          </div>
          <p className="mx-auto mt-8 flex max-w-[1150px] items-center gap-2 text-[12px] text-muted-foreground">
            <Clock size={14} className="text-gold" /> Experience centre open all days, 10:00 AM –
            7:00 PM
          </p>
        </section>

        <ContactSection />

        <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[900px]">
            <p className="eyebrow text-center">Questions</p>
            <h2 className="mt-3 text-center font-display text-[26px] text-foreground md:text-[36px]">
              Before You Call
            </h2>
            <Faqs items={FAQS} />
          </div>
        </section>

        <section className="bg-surface">
          <iframe
            title="Experience centre location on SG Highway, Ahmedabad"
            src="https://www.google.com/maps?q=SG%20Highway%20Ahmedabad&output=embed"
            loading="lazy"
            className="h-[360px] w-full border-0 md:h-[440px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <EnquiryCta />
      </main>
      <SiteFooter />
      <Toaster position="top-center" richColors />
    </div>
  );
}
