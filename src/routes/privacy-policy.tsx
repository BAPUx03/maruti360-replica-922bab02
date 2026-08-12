import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Privacy Policy | Sky Residences Off SG Highway, Ahmedabad";
const DESCRIPTION =
  "How we collect, use, store and protect the personal information you share through enquiry forms, WhatsApp and site-visit bookings on this website.";
const URL = "https://www.maruti-360.com/privacy-policy";

const SECTIONS = [
  {
    h: "Information We Collect",
    p: "We collect the details you voluntarily submit through our enquiry forms, callback requests and WhatsApp conversations — typically your name, mobile number, email address, budget range and configuration preference. We also collect basic, non-identifying analytics such as pages visited and device type.",
  },
  {
    h: "How We Use Your Information",
    p: "Your details are used to respond to your enquiry, share brochures, pricing and floor plans, schedule site visits, and keep you informed about this project. We do not sell your personal data to third parties.",
  },
  {
    h: "Mobile Verification",
    p: "When you submit an enquiry, we may send a one-time password (OTP) to your mobile number through an SMS service provider purely to verify that the number belongs to you. The OTP is short-lived and is not used for marketing.",
  },
  {
    h: "Sharing With Partners",
    p: "Limited details may be shared with our channel partners, banking partners or authorised sales advisors strictly to service your enquiry — for example, a home-loan eligibility check you have asked for.",
  },
  {
    h: "Data Retention & Security",
    p: "Enquiry data is retained only as long as needed to service your interest and to meet legal or accounting requirements. We apply reasonable technical and organisational safeguards against unauthorised access, loss or misuse.",
  },
  {
    h: "Cookies",
    p: "This website may use cookies and similar technologies to remember your theme preference and to understand aggregate usage. You can disable cookies in your browser; core pages will continue to work.",
  },
  {
    h: "Your Choices",
    p: "You may ask us to correct or delete your details, or to stop contacting you, at any time by writing to sales@maruti360.com or messaging +91 99049 69298. We action such requests promptly.",
  },
  {
    h: "Disclaimer",
    p: "Renders, dimensions, amenity lists and specifications on this website are indicative and subject to approvals and design refinement. They do not constitute a legal offer or contract. Please refer to the RERA-registered documents and the agreement for sale for binding details.",
  },
  {
    h: "Updates To This Policy",
    p: "We may update this policy from time to time. The revised version takes effect as soon as it is published on this page.",
  },
];

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  loader: () => getSeo({ data: { path: "/privacy-policy" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/privacy-policy", loaderData),
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <section className="bg-surface-2 px-5 pt-32 pb-14 text-center md:px-10 md:pt-40 md:pb-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mx-auto mt-4 max-w-[820px] font-display text-[30px] leading-tight text-foreground md:text-[46px]">
            Privacy Policy
          </h1>
        </section>

        <section className="bg-surface px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[860px] space-y-10">
            {SECTIONS.map((s) => (
              <article key={s.h}>
                <h2 className="font-display text-[21px] text-foreground md:text-[25px]">
                  {s.h}
                </h2>
                <p className="mt-3 text-[13px] leading-[2] text-muted-foreground">
                  {s.p}
                </p>
              </article>
            ))}
            <p className="border-t border-border pt-8 text-[12px] leading-[2] text-muted-foreground">
              Questions about this policy? Write to{" "}
              <a href="mailto:sales@maruti360.com" className="text-gold">
                sales@maruti360.com
              </a>{" "}
              or call{" "}
              <a href="tel:+919904969298" className="text-gold">
                +91 99049 69298
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
