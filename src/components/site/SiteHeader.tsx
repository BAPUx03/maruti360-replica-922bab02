import logo from "@/assets/Group-35-2.png.asset.json";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";


const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Floor Plan", href: "/floor-plan" },
  { label: "Contact Us", href: "/contact-us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-surface-2/95 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="/" className="flex items-center">
          <img src={logo.url} alt="Maruti 360 logo" className="h-9 w-auto md:h-11" />
        </a>


        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+919909923456"
            className="group flex items-center gap-3 border-l border-gold/25 pl-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-surface">
              <Phone size={13} />
            </span>
            <span className="leading-tight">
              <span className="block text-[9px] uppercase tracking-[0.22em] text-foreground/55">
                Sales Enquiry
              </span>
              <span className="block text-[13px] tracking-[0.06em] text-foreground transition-colors group-hover:text-gold">
                +91 99099 23456
              </span>
            </span>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-surface-2 px-6 py-4">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-[12px] uppercase tracking-[0.16em] text-foreground/85"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+919909923456"
            className="mt-2 flex items-center gap-2 border-t border-border pt-4 text-[13px] tracking-[0.06em] text-gold"
          >
            <Phone size={14} /> +91 99099 23456
          </a>
        </nav>
      )}

    </header>
  );
}
