# Maruti360

Very important note: I am the rightful owner and developer of this template. I own all the assets and everything that is contained in it.

**Task:** Recreate the website from the attached standalone HTML file as a pixel-perfect clone.

**📸 Visual Reference (CRITICAL):**

A full-page screenshot of the original website is attached alongside the HTML file. This screenshot is the **visual ground truth**. When in doubt about any visual detail — layout, spacing, colors, typography, alignment — **always defer to what you see in the screenshot**, not your interpretation of the HTML.

**🚫 Do NOT Embed as Iframe (MANDATORY):**

Do **NOT** embed, wrap, or load the provided HTML file inside an `<iframe>`, `<object>`, `<embed>`, or any similar container. Do **NOT** serve the file as a static asset that is then referenced by an iframe. Instead, **recreate it as a native, standard webpage** — parse the HTML, decompose it into real components, and render it directly at the route `/` as part of the app's own component tree. The final page must be indistinguishable from any other hand-built page in the project (same routing, same component architecture, same styling system).

**🚫 Anti-Deviation Rules (MANDATORY):**

- Do **NOT** substitute, "improve", or replace any fonts found in the source. Use the exact same font families.

- Do **NOT** change any colors. Use the exact hex/rgb values from the source HTML/CSS.

- Do **NOT** alter spacing, padding, margins, or gaps. Replicate them precisely.

- Do **NOT** add your own styling choices, decorative elements, or "enhancements".

- Do **NOT** simplify or restructure layouts. If the source uses a specific grid, flexbox, or positioning approach, replicate it.

- Do **NOT** replace images with placeholders or AI-generated alternatives.

- If something looks "wrong" or "outdated" in the source, clone it anyway — the goal is an **exact replica**, not an improvement.

**Requirements:**

1. **Visual fidelity** — Match all styling, typography, spacing, colors, and layout exactly as rendered in the source HTML. Cross-reference the attached screenshot to verify accuracy.

2. **Assets** — Extract and download all images, icons, and SVGs referenced in the HTML. Use the original filenames where possible.

3. **Animations & interactions** — Reproduce all CSS animations, transitions, hover effects, scroll-triggered behaviors, and any JavaScript-driven interactions present in the source.

4. **Responsive design** — Preserve all breakpoints and mobile/tablet layouts as defined in the source CSS/media queries.

5. **Component architecture** — Decompose the page into logical, reusable components (e.g., `SiteHeader`, `Footer`). Each section of the page should be its own component. Reuse shared components (header, footer, navigation) that were created for previous pages.

6. **Design tokens** — Extract the color palette, font families, and spacing scale from the source and configure them in `tailwind.config.ts` and `index.css` for consistency.

---

**📐 Extracted Design Specifications (from source HTML/CSS):**

**Colors (hex):** #fff, #000, #e6e6eb, #d0d0d8, #ddd, #eee, #333, #141b38, #666, #ccc, #999, #222, #3b5998, #00aced, #dd4b39, #007bb6, #cb2027, #408bd1, #359dff, #444, #aaa, #e8e8eb, #dcdde1, #0068a0, #f9f9fa, #434960, #d0d1d7, #2c324c, #35363f, #7e7272

**Colors (rgb):** rgb(255, 255, 255), rgba(0, 0, 0, 0.075), rgb(165, 220, 134), rgba(0, 0, 0, 0.4), rgb(84, 84, 84), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgb(39, 120, 196), rgb(112, 102, 224), rgba(112, 102, 224, 0.5), rgb(220, 55, 65), rgba(220, 55, 65, 0.5), rgb(110, 120, 129), rgba(110, 120, 129, 0.5), rgba(100, 150, 200, 0.5), rgb(238, 238, 238), rgb(204, 204, 204), rgb(242, 116, 116), rgb(217, 217, 217), rgba(0, 0, 0, 0.06)

**Font families:** inherit | monospace | Arial | Times New Roman | Montserrat | Sans-Serif | Tahoma | -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif | -apple-system, | Menlo,Consolas,monaco,monospace | sans-serif | 'FontAwesome' | var(--bs-font-sans-serif) | var(--bs-body-font-family) | var(--bs-font-monospace) | var(--bs-btn-font-family) | var(--fa-style-family, | flaticon_beauly | Arial,Helvetica,sans-serif | 'swiper-icons' | swiper-icons | Arial,Baskerville,monospace | var(--tj-ff-body) | var(--tj-ff-heading) | var(--tj-ff-p) | var(--tj-ff-primary) | serif | eicons | var( --e-global-typography-accent-font-family ),Sans-serif | Helvetica,Arial,serif | Helvetica,Arial | 'Roboto' | 'Roboto Slab' | 'Poppins' | 'Prata' | 'Jost' | 'Old Standard TT' | 'Montserrat' | Trebuchet MS,Tahoma,Verdana,Arial,sans-serif | Helvetica, sans-serif | &quot | Helvetica

**Font sizes:** 1em, 0.8em, 2em, 1.8em, 1rem, 1.875em, 2.5em, 1.125em, 3.75em, 13px, 14px, 12px, 19px, 8px, 16px, 18px, inherit, 48px, 24px, 20px

**Line heights:** normal, 2.625em, 1.5em, 5em, 2em, 0 !important, 99999, 1.3!important, 0, 1.1, 1.3, 32px, 1, 0!important, 1.4

**Letter spacing:** 0.02em, 0.08em, normal, inherit, .05em!important, 0!important, -.01em!important, -.025em!important, -.04em!important, 0

**Border radii:** 50%, 4em 0px 0px 4em, 0px 4em 4em 0px, 5px, 100%, 0.25em, 0.1875em, 0.125em, 7.5em 0px 0px 7.5em, 0px 7.5em 7.5em 0px

**Box shadows:** rgba(0, 0, 0, 0.075) 0px 0px 1px, rgba(0, 0, 0, 0.075) 0px 1px 2px, rgba(0, 0, 0, 0.075) 1px 2px 4px, rgba(0, 0, 0, 0.075) 1px 3px 8px, rgba(0, 0, 0, 0.075) 2px 4px 16px | transparent 0px 0px 0px 3px | rgba(112, 102, 224, 0.5) 0px 0px 0px 3px | rgba(220, 55, 65, 0.5) 0px 0px 0px 3px | rgba(110, 120, 129, 0.5) 0px 0px 0px 3px

---

**🔗 Link Preservation (Critical):**

- **All internal links** found in the source HTML (navigation menus, footer links, in-page links, CTAs, buttons, etc.) must be converted to their correct route paths in the new site. For example, if the source links to `/about`, `/contact`, or `/services/web-design`, those exact paths must be used as routes.

- **All external links** (links pointing to other domains) must be preserved exactly as they appear in the source HTML.

- **Navigation menus** must include links to all pages referenced in the source, ensuring every page is accessible from the navigation — just as it is on the original website.

- **Do NOT use placeholder links** like `#` or `javascript:void(0)` for any link that has a real destination in the source HTML.

- The goal is that once all pages of the original website have been cloned, the entire link structure is automatically preserved with zero broken links and no manual prompt-writing needed by the user.

This HTML file is the **"Homepage"** page (titled "Home - MARUTI360"). It should be rendered at the route `/`.

If the source HTML file was the 'homepage' of the original website, the current web page being built should also be the 'homepage' of the current website.

**Deliverable:** A fully functional, visually identical clone rendered at the route `/`.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://maruti360-replica.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ba7e418d-83ab-4013-89f5-e2b0b358ae75).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
