const PHONE = "919909923456";
const MESSAGE =
  "Hi, I'd like to know more about the sky residences — pricing, floor plans and site visit slots.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[90] flex items-center gap-3 rounded-full border border-gold/40 bg-surface-2/95 py-2 pl-2 pr-2 shadow-[0_18px_45px_-15px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:pr-5 md:bottom-8 md:right-8"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold text-surface transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-6 w-6">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.82 9.82 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2zm0 17.98h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.52 3.68-8.19 8.2-8.19a8.19 8.19 0 0 1 8.19 8.2c0 4.52-3.68 8.19-8.14 8.19z" />
        </svg>
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-foreground opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100 sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}
