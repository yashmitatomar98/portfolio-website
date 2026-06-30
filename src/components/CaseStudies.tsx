import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="scroll-mt-20 bg-surface border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies"
          intro="A few projects where analysis led to measurable business outcomes."
        />

        <div className="mt-14 space-y-8">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 60} variant={i % 2 === 0 ? "left" : "right"}>
              <article className="lift group relative overflow-hidden rounded-2xl border border-hairline bg-ivory p-6 sm:p-9">
                {/* corner sheen that warms on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(122,79,158,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">
                  {study.context}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">
                  {study.title}
                </h3>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Problem
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Approach
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                      {study.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Impact
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
                      {study.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5 border-t border-hairline pt-6 sm:gap-x-10">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <CountUp
                        value={stat.value}
                        className="block bg-gradient-to-br from-accent to-accent-2 bg-clip-text font-heading text-3xl font-semibold text-transparent"
                      />
                      <div className="mt-1 text-sm text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
