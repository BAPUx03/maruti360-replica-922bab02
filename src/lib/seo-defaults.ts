export const SITE = "https://www.maruti-360.com";

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
    title: "4 & 5 BHK Luxury Apartments on S.G. Highway, Ahmedabad | MARUTI 360",
    description:
      "Maruti 360 offers 4 & 5 BHK luxury sky residences in twin 41-storey towers on S.G. Highway, Ahmedabad — 501 ft tall, resort amenities, 360° city views. Book a site visit.",
    keywords:
      "4 BHK apartments Ahmedabad, 5 BHK luxury flats SG Highway, Maruti 360, luxury apartments Ahmedabad, sky residences Ahmedabad, penthouse Ahmedabad",
  },
  "/about": {
    path: "/about",
    title: "About The Developer — 40 Years Of Inspiring Realty In Ahmedabad",
    description:
      "Since 1985, our team has delivered residential and commercial landmarks across Ahmedabad. Learn about the vision, design partners and construction standards behind the 41-storey twin towers off SG Highway.",
    keywords:
      "luxury builder Ahmedabad, real estate developer SG Highway, RERA registered project Ahmedabad, high rise developer Gujarat",
  },
  "/amenities": {
    path: "/amenities",
    title: "Amenities — Sky Deck, Pool, Clubhouse & Wellness | 41-Storey Towers",
    description:
      "Explore the amenities of our 41-storey twin towers off SG Highway, Ahmedabad: a 360° viewing gallery, lap pool, clubhouse, theatre, gym, yoga deck, indoor games arena and landscaped gardens.",
    keywords:
      "luxury apartment amenities Ahmedabad, sky deck SG Highway, clubhouse swimming pool Ahmedabad, high rise amenities Gujarat",
  },
  "/floor-plan": {
    path: "/floor-plan",
    title: "Floor Plans — 4 & 5 BHK Sky Residences Off SG Highway, Ahmedabad",
    description:
      "Explore 4 BHK and 5 BHK luxury floor plans in 41-storey twin towers off SG Highway, Ahmedabad — carpet areas, layouts, sky decks and FAQs.",
    keywords:
      "4 BHK floor plan Ahmedabad, 5 BHK floor plan SG Highway, luxury apartment layout Ahmedabad, carpet area 4 BHK Ahmedabad",
  },
  "/floor-plan/4-bhk": {
    path: "/floor-plan/4-bhk",
    title: "4 BHK Sky Residences Off SG Highway, Ahmedabad — Floor Plan",
    description:
      "4 BHK luxury apartments in 41-storey twin towers off SG Highway, Ahmedabad: wide-frontage layout, deep sky deck, four homes per floor, premium specifications and FAQs.",
    keywords:
      "4 BHK apartment Ahmedabad, 4 BHK floor plan SG Highway, luxury 4 BHK price Ahmedabad",
  },
  "/floor-plan/5-bhk": {
    path: "/floor-plan/5-bhk",
    title: "5 BHK Luxury Apartments Off SG Highway, Ahmedabad — Floor Plan",
    description:
      "5 BHK signature residences in 41-storey twin towers off SG Highway, Ahmedabad: private lounge, family deck, staff quarters, jodi and penthouse options, specifications and FAQs.",
    keywords:
      "5 BHK apartment Ahmedabad, 5 BHK floor plan SG Highway, penthouse Ahmedabad, jodi apartment Ahmedabad",
  },
  "/contact-us": {
    path: "/contact-us",
    title: "Contact Us — Book A Site Visit Off SG Highway, Ahmedabad",
    description:
      "Speak to a residence advisor about 4 & 5 BHK sky residences off SG Highway, Ahmedabad. Call +91 99049 69298, message on WhatsApp, or request pricing, floor plans and a private site-visit slot.",
    keywords:
      "book site visit Ahmedabad, luxury apartment enquiry SG Highway, 4 BHK price Ahmedabad, contact real estate developer Ahmedabad",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Sky Residences Off SG Highway, Ahmedabad",
    description:
      "How we collect, use, store and protect the personal information you share through enquiry forms, WhatsApp and site-visit bookings on this website.",
    keywords: null,
  },
};

export const SEO_PATHS = Object.keys(SEO_DEFAULTS);

export function getDefaultSeo(path: string): SeoMeta {
  return (
    SEO_DEFAULTS[path] ?? {
      path,
      title: "MARUTI 360",
      description: "Luxury sky residences off SG Highway, Ahmedabad.",
    }
  );
}

/** Merge stored overrides (from the admin panel) over the built-in defaults. */
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

/** Build the meta + links arrays shared by every public page. */
export function seoHead(path: string, override?: Partial<SeoMeta> | null) {
  const seo = resolveSeo(path, override);
  const url = `${SITE}${path === "/" ? "/" : path}`;

  const meta: Array<Record<string, string>> = [
    { title: seo.title },
    { name: "description", content: seo.description },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    {
      name: "robots",
      content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    },
  ];

  if (seo.keywords) meta.push({ name: "keywords", content: seo.keywords });
  if (seo.og_image) {
    meta.push({ property: "og:image", content: seo.og_image });
    meta.push({ name: "twitter:image", content: seo.og_image });
  }

  return { meta, links: [{ rel: "canonical", href: url }] };
}
