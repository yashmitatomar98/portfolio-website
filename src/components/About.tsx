import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading eyebrow="About" title="Analytical Rigor, business sense." />
          <div className="space-y-6">
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-lg leading-relaxed text-ink/85">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
