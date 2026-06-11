# Cornerstone Towns Brampton Microsite

SEO/AEO/GEO optimized microsite for **cornerstonetownsbrampton.ca** — Cornerstone Towns by Primont Homes in Northwest Brampton.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Supabase (lead capture)
- n8n webhook (automation)

## Getting Started

```bash
npm install
cp .env.local.example .env.local
# Add your Supabase, n8n, and Google Maps keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | n8n webhook for lead automation |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps embed API key |
| `NEXT_PUBLIC_SITE_URL` | Production URL |

## Database Setup

Run the migration in `supabase/migrations/001_cornerstone_leads.sql` in your Supabase SQL editor.

## Deployment

Deploy to Vercel and set environment variables. Point `cornerstonetownsbrampton.ca` to your Vercel deployment.

```bash
npm run build
```

## Pages

- `/` — Homepage
- `/floor-plans` — Floor Plans & Pricing
- `/location` — Neighbourhood Guide
- `/builder` — About Primont Homes
- `/amenities` — Community Features
- `/investment` — Investment Analysis
- `/compare` — Project Comparison
- `/gallery` — Renderings Gallery
- `/faq` — 57 FAQs with schema markup
- `/blog` — Blog index (5 seed posts)
- `/register` — VIP Registration
- `/contact` — Contact Page
- `/privacy` — Privacy Policy
