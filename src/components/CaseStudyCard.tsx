"use client";

import { useRef, type MouseEvent } from "react";
import StatChart from "./StatChart";
import { parseStat } from "@/lib/stat";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const ref = useRef<HTMLElement | null>(null);

  // Largest percentage magnitude in this card — scales every bar relative to it.
  const maxPct = Math.max(
    0,
    ...study.stats
      .map((s) => parseStat(s.value))
      .filter((p) => p?.isPercent)
      .map((p) => Math.abs(p!.target)),
  );

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className="surface-card lift group relative overflow-hidden rounded-3xl border border-hairline bg-surface p-6 sm:p-10"
    >
      {/* cursor-follow spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 70%)",
        }}
      />
      {/* corner sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(122,79,158,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative">
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

        <div className="mt-7 flex flex-wrap gap-x-8 gap-y-6 border-t border-hairline pt-6 sm:gap-x-12">
          {study.stats.map((stat) => (
            <StatChart
              key={stat.label}
              value={stat.value}
              label={stat.label}
              max={maxPct}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
