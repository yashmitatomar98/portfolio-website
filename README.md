# Yashmita Tomar — Portfolio

A simple, elegant, light portfolio for **Yashmita Tomar**, Business / Data Analyst.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. No CMS, no
database — all content lives in typed files under `src/data/`.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Design system

- **Canvas:** ivory `#FCFBF8` · **ink:** `#22252E` · **accent:** refined purple `#7A4F9E`
- **Fonts:** Poppins (headings) + Raleway (body), loaded via `next/font/google`
- Tokens live in `src/app/globals.css` under `@theme` — change colors/fonts there.
- Motion is a single reusable `<Reveal>` (IntersectionObserver fade + rise) that
  respects `prefers-reduced-motion`.

## Editing content

All content is plain data — no React needed to update it:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, tagline, value prop, location, email, LinkedIn, About paragraphs, asset paths |
| `src/data/experience.ts` | Work history (timeline, newest first) |
| `src/data/caseStudies.ts` | Case studies (problem / approach / impact + stat numbers) |
| `src/data/skills.ts` | Grouped skill chips |
| `src/data/credentials.ts` | Certifications, education, publications |
| `src/lib/site.ts` | Public site URL + nav links |

## Assets to drop into `/public`

1. **`yashmita.jpg`** — headshot. Until it's added, the hero shows a tasteful
   "YT" monogram automatically (see `src/components/Avatar.tsx`).
2. **`Yashmita_Tomar_CV.pdf`** — résumé. A placeholder PDF is committed so the
   "Résumé" button works; replace it with the real CV (keep the same filename,
   or update `profile.resumeUrl`).

The social-share / OG image is **generated automatically** by
`src/app/opengraph-image.tsx` — no image file needed.

## Privacy

Per the brief, the phone number and home address from the CV are **intentionally
not published**. Only city, email, and LinkedIn appear publicly.

## SEO

- Title/description, Open Graph + Twitter cards, JSON-LD `Person` schema
- `src/app/sitemap.ts` and `src/app/robots.ts`
- Set the production URL via `NEXT_PUBLIC_SITE_URL` (falls back to
  `https://yashmitatomar.com` in `src/lib/site.ts`)

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add an env var **`NEXT_PUBLIC_SITE_URL`** = your final domain (e.g.
   `https://yashmitatomar.com`) so OG tags, sitemap, and robots use it.
4. Set the custom domain and deploy.

## Still to confirm with Yashmita

- 2–3 quantified bullets for the current **HORIBA** role (see TODO in
  `src/data/experience.ts`).
- Company name: **"Hive"** vs **"Chatous Technologies"**.
- OK to feature the 21% / 17% / 11% case-study numbers publicly.
