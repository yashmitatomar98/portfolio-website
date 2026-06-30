"use client";

import { useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials: string;
};

/**
 * Shows the headshot when present, and falls back to a tasteful initials
 * monogram if the image is missing — so the layout never looks broken before
 * the real photo is dropped into /public.
 */
export default function Avatar({ src, alt, initials }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        className="flex h-full w-full items-center justify-center bg-accent-soft font-heading text-5xl font-semibold text-accent"
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-[50%_12%]"
    />
  );
}
