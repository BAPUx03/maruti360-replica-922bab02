export const SITE = "https://www.maruti-360.com";
export const SITE_NAME = "Maruti 360";
export const DEFAULT_OG_IMAGE = `${SITE}/favicon.png`;

export type SeoMeta = {
  path: string;
  title: string;
  description: string;
  keywords?: string | null;
  og_image?: string | null;
  noindex?: boolean;
};

export const SEO_DEFAULTS: Record<string, SeoMeta> = {
  "/": {
    path: "/",
    title: "Maruti 360 | Luxury 4 & 5 BHK Apartments in Ahmedabad",
    description:
      "Maruti 360 offers 4 and 5 BHK luxury sky residences on S.G. Highway, Ahmedabad. Explore amenities, floor plans and book a private site visit.",
    keywords: "Maruti 360, 4 BHK apartments Ahmedabad, 5 BHK apartments SG Highway, luxury apartments Ahmedabad",
  },
  "/about": {
    path: "/about",
    title: "About Maruti 360 | Maruti Buildcon Real Estate, Ahmedabad",
    description:
      "Learn about Maruti Buildcon, the vision behind Maruti 360, and the design and construction standards of these luxury residences off SG Highway, Ahmedabad.",
    keywords: "Maruti Buildcon, real estate developer Ahmedabad, Maruti 360 developer",
  },
  "/amenities": {
    path: "/amenities",
    title: "Maruti 360 Amenities | Pool, Clubhouse, Gym & Wellness Ahmedabad",
    description:
      "Explore Maruti 360 amenities off SG Highway, Ahmedabad: viewing gallery, pool, clubhouse, theatre, gym, yoga deck, indoor games and landscaped gardens.",
    keywords: "Maruti 360 amenities, luxury apartment amenities Ahmedabad, clubhouse SG Highway",
  },
  "/floor-plan": {
    path: "/floor-plan",
    title: "Maruti 360 Floor Plans | 4 & 5 BHK Apartments Ahmedabad",
    description:
      "View Maruti 360 4 BHK and 5 BHK floor plans off SG Highway, Ahmedabad, including layouts, sky decks and configuration details.",
    keywords: "Maruti 360 floor plan, 4 BHK floor plan Ahmedabad, 5 BHK floor plan SG Highway",
  },
  "/floor-plan/4-bhk": {
    path: "/floor-plan/4-bhk",
    title: "Maruti 360 4 BHK Floor Plan | SG Highway Ahmedabad",
    description:
      "Explore the Maruti 360 4 BHK floor plan off SG Highway, Ahmedabad, with wide-frontage living spaces, a deep sky deck and premium specifications.",
    keywords: "Maruti 360 4 BHK, 4 BHK floor plan SG Highway, luxury 4 BHK Ahmedabad",
  },
  "/floor-plan/5-bhk": {
    path: "/floor-plan/5-bhk",
    title: "Maruti 360 5 BHK Floor Plan | SG Highway Ahmedabad",
    description:
      "Explore the Maruti 360 5 BHK floor plan off SG Highway, Ahmedabad, with a private lounge, family deck, staff quarters and premium specifications.",
    keywords: "Maruti 360 5 BHK, 5 BHK floor plan SG Highway, luxury 5 BHK Ahmedabad",
  },
  "/contact-us": {
    path: "/contact-us",
    title: "Contact Maruti 360 | Book a Site Visit in Ahmedabad",
    description:
      "Contact Maruti 360 for 4 and 5 BHK residences off SG Highway, Ahmedabad. Request pricing, floor plans, the brochure or a private site visit.",
    keywords: "contact Maruti 360, book site visit Ahmedabad, luxury apartment enquiry SG Highway",
  },
  "/price": {
    path: "/price",
    title: "Maruti 360 Price | 4 & 5 BHK Apartments Ahmedabad",
    description: "Request the latest Maruti 360 price list, payment schedule and availability for 4 BHK and 5 BHK residences on SG Highway, Ahmedabad.",
    keywords: "Maruti 360 price, 4 BHK price Ahmedabad, 5 BHK price SG Highway",
  },
  "/location": {
    path: "/location",
    title: "Maruti 360 Location | SG Highway, Bodakdev Ahmedabad",
    description: "Explore the Maruti 360 location near Karnavati Club on SG Highway, Ahmedabad, and request the current route and visit details.",
    keywords: "Maruti 360 location, flats near Karnavati Club, SG Highway apartments Ahmedabad",
  },
  "/rera-legal": {
    path: "/rera-legal",
    title: "Maruti 360 RERA Details | Registration & Legal Information",
    description: "Review the Maruti 360 RERA registration reference and request current approved project documents before booking.",
    keywords: "Maruti 360 RERA, RERA project Ahmedabad, Maruti 360 legal details",
  },
  "/faq": {
    path: "/faq",
    title: "Maruti 360 FAQ | Price, Floor Plans, Location & RERA",
    description: "Find answers about Maruti 360 price, floor plans, location, amenities, possession timeline, visits and RERA documents.",
    keywords: "Maruti 360 FAQ, Maruti 360 possession, Maruti 360 floor plan questions",
  },
  "/gallery": {
    path: "/gallery",
    title: "Maruti 360 Gallery | Amenities, Interiors & Skyline Views",
    description: "Explore selected Maruti 360 visuals of residences, amenities and views, and request the latest brochure and walkthrough.",
    keywords: "Maruti 360 gallery, Maruti 360 photos, luxury apartments Ahmedabad images",
  },
  "/blog": {
    path: "/blog",
    title: "Maruti 360 Blog | Ahmedabad Real Estate & Project Updates",
    description: "Read practical guides about luxury homes, layouts, locations and the purchase process in Ahmedabad.",
    keywords: "Ahmedabad real estate blog, luxury apartments Ahmedabad guide, Maruti 360 updates",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Maruti 360 Ahmedabad",
    description:
      "Read how Maruti 360 collects, uses, stores and protects information submitted through enquiry forms, WhatsApp and site-visit bookings.",
    keywords: null,
  },
};

export const SEO_PATHS = Object.keys(SEO_DEFAULTS);

export function getDefaultSeo(path: string): SeoMeta {
  return SEO_DEFAULTS[path] ?? {
    path,
    title: "Maruti 360 | Luxury Apartments in Ahmedabad",
    description: "Luxury 4 and 5 BHK residences off SG Highway, Ahmedabad.",
  };
}

export function resolveSeo(path: string, override?: Partial<SeoMeta> | null): SeoMeta {
  const base = getDefaultSeo(path);
  if (!override) return base;
  return {
    path,
    title: override.title?.trim() || base.title,
    description: override.description?.trim() || base.description,
    keywords: override.keywords?.trim() || base.keywords || null,
    og_image: override.og_image?.trim() || base.og_image || null,
    noindex: override.noindex ?? false,
  };
}

export function seoHead(path: string, override?: Partial<SeoMeta> | null) {
  const seo = resolveSeo(path, override);
  const url = `${SITE}${path === "/" ? "/" : path}`;
  const ogImage = seo.og_image || DEFAULT_OG_IMAGE;
  const meta: Array<Record<string, string>> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: ogImage },
    { name: "robots", content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large" },
  ];
  if (seo.keywords) meta.push({ name: "keywords", content: seo.keywords });
  return { meta, links: [{ rel: "canonical", href: url }] };
}
