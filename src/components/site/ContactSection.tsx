import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { saveLead } from "@/lib/leads";


const WA_NUMBER = "919904969298";

export function ContactSection() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <p className="eyebrow">Come Witness Yourself</p>
          <h2 className="mt-4 font-display text-[28px] leading-snug text-foreground md:text-[40px]">
            Let&apos;s Get In Touch
          </h2>
          <p className="mt-5 text-[13px] leading-[2] text-muted-foreground">
            Share a few details and our residence advisor will call you back with pricing, floor
            plans and a private site-visit slot.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="mt-10 space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const first = String(data.get("first") ?? "").trim();
              const last = String(data.get("last") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const phone = String(data.get("phone") ?? "").trim();
              const config = String(data.get("config") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();

              if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10))) {
                toast.error("Please enter a valid 10-digit mobile number.");
                return;
              }

              setSending(true);
              const text = [
                "New enquiry from the website",
                `Name: ${first} ${last}`,
                `Phone: ${phone}`,
                `Email: ${email}`,
                `Interested in: ${config || "Not specified"}`,
                message ? `Message: ${message}` : "",
              ]
                .filter(Boolean)
                .join("\n");

              void saveLead({
                first_name: first,
                last_name: last,
                email,
                phone,
                requirement: config,
                message,
                source: "contact_form",
              });

              window.open(
                `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
                "_blank",
                "noopener,noreferrer",
              );
              toast.success("Thank you! Our advisor will connect with you shortly.");
              form.reset();
              setSending(false);
            }}

          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="first"
                autoComplete="given-name"
                placeholder="First Name"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
              <input
                required
                name="last"
                autoComplete="family-name"
                placeholder="Last Name"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
              <input
                required
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Phone (10-digit mobile)"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
            </div>
            <select
              name="config"
              defaultValue=""
              className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] text-foreground outline-none focus:border-gold"
            >
              <option value="">Select configuration</option>
              <option value="4 BHK">4 BHK Residence</option>
              <option value="5 BHK">5 BHK Residence</option>
              <option value="Jodi / Duplex / Penthouse">Jodi / Duplex / Penthouse</option>
              <option value="Investment">Investment</option>
            </select>
            <textarea
              rows={4}
              name="message"
              placeholder="Message (optional)"
              className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
            />
            <button type="submit" disabled={sending} className="btn-gold w-full disabled:opacity-60">
              {sending ? "Sending…" : "Submit Request"}
            </button>
            <p className="text-center text-[10px] leading-relaxed text-muted-foreground">
              Or call us directly at{" "}
              <a href="tel:+919904969298" className="text-gold">
                +91 99049 69298
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
