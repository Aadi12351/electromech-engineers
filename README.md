# Electro Mech Engineers — Premium React Website

A premium, responsive React/Vite corporate website for **Electro Mech Engineers**, inspired by the editorial, content-rich feel and navigation hierarchy of Tata's corporate site without copying Tata's branding, assets, or proprietary UI.

## Stack

- React + Vite
- React Bootstrap + Bootstrap 5
- Framer Motion animations
- Lucide React icons
- React Router
- React Helmet Async for page-level SEO metadata
- Responsive CSS with premium dark/navy + electric-blue visual system

## Pages

- `/` — animated corporate landing page
- `/about` — company story, strengths and pan-India presence
- `/services` — searchable service catalogue
- `/services/:slug` — dynamic service detail pages
- `/equipment` — searchable equipment catalogue
- `/clients` — client network + reviews
- `/contact` — enquiry form, contact details and Google Maps iframe

## SEO / technical structure

- Semantic HTML sections
- Page-specific `<title>` and description metadata
- Open Graph metadata
- Organization JSON-LD
- `robots.txt`
- `sitemap.xml`
- Web manifest
- Responsive/mobile navigation
- Deep links through React Router
- Accessible form labels and image alt text
- Lazy-loaded map iframe

## Content source

The supplied Electro Mech Engineers brochure was used as the content source for company positioning, services, clients, equipment, reviews, pan-India footprint, contact details and visual assets. Replace any brochure-provided testimonials or client claims with verified/current material before publishing if needed.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The output in `dist/` can be deployed to Vercel, Netlify, Cloudflare Pages, AWS S3/CloudFront, or another static hosting platform.

For production, replace the canonical URL, Open Graph URL, map embed query, and any placeholder/illustrative copy with the company's verified domain and data.
