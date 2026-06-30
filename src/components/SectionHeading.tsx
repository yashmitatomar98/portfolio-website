import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-2" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </Reveal>
  );
}
