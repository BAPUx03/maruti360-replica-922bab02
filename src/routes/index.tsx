import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";

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
import { SeoSection } from "@/components/site/SeoSection";
import { EnquiryCta } from "@/components/site/EnquiryCta";
import { SampleApartmentSection } from "@/components/site/SampleApartmentSection";

const SITE = "https://www.maruti-360.com";
const TITLE = "4 & 5 BHK Luxury Apartments on S.G. Highway, Ahmedabad | MARUTI 360";
const DESCRIPTION =
  "Maruti 360 offers 4 & 5 BHK luxury sky residences in twin 41-storey towers on S.G. Highway, Ahmedabad — 501 ft tall, resort amenities, 360° city views. Book a site visit.";

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => getSeo({ data: { path: "/" } }),
  head: ({ loaderData }) => ({
    ...seoHead("/", loaderData),
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
                text: "Submit the enquiry form on this page and our advisor will share the brochure and floor plans the same working day.",
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
        <SampleApartmentSection />
        <LocationSection />
        <FloorPlanSection />
        <AmenitiesSection />
        <PartnersSection />
        <AboutGroupSection />
        <ContactSection />
        <BrochureSection />
        <InstagramSection />
        <SeoSection />
        <EnquiryCta />
      </main>
      <SiteFooter />
    </div>
  );
}
