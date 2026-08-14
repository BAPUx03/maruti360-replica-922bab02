# Maruti 360 SEO implementation

## Goal
Implement the uploaded SEO brief without changing the luxury design, enquiry journey, lead routing, or working forms. Publish only facts already supported in the project or explicitly provided in the brief.

## Completed first: admin access
- Prevent deployment caching of cookie-dependent admin status and SEO-page requests by changing both checks to POST.
- Keep the full-page redirect after successful sign-in so the new secure cookie is available before `/admin` loads.
- Verify a real configured sign-in creates the `m360-admin` cookie and opens `/admin` without errors.

## SEO implementation
1. **Single source of truth**
   - Add a central project facts and public-route registry for brand, canonical host, verified location wording, RERA reference, configurations, legal disclaimers, and sitemap routes.
   - Keep route title/description defaults in the existing central SEO metadata module so the admin panel can still override them.

2. **Metadata and technical indexing**
   - Apply the brief’s exact titles and descriptions to all listed commercial routes.
   - Keep unique canonical, robots, Open Graph, and Twitter tags server-rendered.
   - Replace favicon social previews with a dedicated 1200×630 image made from the existing approved project artwork.
   - Remove generic root title/description duplication and retain shared Organization/WebSite schema only at root.
   - Generate the sitemap from the public-route registry without fabricated `lastmod`, `changefreq`, or priority values.
   - Keep admin/login excluded through robots and noindex.

3. **Page structure and trust signals**
   - Match each route’s H1 to the brief.
   - Add factual disclaimers to Floor Plan, Price, and RERA pages.
   - Remove unsupported possession dates, distance claims, availability language, and repeated FAQ schema where it is not appropriate.
   - Keep FAQ schema only where matching FAQ content is visibly rendered.
   - Add crawlable contextual links and complete footer navigation to permanent commercial routes.

4. **Blog foundation**
   - Replace “Coming soon” with linked article pages only when complete content exists.
   - Build the eight requested factual buyer guides from the supplied outlines, with clear non-legal/non-financial disclaimers, internal links, author attribution to the Maruti 360 Editorial Team, truthful publication/review dates, and BlogPosting schema.
   - Add completed article URLs to metadata and sitemap only after each page is fully implemented.

5. **Validation**
   - Check public routes for one H1, unique metadata, canonical URLs, robots tags, structured data, internal links, and nonblank rendering.
   - Verify `/robots.txt`, `/sitemap.xml`, `/secure-login`, `/admin`, enquiry popup, and responsive layouts.

## Not changed in code
- Redirecting the separate `maruti360.com` domain requires control of that domain/hosting.
- Search Console/Bing submission and external profile updates require owner access after deployment.
- No guessed prices, possession dates, carpet areas, travel distances, approvals, reviews, or availability will be added.
