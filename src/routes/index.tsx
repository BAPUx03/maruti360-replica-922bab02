import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/site/Hero";
import { IntroSection } from "@/components/site/IntroSection";
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

const TITLE = "Home - MARUTI360";
const DESCRIPTION =
  "Maruti 360 — twin towers of 4 & 5 BHK uber luxe suites rising 41 storeys above S.G. Highway, Ahmedabad. Above It All.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main>
        <Hero />
        <IntroSection />
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
      </main>
      <SiteFooter />
      <EnquiryPopup />
    </div>
  );
}
