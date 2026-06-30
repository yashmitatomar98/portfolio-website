import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24 lg:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            Let&apos;s turn your data into decisions.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Open to business and data analyst roles and collaborations. The
            fastest way to reach me is by email or LinkedIn.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary w-full break-all px-6 py-3 text-center sm:w-auto sm:break-normal"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full px-6 py-3 sm:w-auto"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
