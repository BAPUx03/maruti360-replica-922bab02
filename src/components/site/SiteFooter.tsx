import logo from "@/assets/Group-35-2.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// Every permanent commercial route, kept in the footer as plain crawlable
// <a href> links (not JS-only actions) so every page stays reachable from
// every other page regardless of what's in the main nav.
const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Floor Plan", href: "/floor-plan" },
  { label: "Price", href: "/price" },
  { label: "Location", href: "/location" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "RERA Details", href: "/rera-legal" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-surface-2 px-5 py-16 text-center md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-2">
          <img data-brand-logo src={logo} alt="Maruti 360 logo" className="h-14 w-auto" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Above It All
          </span>
        </div>

        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
        >
          {FOOTER_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={16} className="transition-colors hover:text-gold" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={16} className="transition-colors hover:text-gold" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} className="transition-colors hover:text-gold" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <a
            href="https://www.marutibuildcon.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold"
          >
            Maruti Buildcon
          </a>
        </div>

        {/* Discreet admin entry — unlabelled, not indexed, credentials verified server-side */}
        <div className="mt-8">
          <a
            href="/secure-login"
            aria-label="Staff access"
            rel="nofollow noindex"
            className="inline-block h-2 w-2 rounded-full bg-muted-foreground/20 align-middle transition-colors hover:bg-gold"
          >
            <span className="sr-only">Staff access</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
