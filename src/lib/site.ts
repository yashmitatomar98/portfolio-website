// Public site URL — used for metadata, OG tags, sitemap and robots.
// Override at build time with NEXT_PUBLIC_SITE_URL (e.g. in Vercel).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://yashmitatomar.com";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];
