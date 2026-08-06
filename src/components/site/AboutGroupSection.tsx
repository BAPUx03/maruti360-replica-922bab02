import marutiGroup from "@/assets/maruti-group.jpg";
import { Reveal } from "./Reveal";

export function AboutGroupSection() {
  return (
    <section className="bg-surface-2 px-5 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1150px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-[30px] leading-tight text-foreground md:text-[42px]">
            Maruti Group
          </h2>
          <p className="mt-6 text-[13px] leading-[2] text-muted-foreground">
            At Maruti Buildcon, we are driven by innovation and rooted in uncompromising perfection.
            Building on promises since 1985, we have built a legacy of care, integrity, and
            commitment with each brick, each project, and each dream.
          </p>
          <p className="mt-4 text-[13px] leading-[2] text-muted-foreground">
            Aimed to transform and innovate the real estate sector, we engineer solutions for the
            future.
          </p>
          <a href="/about" className="btn-gold mt-8">
            Read Ahead
          </a>
        </Reveal>

        <Reveal delay={120}>
          <img
            src={marutiGroup}
            alt="A Maruti Buildcon residential tower at golden hour"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
