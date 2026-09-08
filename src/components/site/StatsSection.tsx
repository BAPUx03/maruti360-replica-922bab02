// Rendered as plain static values so the server-rendered HTML always contains
// the real numbers (501, 2, 41, 124) — never placeholder zeros.
const STATS = [
  { value: 501, label: "Feet Tall" },
  { value: 2, label: "Towers" },
  { value: 41, label: "Storeys" },
  { value: 124, label: "Uber Luxe Suites" },
];

export function StatsSection() {
  return (
    <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-[40px] leading-none text-foreground md:text-[56px]">
              {s.value}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
