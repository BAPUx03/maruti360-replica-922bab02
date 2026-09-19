# Complete website and SEO repair

## Goal
Make every public Maruti 360 page consistent, crawlable, fact-safe, and strongly connected, while preserving the luxury design and existing lead flow.

## 1. Fix current indexing errors
- Use the active public site origin consistently for canonical URLs, `og:url`, WebSite/page schemas, sitemap entries, robots sitemap reference, and share-image URLs.
- Keep admin, secure login, API, and unknown pages out of the sitemap; retain noindex on private/error pages.
- Keep all public routes indexable and verify the sitemap contains every public page and blog article exactly once.
- Do not add synthetic `<lastmod>` dates; no authoritative page-specific update timestamps currently exist.

## 2. Remove unsupported or conflicting claims
- Replace “Bodakdev” in search titles/descriptions with the verified “off S.G. Highway / near Karnavati Club” wording.
- Remove unsupported “since 1985”, “four decades”, milestone history, delivery-history, and other claims not present in the approved project facts.
- Review the audited About, Developer, Amenities, Floor Plan, Price, Location, RERA, FAQ, Gallery, Contact, and newer index pages for unsupported dimensions, availability, amenity operations, construction, parking, Vastu, consultant, or possession statements; replace them with verified facts or clear request/verification language.
- Keep price, area, possession, review, legal-identity, and relationship claims conservative and sourced from the shared verified facts.

## 3. Strengthen page metadata and structured data
- Make each public route’s title, description, canonical, Open Graph URL/type, Twitter card, and schema match that page.
- Remove duplicate local SEO constants and read page names/descriptions from the shared SEO source.
- Keep only appropriate WebSite, WebPage/CollectionPage, ApartmentComplex/Apartment, Article, BreadcrumbList, and existing truthful FAQ schemas.
- Improve breadcrumb labels for nested routes and avoid adding unsupported organization identity or fake ratings.
- Reuse a page’s real displayed project image for social previews where an approved share-sized version exists; otherwise use the existing project preview rather than inventing imagery.

## 4. Improve crawlable internal links
- Add contextual links on About and Amenities.
- Turn Contact page information cards into crawlable links where a matching destination exists, while keeping enquiry actions working.
- Expand links from Price, Floor Plans, Location, Gallery, FAQ, and RERA pages to the relevant Brochure, Site Visit, Specifications, Construction Update, Developer, and Reviews pages.
- Keep navigation concise and avoid duplicate or broken destinations.

## 5. Validate the complete site
- Check all public routes on desktop and mobile for visible content, working links, non-overlapping text, and correct lead-popup behavior.
- Confirm the sitemap and robots output use one origin and return successfully.
- Check build, runtime, browser console, metadata, canonical tags, and structured data.
- Re-run the fast SEO review and mark only fully corrected findings as fixed.

## Technical details
- Preserve TanStack Start routing and route-level `head()` metadata.
- Keep the existing Lovable Cloud lead, email, sheet, OTP, admin, and enquiry logic unchanged.
- Use shared `PROJECT_FACTS` and SEO helpers as the only source for public factual/metadata values.
