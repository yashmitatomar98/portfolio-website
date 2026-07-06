"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { parseStat } from "@/lib/stat";

type StatChartProps = {
  value: string;
  label: string;
  /** Largest percentage magnitude in the group — used to scale the bar. */
  max: number;
};

export default function StatChart({ value, label, max }: StatChartProps) {
  const parsed = parseStat(value);
  const showBar = !!parsed?.isPercent && max > 0;
  const targetWidth = showBar
    ? Math.max(8, Math.min(100, (Math.abs(parsed!.target) / max) * 100))
    : 0;

  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !showBar) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setWidth(targetWidth);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // next frame so the transition runs from 0
            requestAnimationFrame(() => setWidth(targetWidth));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [showBar, targetWidth]);

  return (
    <div ref={ref}>
      <CountUp
        value={value}
        className="block bg-gradient-to-br from-accent to-accent-2 bg-clip-text font-heading text-3xl font-semibold text-transparent"
      />
      <div className="mt-1.5 text-sm text-muted">{label}</div>
      {showBar && (
        <div className="mt-2.5 h-1.5 w-full max-w-[140px] overflow-hidden rounded-full bg-hairline">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2 transition-[width] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${width}%` }}
          />
        </div>
      )}
    </div>
  );
}
