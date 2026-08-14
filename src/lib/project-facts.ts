// Single source of truth for verified Maruti 360 project facts and the public
// route registry. Components, page copy, structured data and the sitemap all
// read from here instead of repeating hard-coded facts, so a correction only
// has to be made once. Do not add a fact here (price, possession date,
// distance, "available" status, award, review) unless it is already
// supported elsewhere in the project or has been explicitly supplied and
// approved — see the disclaimers below for how unverified figures are framed
// instead of invented.

export const PROJECT_FACTS = {
  brand: "Maruti 360",
  developer: "Maruti Buildcon",
  projectType: "Luxury residential sky residences",
  canonicalBase: "https://www.maruti-360.com",
  location: "Off S.G. Highway, Ahmedabad, Gujarat",
  locationQualifier: "Near Karnavati Club",
  reraNumber: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12039/280623",
  reraPortalUrl: "https://gujrera.gujarat.gov.in/",
  phoneDisplay: "+91 99049 69298",
  phoneHref: "tel:+919904969298",
  whatsappNumber: "919904969298",
  email: "sales@maruti360.com",
  address: "S.G. Highway, Ahmedabad, Gujarat, India",
  /** No confirmed live price list is on file — every price surface must say this, not a figure. */
  priceDisplay: "Request current price list",
  /** No RERA-confirmed possession date is on file — every possession surface must say this, not a date. */
  possessionDisplay: "Confirmed on request via the current RERA record",
} as const;

/** Configuration names used consistently across nav, cards and copy — no unit areas or prices attached. */
export const CONFIGURATIONS = [
  { name: "4 BHK", path: "/floor-plan/4-bhk", label: "4 BHK Sky Residence" },
  { name: "5 BHK", path: "/floor-plan/5-bhk", label: "5 BHK Signature Residence" },
] as const;

/** Shared factual disclaimer for Floor Plan, Price and RERA pages. */
export const FACTUAL_DISCLAIMER =
  "Information and availability are subject to the latest approved project documents and change without notice. Please request the current brochure and verify applicable details before making a decision.";

/** Canonical public-route registry. Drives SEO_PATHS defaults and the sitemap — add a route here once. */
export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/amenities",
  "/floor-plan",
  "/floor-plan/4-bhk",
  "/floor-plan/5-bhk",
  "/price",
  "/location",
  "/rera-legal",
  "/faq",
  "/gallery",
  "/blog",
  "/contact-us",
  "/privacy-policy",
] as const;

/** Blog article slugs, included in the sitemap/blog registry only once each article is published. */
export const BLOG_ARTICLE_SLUGS = [
  "rera-checklist-buying-flat-gujarat",
  "4-bhk-vs-5-bhk-luxury-apartment-ahmedabad",
  "how-to-evaluate-luxury-apartment-floor-plan",
  "questions-before-buying-under-construction-luxury-flat-ahmedabad",
  "carpet-area-vs-built-up-area-luxury-apartment",
  "sg-highway-luxury-home-location-checklist",
  "home-buying-payment-plan-questions-india",
  "how-to-evaluate-location-near-karnavati-club",
] as const;
