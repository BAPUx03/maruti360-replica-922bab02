export const PROJECT_FACTS = {
  brand: "Maruti 360",
  developer: "Maruti Buildcon",
  canonicalBase: "https://www.maruti-360.com",
  projectType: "Luxury residential sky residences",
  location: "Off S.G. Highway, Ahmedabad, Gujarat",
  locationQualifier: "Near Karnavati Club",
  reraNumber: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12039/280623",
  reraPortalUrl: "https://gujrera.gujarat.gov.in/",
  configurations: ["4 BHK", "5 BHK"],
  priceDisplay: "Request current price list",
  possessionDisplay: "Confirm the current official RERA timeline",
  ogImage: "/og/maruti-360-home.jpg",
  factualDisclaimer:
    "Information and availability are subject to the latest approved project documents and change without notice. Please request the current brochure and verify applicable details before making a decision.",
} as const;

export const FACTUAL_DISCLAIMER = PROJECT_FACTS.factualDisclaimer;

export const BLOG_ARTICLE_SLUGS = [
  "rera-checklist-buying-flat-gujarat",
  "4-bhk-vs-5-bhk-luxury-apartment-ahmedabad",
  "how-to-evaluate-luxury-apartment-floor-plan",
  "questions-before-buying-under-construction-luxury-flat-ahmedabad",
  "carpet-area-vs-built-up-area-luxury-apartment",
  "sg-highway-luxury-home-location-checklist",
  "home-buying-payment-plan-questions-india",
  "how-to-evaluate-location-near-karnavati-club",
  "luxury-apartments-sg-highway-ahmedabad-buyer-guide",
  "what-to-check-during-luxury-apartment-site-visit",
  "high-floor-apartment-living-what-to-know",
  "nri-buying-property-in-ahmedabad-guide",
] as const;

export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/amenities",
  "/floor-plan",
  "/floor-plan/4-bhk",
  "/floor-plan/5-bhk",
  "/contact-us",
  "/price",
  "/location",
  "/rera-legal",
  "/faq",
  "/gallery",
  "/blog",
  "/privacy-policy",
] as const;
