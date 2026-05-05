# Barqova Technologies — Marketing Website

Marketing site for **Barqova Technologies**, a web and mobile app development
company. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and GSAP

Pages: home, services, portfolio, about, contact, plus the standard
`privacy` / `terms` / `sitemap.xml` / `robots.txt` / `opengraph-image`.

## Tech stack

- Next.js 16 with Turbopack, React 19, TypeScript (strict)
- Tailwind CSS v4 with custom `@theme` tokens and a fluid container
- GSAP 3 + ScrollTrigger for scroll-driven animations (lazy-loaded)
- `@next/third-parties` for Google Analytics

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


