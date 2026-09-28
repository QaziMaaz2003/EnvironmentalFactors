# EnvironmentalFactors

Homepage for **Environmental Filters by KorganoTech**, an automated carbon-capture and methane-recovery system for landfill gas, developed with Lawrence Livermore National Laboratory (LLNL).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- [Motion](https://motion.dev) for animation, [Lucide](https://lucide.dev) icons
- Photography from [Unsplash](https://unsplash.com), served through `next/image`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/lib/site-data.ts` | All page copy, stats, image URLs, contact details |
| `src/app/globals.css` | Color palette, fonts, keyframes |
| `src/components/site/` | One component per homepage section |
| `src/components/ui/` | Shared pieces: scroll reveals, count-up numbers, section headings, logo, molecules |

Homepage sections, in order: hero image slider (auto-advances every 2 seconds), highlights ticker, overview, the problem, our solution (animated process schematic), demonstrated functionality, LLNL technology (absorption chart), Orange County case study, the KorganoTech filter family, partner, and contact.

## Before going live

- **Email and phone** are still the placeholders from the source content (`site.email` / `site.phone` in `site-data.ts`).
- **The contact form is frontend only.** `onSubmit` in `src/components/site/contact.tsx` shows a thank-you state but sends nothing yet; connect it to an email service or API route.
- Performance figures come from laboratory studies and screening models, as stated in the page footnotes.
