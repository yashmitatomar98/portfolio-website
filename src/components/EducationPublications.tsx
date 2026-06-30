import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, publications } from "@/data/credentials";

export default function EducationPublications() {
  return (
    <section id="education" className="scroll-mt-20 bg-surface border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <div className="mt-10 space-y-6">
              {education.map((edu, i) => (
                <Reveal key={edu.degree} delay={i * 60}>
                  <div className="border-l-2 border-accent/30 pl-5 transition-all duration-300 hover:border-accent hover:pl-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-heading text-base font-semibold text-ink">
                        {edu.degree}
                      </h3>
                      <span className="tabular text-sm text-muted">{edu.year}</span>
                    </div>
                    <p className="mt-1 text-[15px] text-muted">{edu.school}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Publications" title="Research" />
            <ul className="mt-10 space-y-5">
              {publications.map((pub, i) => (
                <Reveal as="li" key={pub} delay={i * 60}>
                  <div className="lift rounded-lg border border-hairline bg-ivory px-5 py-4">
                    <p className="text-[15px] leading-relaxed text-ink/85">
                      “{pub}”
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
