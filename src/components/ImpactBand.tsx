import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { highlights } from "@/data/highlights";

export default function ImpactBand() {
  return (
    <section
      aria-label="Impact at a glance"
      className="border-t border-hairline"
    >
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal as="div" key={item.label} delay={i * 70} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <CountUp
                  value={item.value}
                  className="block bg-gradient-to-br from-accent to-accent-2 bg-clip-text font-heading text-[clamp(2.25rem,6vw,3.25rem)] font-bold text-transparent"
                />
                <span className="mt-2 block text-sm leading-snug text-muted">
                  {item.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
