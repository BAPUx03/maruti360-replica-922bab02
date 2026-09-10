import { PROJECT_FACTS, PUBLIC_ROUTES } from "@/lib/project-facts";

export const SITE = PROJECT_FACTS.canonicalBase;
export const SITE_NAME = PROJECT_FACTS.brand;
// Dedicated social-preview images from the approved project photography —
// never the favicon. Every listed route below gets one; unlisted routes
// fall back to the home banner via getDefaultSeo().
export const DEFAULT_OG_IMAGE = `${SITE}/og/maruti-360-home.jpg`;

// NOTE: meta keywords are intentionally not supported anywhere in this file.
// Google ignores the tag, so nothing reads or emits it.

export type SeoMeta = {
  path: string;
  title: string;
  description: string;
  og_image?: string | null;
  noindex?: boolean;
};

export const SEO_DEFAULTS: Record<string, SeoMeta> = {
  "/": {
    path: "/",
    title: "Maruti 360 Bodakdev | Luxury 4 & 5 BHK Flats Ahmedabad",
    description:
      "Explore Maruti 360 in Bodakdev, Ahmedabad: luxury 4 & 5 BHK residences near Karnavati Club. View plans, amenities, RERA details and request pricing.",
    og_image: `${SITE}/og/maruti-360-home.jpg`,
  },
  "/about": {
    path: "/about",
    title: "Maruti 360 About | Maruti Buildcon, Ahmedabad",
    description:
      "Learn about Maruti Buildcon and the vision, design approach and project standards behind Maruti 360 on SG Highway, Ahmedabad.",
  },
  "/amenities": {
    path: "/amenities",
    title: "Maruti 360 Amenities | Luxury Lifestyle, Ahmedabad",
    description:
      "Explore Maruti 360 amenities near SG Highway, Ahmedabad, including recreation, fitness, wellness and shared social spaces.",
    og_image: `${SITE}/og/maruti-360-amenities.jpg`,
  },
  "/floor-plan": {
    path: "/floor-plan",
    title: "Maruti 360 Floor Plan | 4 & 5 BHK Bodakdev, Ahmedabad",
    description:
      "Explore Maruti 360 4 BHK and 5 BHK floor plans in Bodakdev, Ahmedabad. Request approved layouts, specifications and a private walkthrough.",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/floor-plan/4-bhk": {
    path: "/floor-plan/4-bhk",
    title: "Maruti 360 4 BHK Floor Plan | Bodakdev, Ahmedabad",
    description:
      "Explore the Maruti 360 4 BHK residence layout in Bodakdev, Ahmedabad. Request the approved plan, specifications and current availability.",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/floor-plan/5-bhk": {
    path: "/floor-plan/5-bhk",
    title: "Maruti 360 5 BHK Floor Plan | Bodakdev, Ahmedabad",
    description:
      "Explore the Maruti 360 5 BHK residence layout in Bodakdev, Ahmedabad. Request the approved plan, specifications and current availability.",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/specifications": {
    path: "/specifications",
    title: "Maruti 360 Specifications | Towers, Floors, Details",
    description:
      "Maruti 360 specifications in Ahmedabad: twin 41-storey towers, 501 ft height, 124 residences, 4 & 5 BHK configurations and project partners.",
  },
  "/brochure": {
    path: "/brochure",
    title: "Maruti 360 Brochure | Download Request, Ahmedabad",
    description:
      "Request the latest approved Maruti 360 brochure with 4 & 5 BHK layouts, amenities, location and project registration details in Ahmedabad.",
  },
  "/site-visit": {
    path: "/site-visit",
    title: "Maruti 360 Site Visit | Book a Private Visit",
    description:
      "Book a guided Maruti 360 site visit in Ahmedabad. See the sample apartment, the location and the approved documents in one appointment.",
  },
  "/construction-update": {
    path: "/construction-update",
    title: "Maruti 360 Construction Update | Ahmedabad",
    description:
      "Request the latest verified Maruti 360 construction progress in Ahmedabad, plus the completion timeline declared in the official RERA record.",
  },
  "/developer": {
    path: "/developer",
    title: "Maruti 360 Developer | Maruti Buildcon, Ahmedabad",
    description:
      "Maruti 360 is developed by Maruti Buildcon in Ahmedabad. See the project partners and how to verify the registered promoter on GujRERA.",
  },
  "/reviews": {
    path: "/reviews",
    title: "Maruti 360 Reviews | How To Verify Before Buying",
    description:
      "No unverified ratings. A practical guide to checking Maruti 360 in Ahmedabad using GujRERA records, sanctioned documents and a site visit.",
  },
  "/contact-us": {
    path: "/contact-us",
    title: "Maruti 360 Contact | Book a Private Site Visit",
    description:
      "Contact Maruti 360 to request the brochure, current price list, approved floor plans or a private site visit in Bodakdev, Ahmedabad.",
  },
  "/price": {
    path: "/price",
    title: "Maruti 360 Price | 4 & 5 BHK in Bodakdev, Ahmedabad",
    description:
      "Request the current Maruti 360 price list, payment plan and availability for 4 and 5 BHK residences in Bodakdev, Ahmedabad.",
  },
  "/location": {
    path: "/location",
    title: "Maruti 360 Location | Bodakdev, Near Karnavati Club",
    description:
      "Explore the Maruti 360 location in Bodakdev, Ahmedabad, near Karnavati Club, with map directions and a practical connectivity overview.",
    og_image: `${SITE}/og/maruti-360-location.jpg`,
  },
  "/rera-legal": {
    path: "/rera-legal",
    title: "Maruti 360 RERA Number & Legal Details | Ahmedabad",
    description:
      "Review the Maruti 360 RERA registration number and request the current approved project documents before booking.",
  },
  "/faq": {
    path: "/faq",
    title: "Maruti 360 FAQ | Price, Plans, Location and RERA",
    description:
      "Find answers about Maruti 360 floor plans, price requests, location, amenities, RERA documents and private site visits.",
  },
  "/gallery": {
    path: "/gallery",
    title: "Maruti 360 Gallery | Residences, Amenities, Views",
    description:
      "Explore approved Maruti 360 visuals of residences, amenities and views. Request the latest brochure, walkthrough and project update.",
    og_image: `${SITE}/og/maruti-360-gallery.jpg`,
  },
  "/blog": {
    path: "/blog",
    title: "Maruti 360 Blog | Luxury Home Buying Guides",
    description:
      "Read practical, fact-checked guides on luxury homes, project documents, layouts and location research in Ahmedabad.",
    og_image: `${SITE}/og/maruti-360-blog.jpg`,
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Maruti 360 Privacy Policy | Ahmedabad",
    description:
      "Read how Maruti 360 collects, uses, stores and protects information submitted through enquiry forms, WhatsApp and site-visit bookings.",
  },
};

export const SEO_PATHS: readonly string[] = PUBLIC_ROUTES;

export function getDefaultSeo(path: string): SeoMeta {
  return (
    SEO_DEFAULTS[path] ?? {
      path,
      title: "Maruti 360 | Luxury Apartments in Ahmedabad",
      description: "Luxury 4 and 5 BHK residences off SG Highway, Ahmedabad.",
    }
  );
}

export function resolveSeo(path: string, override?: Partial<SeoMeta> | null): SeoMeta {
  const base = getDefaultSeo(path);
  if (!override) return base;
  return {
    path,
    title: override.title?.trim() || base.title,
    description: override.description?.trim() || base.description,
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
    {
      name: "robots",
      content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    },
  ];
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export function pageSchema(path: string, type: "WebPage" | "CollectionPage" | "Blog" = "WebPage") {
  const seo = getDefaultSeo(path);
  const url = `${SITE}${path}`;
  const crumbs = path.split("/").filter(Boolean);
  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": type,
        name: seo.title,
        description: seo.description,
        url,
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          ...crumbs.map((part, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: index === crumbs.length - 1 ? seo.title : part.replaceAll("-", " "),
            item: `${SITE}/${crumbs.slice(0, index + 1).join("/")}`,
          })),
        ],
      }),
    },
  ];
}
