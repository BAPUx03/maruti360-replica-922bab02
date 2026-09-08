import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { saveLead } from "@/lib/leads";

const fieldClass =
  "w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold";

const labelClass = "mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground";

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
            // method="post" so that if JavaScript ever fails, a fallback
            // submission never puts personal details into a GET query string.
            method="post"
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

              void saveLead({
                first_name: first,
                last_name: last,
                email,
                phone,
                requirement: config,
                message,
                source: "contact_form",
              });

              toast.success("Thank you! Our advisor will connect with you shortly.");
              form.reset();
              setSending(false);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-first" className={labelClass}>
                  First name
                </label>
                <input
                  required
                  id="contact-first"
                  name="first"
                  autoComplete="given-name"
                  placeholder="First Name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-last" className={labelClass}>
                  Last name
                </label>
                <input
                  required
                  id="contact-last"
                  name="last"
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  required
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone (10-digit mobile)
                </label>
                <input
                  required
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="Phone (10-digit mobile)"
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-config" className={labelClass}>
                Configuration of interest
              </label>
              <select
                id="contact-config"
                name="config"
                defaultValue=""
                className={`${fieldClass} text-foreground`}
              >
                <option value="">Select configuration</option>
                <option value="4 BHK">4 BHK Residence</option>
                <option value="5 BHK">5 BHK Residence</option>
                <option value="Jodi / Duplex / Penthouse">Jodi / Duplex / Penthouse</option>
                <option value="Investment">Investment</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message (optional)
              </label>
              <textarea
                rows={4}
                id="contact-message"
                name="message"
                placeholder="Message (optional)"
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-gold w-full disabled:opacity-60"
            >
              {sending ? "Sending…" : "Submit Request"}
            </button>
            <p className="text-center text-[10px] leading-relaxed text-muted-foreground">
              Our residence advisor responds to every enquiry the same working day.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
