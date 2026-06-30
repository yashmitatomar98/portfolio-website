// YT monogram mark — purple gradient tile, matches the favicon/apple-icon.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="ytLogoGradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#7a4f9e" />
          <stop offset="1" stopColor="#b190c1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="24" fill="url(#ytLogoGradient)" />
      <text
        x="50"
        y="53"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-poppins), 'Segoe UI', Arial, sans-serif"
        fontSize="46"
        fontWeight="700"
        letterSpacing="-2"
        fill="#ffffff"
      >
        YT
      </text>
    </svg>
  );
}
