import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 501, suffix: "", label: "Feet Tall" },
  { value: 2, suffix: "", label: "Towers" },
  { value: 41, suffix: "", label: "Storeys" },
  { value: 124, suffix: "", label: "Uber Luxe Suites" },
];

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return value;
}

function Stat({ value, label, active }: { value: number; label: string; active: boolean }) {
  const n = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-[40px] leading-none text-foreground md:text-[56px]">
        {n}
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-surface-2 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} active={active} />
        ))}
      </div>
    </section>
  );
}
