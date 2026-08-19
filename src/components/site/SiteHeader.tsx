import logo from "@/assets/Group-35-2.png";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { EnquiryButton, openEnquiry } from "@/components/site/EnquiryCta";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Floor Plan", href: "/floor-plan" },
  { label: "Price", href: "/price" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
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
        scrolled ? "bg-surface-2/95 backdrop-blur-sm py-3" : "over-media bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="/" className="flex items-center">
          <img src={logo} data-brand-logo alt="Maruti 360 logo" className="h-9 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
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

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <EnquiryButton className="text-[11px]">Enquire Now</EnquiryButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle className="md:hidden" />
          <button
            className="text-foreground"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
            className="mt-3 block w-full border-t border-border pt-4 text-left text-[12px] uppercase tracking-[0.16em] text-gold"
          >
            Enquire Now
          </button>
        </nav>
      )}
    </header>
  );
}
