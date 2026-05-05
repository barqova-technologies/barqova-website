# Barqova Technologies — Marketing Website

Marketing site for **Barqova Technologies**, a web and mobile app development
company. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and
GSAP. Deploys to Netlify.

Pages: home, services, portfolio, about, contact, plus the standard
`privacy` / `terms` / `sitemap.xml` / `robots.txt` / `opengraph-image`.

## Tech stack

- Next.js 16 with Turbopack, React 19, TypeScript (strict)
- Tailwind CSS v4 with custom `@theme` tokens and a fluid container
- GSAP 3 + ScrollTrigger for scroll-driven animations (lazy-loaded)
- `@next/third-parties` for Google Analytics
- Nodemailer over SMTP for the contact form (runs as a Netlify Function via
  `@netlify/plugin-nextjs`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | `465` for SSL, `587` for STARTTLS |
| `SMTP_SECURE` | `true` for port 465, `false` for 587 |
| `SMTP_USER` | SMTP username (usually full email address) |
| `SMTP_PASS` | SMTP password / app password |
| `CONTACT_TO_EMAIL` | Where contact-form submissions are delivered |
| `CONTACT_FROM_EMAIL` | Optional. `"Name <addr@domain>"`. Defaults to `SMTP_USER`. |

For Gmail you'll need an
[App Password](https://myaccount.google.com/apppasswords) — regular passwords
are blocked over SMTP.

## Project layout

```
src/
  app/                Next.js App Router routes + layout
    api/contact/      POST handler for the contact form (SMTP)
  components/
    home/             Hero, Marquee, Stats, Process, ServicesPreview,
                      PortfolioPreview, ContactCTA
    layout/           Navbar, Footer, WhatsAppFloat
    contact/          ContactForm
    portfolio/        PortfolioGrid
    services/         HowWeBuild, ServiceCTA
    about/            ValuesSection, TeamSection
    seo/              JSON-LD (Organization, LocalBusiness, WebSite)
    theme/            ThemeScript (no-flash dark/light)
    ui/               Button, Tag, SectionHeading
  lib/
    gsap.ts           useScrollAnimation + magnetize / tilt3d / splitChars
    metadata.ts       siteConfig + buildMetadata helper
public/               Static assets (logos, images, OG fallbacks)
```

## Deployment (Netlify)

1. Push the repo to GitHub and import it in Netlify.
2. Build settings come from `netlify.toml` (already in the repo) — Netlify
   detects the Next.js plugin automatically.
3. In **Site → Settings → Environment variables**, add the SMTP and contact
   email vars listed above.
4. Set the Google Analytics ID in `src/app/layout.tsx` if you ever rotate it
   (currently `G-D47VZMZV5P`).

The `/api/contact` route is bundled as a Netlify Function on deploy, so no
separate `netlify/functions/` file is needed.
