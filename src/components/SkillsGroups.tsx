import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";

export default function SkillsGroups() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          intro="A toolkit spanning data, business strategy, and the soft skills that move work forward."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 80}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                {group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="chip cursor-default rounded-full px-3.5 py-1.5 text-sm text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
