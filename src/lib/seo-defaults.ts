import { PROJECT_FACTS, PUBLIC_ROUTES } from "@/lib/project-facts";

export const SITE = PROJECT_FACTS.canonicalBase;
export const SITE_NAME = PROJECT_FACTS.brand;
// Dedicated social-preview images from the approved project photography —
// never the favicon. Every listed route below gets one; unlisted routes
// fall back to the home banner via getDefaultSeo().
export const DEFAULT_OG_IMAGE = `${SITE}/og/maruti-360-home.jpg`;

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
    title: "Maruti 360 | Luxury 4 & 5 BHK Flats on SG Highway, Ahmedabad",
    description:
      "Discover Maruti 360, luxury 4 and 5 BHK sky residences near Karnavati Club on SG Highway, Ahmedabad. Explore plans, amenities and private visits.",
    keywords:
      "Maruti 360, 4 BHK apartments Ahmedabad, 5 BHK apartments SG Highway, luxury apartments Ahmedabad",
    og_image: `${SITE}/og/maruti-360-home.jpg`,
  },
  "/about": {
    path: "/about",
    title: "About Maruti 360 | Maruti Buildcon Luxury Residences, Ahmedabad",
    description:
      "Learn about Maruti Buildcon and the vision, design approach and project standards behind Maruti 360 on SG Highway, Ahmedabad.",
    keywords: "Maruti Buildcon, real estate developer Ahmedabad, Maruti 360 developer",
  },
  "/amenities": {
    path: "/amenities",
    title: "Maruti 360 Amenities | Luxury Lifestyle Features in Ahmedabad",
    description:
      "Explore Maruti 360 amenities near SG Highway, Ahmedabad, including recreation, fitness, wellness and shared social spaces.",
    keywords: "Maruti 360 amenities, luxury apartment amenities Ahmedabad, clubhouse SG Highway",
    og_image: `${SITE}/og/maruti-360-amenities.jpg`,
  },
  "/floor-plan": {
    path: "/floor-plan",
    title: "Maruti 360 Floor Plans | 4 & 5 BHK Layouts, Ahmedabad",
    description:
      "Explore Maruti 360 4 BHK and 5 BHK floor plans on SG Highway, Ahmedabad. Request approved layouts, specifications and a private walkthrough.",
    keywords: "Maruti 360 floor plan, 4 BHK floor plan Ahmedabad, 5 BHK floor plan SG Highway",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/floor-plan/4-bhk": {
    path: "/floor-plan/4-bhk",
    title: "Maruti 360 4 BHK Floor Plan | SG Highway, Ahmedabad",
    description:
      "Explore the Maruti 360 4 BHK sky residence layout on SG Highway, Ahmedabad. Request the approved plan, specifications and current availability.",
    keywords: "Maruti 360 4 BHK, 4 BHK floor plan SG Highway, luxury 4 BHK Ahmedabad",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/floor-plan/5-bhk": {
    path: "/floor-plan/5-bhk",
    title: "Maruti 360 5 BHK Floor Plan | SG Highway, Ahmedabad",
    description:
      "Explore the Maruti 360 5 BHK sky residence layout on SG Highway, Ahmedabad. Request the approved plan, specifications and current availability.",
    keywords: "Maruti 360 5 BHK, 5 BHK floor plan SG Highway, luxury 5 BHK Ahmedabad",
    og_image: `${SITE}/og/maruti-360-floor-plan.jpg`,
  },
  "/contact-us": {
    path: "/contact-us",
    title: "Contact Maruti 360 | Book a Private Site Visit in Ahmedabad",
    description:
      "Contact Maruti 360 to request the brochure, current price list, approved floor plans or a private site visit on SG Highway, Ahmedabad.",
    keywords: "contact Maruti 360, book site visit Ahmedabad, luxury apartment enquiry SG Highway",
  },
  "/price": {
    path: "/price",
    title: "Maruti 360 Price & Payment Plan | 4 & 5 BHK Ahmedabad",
    description:
      "Request the current Maruti 360 price list, payment plan and availability for 4 and 5 BHK residences on SG Highway, Ahmedabad.",
    keywords: "Maruti 360 price, 4 BHK price Ahmedabad, 5 BHK price SG Highway",
  },
  "/location": {
    path: "/location",
    title: "Maruti 360 Location | Near Karnavati Club, SG Highway Ahmedabad",
    description:
      "Explore the Maruti 360 location near Karnavati Club on SG Highway, Ahmedabad, with map directions and a practical connectivity overview.",
    keywords: "Maruti 360 location, flats near Karnavati Club, SG Highway apartments Ahmedabad",
    og_image: `${SITE}/og/maruti-360-location.jpg`,
  },
  "/rera-legal": {
    path: "/rera-legal",
    title: "Maruti 360 RERA Details | Registration and Buyer Documents",
    description:
      "Review the Maruti 360 RERA registration reference and request the current approved project documents before booking.",
    keywords: "Maruti 360 RERA, RERA project Ahmedabad, Maruti 360 legal details",
  },
  "/faq": {
    path: "/faq",
    title: "Maruti 360 FAQ | Price, Plans, Location and RERA",
    description:
      "Find answers about Maruti 360 floor plans, price requests, location, amenities, RERA documents and private site visits.",
    keywords: "Maruti 360 FAQ, Maruti 360 possession, Maruti 360 floor plan questions",
  },
  "/gallery": {
    path: "/gallery",
    title: "Maruti 360 Gallery | Residences, Amenities and Skyline Views",
    description:
      "Explore approved Maruti 360 visuals of residences, amenities and views. Request the latest brochure, walkthrough and project update.",
    keywords: "Maruti 360 gallery, Maruti 360 photos, luxury apartments Ahmedabad images",
    og_image: `${SITE}/og/maruti-360-gallery.jpg`,
  },
  "/blog": {
    path: "/blog",
    title: "Maruti 360 Blog | Luxury Home Buying Guides in Ahmedabad",
    description:
      "Read practical, fact-checked guides on luxury homes, project documents, layouts and location research in Ahmedabad.",
    keywords: "Ahmedabad real estate blog, luxury apartments Ahmedabad guide, Maruti 360 updates",
    og_image: `${SITE}/og/maruti-360-blog.jpg`,
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Maruti 360 Ahmedabad",
    description:
      "Read how Maruti 360 collects, uses, stores and protects information submitted through enquiry forms, WhatsApp and site-visit bookings.",
    keywords: null,
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
    {
      name: "robots",
      content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    },
  ];
  if (seo.keywords) meta.push({ name: "keywords", content: seo.keywords });
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
