import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/site/IntroSection";
import { VideoSection } from "@/components/site/VideoSection";
import { StatsSection } from "@/components/site/StatsSection";
import { ViewSection } from "@/components/site/ViewSection";
import { LocationSection } from "@/components/site/LocationSection";
import { FloorPlanSection } from "@/components/site/FloorPlanSection";
import { AmenitiesSection } from "@/components/site/AmenitiesSection";
import { PartnersSection } from "@/components/site/PartnersSection";
import { AboutGroupSection } from "@/components/site/AboutGroupSection";
import { ContactSection } from "@/components/site/ContactSection";
import { BrochureSection } from "@/components/site/BrochureSection";
import { InstagramSection } from "@/components/site/InstagramSection";
import { EnquiryPopup } from "@/components/site/EnquiryPopup";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SeoSection } from "@/components/site/SeoSection";
import { Toaster } from "@/components/ui/sonner";

const SITE = "https://www.maruti-360.com";
const TITLE = "4 & 5 BHK Luxury Apartments on S.G. Highway, Ahmedabad | MARUTI 360";
const DESCRIPTION =
  "Maruti 360 offers 4 & 5 BHK luxury sky residences in twin 41-storey towers on S.G. Highway, Ahmedabad — 501 ft tall, resort amenities, 360° city views. Book a site visit.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      {
        name: "keywords",
        content:
          "4 BHK apartments Ahmedabad, 5 BHK luxury flats SG Highway, Maruti 360, luxury apartments Ahmedabad, sky residences Ahmedabad, penthouse Ahmedabad",
      },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Residence",
          name: "Maruti 360",
          description: DESCRIPTION,
          url: `${SITE}/`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "S.G. Highway",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          telephone: "+91-99099-23456",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Where is Maruti 360 located?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Maruti 360 is located on S.G. Highway, Ahmedabad, with quick access to business districts, schools, hospitals and retail.",
              },
            },
            {
              "@type": "Question",
              name: "What configurations are available at Maruti 360?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Spacious 4 BHK and 5 BHK sky residences, with jodi, duplex and penthouse formats on select floors.",
              },
            },
            {
              "@type": "Question",
              name: "How tall are the towers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Two towers of 41 storeys each, rising approximately 501 feet above S.G. Highway.",
              },
            },
            {
              "@type": "Question",
              name: "How can I get the brochure and price list?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Request it on WhatsApp at +91 99099 23456 or submit the enquiry form on this page and our advisor will share it the same working day.",
              },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <Hero />
        <IntroSection />
        <VideoSection />
        <StatsSection />
        <ViewSection />
        <LocationSection />
        <FloorPlanSection />
        <AmenitiesSection />
        <PartnersSection />
        <AboutGroupSection />
        <ContactSection />
        <BrochureSection />
        <InstagramSection />
        <SeoSection />
      </main>
      <SiteFooter />
      <EnquiryPopup />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </div>
  );
}
