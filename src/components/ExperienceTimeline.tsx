import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Experience"
          title="Career Arc"
          intro="From engineering to data to business analysis — a decade of turning data into decisions."
        />

        <ol className="relative mt-14 border-l border-hairline">
          {/* gradient overlay on the timeline rail */}
          <span
            aria-hidden="true"
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-accent/50 via-accent-2/30 to-transparent"
          />
          {experience.map((job, i) => {
            const current = job.duration.includes("Present");
            return (
            <li key={`${job.company}-${job.role}`} className="group relative pl-8 pb-12 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[6.5px] top-1.5">
                {current && (
                  <span className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-accent/40" />
                )}
                <span className="relative block h-3 w-3 rounded-full border-2 border-accent bg-ivory transition-transform duration-300 group-hover:scale-125 group-hover:bg-accent" />
              </span>
              <Reveal delay={i * 40}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {job.role}
                  </h3>
                  <span className="tabular text-sm text-muted">{job.duration}</span>
                </div>
                <p className="mt-0.5 text-base font-medium text-accent">
                  {job.company}
                  <span className="font-normal text-muted"> · {job.location}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="relative pl-5 text-[15px] leading-relaxed text-ink/80 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
