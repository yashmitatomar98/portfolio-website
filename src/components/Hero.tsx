import Reveal from "./Reveal";
import Avatar from "./Avatar";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-28 lg:pb-28"
    >
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-2" />
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="text-gradient text-[clamp(2.5rem,6vw,4rem)] font-bold leading-[1.08]">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-ink/90">
              {profile.valueProp}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-3 text-base text-muted">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a href="#contact" className="btn btn-primary w-full px-6 py-3 sm:w-auto">
                Get in touch
              </a>
              <a href="#work" className="btn btn-ghost group w-full px-6 py-3 sm:w-auto">
                View work
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-center text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-accent hover:underline sm:mt-0 sm:text-left"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-sm text-muted">Based in {profile.location}</p>
          </Reveal>
        </div>

        <Reveal
          delay={160}
          variant="scale"
          className="mx-auto w-full max-w-xs lg:max-w-none"
        >
          <div className="relative">
            {/* soft floating glow behind the portrait */}
            <div
              aria-hidden="true"
              className="animate-float-slow absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(122,79,158,0.22),transparent_70%)] blur-2xl"
            />
            {/* gradient-edge frame */}
            <div className="relative rounded-2xl bg-gradient-to-br from-accent/60 via-hairline to-accent-2/30 p-px shadow-[0_36px_70px_-34px_rgba(34,37,46,0.45)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[15px] bg-surface">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 rounded-[15px] ring-1 ring-inset ring-white/10"
                />
                <Avatar
                  src={profile.headshot}
                  alt={`Portrait of ${profile.name}`}
                  initials="YT"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
