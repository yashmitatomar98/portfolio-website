import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/credentials";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:py-32">
        <SectionHeading eyebrow="Certifications" title="Credentials" />

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={cert} delay={i * 40}>
              <div className="lift group flex items-start gap-3 rounded-lg border border-hairline bg-surface px-5 py-4">
                <svg
                  className="mt-0.5 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-[15px] leading-snug text-ink/85">{cert}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
