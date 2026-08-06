import logo from "@/assets/Group-35-2.png.asset.json";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-surface-2 px-5 py-16 text-center md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-2">
          <img data-brand-logo
              src={logo.url} alt="Maruti 360 logo" className="h-14 w-auto" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Above It All
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
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
          <a href="/privacy-policy" className="hover:text-gold">
            Privacy Policy
          </a>
          <a href="/contact-us" className="hover:text-gold">
            Contact Us
          </a>
        </div>

        <p className="mt-10 text-[11px] text-muted-foreground">
          © Maruti 360. All Rights Reserved.
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Manage by{" "}
          <a
            href="https://thevitalmedia.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gold"
          >
            The Vital Media
          </a>
        </p>
      </div>
    </footer>
  );
}
