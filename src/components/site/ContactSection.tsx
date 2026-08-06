import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <p className="eyebrow">Come Witness Yourself</p>
          <h2 className="mt-4 font-display text-[28px] leading-snug text-foreground md:text-[40px]">
            Let&apos;s Get In Touch
          </h2>
          <p className="mt-5 text-[13px] leading-[2] text-muted-foreground">
            Perfection that allures all. Send in a request and our team will be happy to support
            you.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="mt-10 space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="First Name"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
              <input
                required
                placeholder="Last Name"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
              <input
                required
                placeholder="Phone"
                className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border border-border bg-surface-2 px-4 py-3 text-[12px] outline-none placeholder:text-muted-foreground focus:border-gold"
            />
            <button type="submit" className="btn-gold w-full">
              Submit Request
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
