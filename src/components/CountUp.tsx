"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** e.g. "+21%", "−17%", "5", "45", or non-numeric like "End-to-end". */
  value: string;
  className?: string;
  durationMs?: number;
};

// Split "+21%" → { prefix: "+", number: 21, decimals: 0, suffix: "%" }.
function parse(value: string) {
  const match = value.match(/(-?−?\+?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), decimals, suffix };
}

export default function CountUp({
  value,
  className = "",
  durationMs = 1400,
}: CountUpProps) {
  const parsed = parse(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    const { prefix, target, decimals, suffix } = parsed;

    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(`${prefix}${current}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {display}
    </span>
  );
}
