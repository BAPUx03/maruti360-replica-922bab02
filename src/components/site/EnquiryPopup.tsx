import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5">
      <div className="relative w-full max-w-[420px] border border-gold/40 bg-[#3a1712] p-8 text-center shadow-2xl">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-gold/80 hover:text-gold"
        >
          <X size={18} />
        </button>

        <p className="eyebrow">Want to be invited?</p>
        <div className="mx-auto my-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/60">
          <span className="font-display text-xl text-gold">360°</span>
        </div>
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold/80">Above It All</p>

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          <input
            required
            placeholder="Name"
            className="w-full border border-gold/30 bg-black/25 px-4 py-3 text-[12px] text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
          />
          <input
            required
            type="email"
            placeholder="Email ID"
            className="w-full border border-gold/30 bg-black/25 px-4 py-3 text-[12px] text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
          />
          <input
            required
            placeholder="Cell Number"
            className="w-full border border-gold/30 bg-black/25 px-4 py-3 text-[12px] text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
          />
          <button type="submit" className="btn-gold w-full">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
