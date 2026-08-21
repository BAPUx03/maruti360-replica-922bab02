import { createFileRoute } from "@tanstack/react-router";
import { getSeo } from "@/lib/seo.functions";
import { seoHead } from "@/lib/seo-defaults";
import { PROJECT_FACTS } from "@/lib/project-facts";

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
          name: PROJECT_FACTS.brand,
          description: DESCRIPTION,
          url: `${PROJECT_FACTS.canonicalBase}/`,
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
          "@type": "RealEstateAgent",
          name: `${PROJECT_FACTS.brand} — ${PROJECT_FACTS.developer}`,
          url: `${PROJECT_FACTS.canonicalBase}/`,
          image: `${PROJECT_FACTS.canonicalBase}${PROJECT_FACTS.ogImage}`,
          telephone: "+91-99049-69298",
          areaServed: "Ahmedabad, Gujarat, India",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Off S.G. Highway, Near Karnavati Club",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380058",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "19:00",
            },
          ],
        }),
      },
      // No FAQPage script here: the FAQs this page used to mark up were never
      // visibly rendered on the homepage. /faq owns visible FAQ content and
      // schema — see the "keep FAQ schema only where matching content is
      // visibly rendered" rule.
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
