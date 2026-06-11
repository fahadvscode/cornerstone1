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

**Live:** https://cornerstone-towns-brampton.vercel.app  
**GitHub:** https://github.com/fahadvscode/cornerstone1  
**Vercel:** Auto-deploys on push to `main`

### Environment Variables (set in Vercel Dashboard → Settings → Environment Variables)

| Variable | Exposure | Required |
|---|---|---|
| `SUPABASE_URL` | Server only | Yes (for forms) |
| `SUPABASE_ANON_KEY` | Server only | Yes (for forms) |
| `N8N_WEBHOOK_URL` | Server only | Yes (for automation) |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Public | Optional |
| `NEXT_PUBLIC_SITE_URL` | Public | Yes (`https://cornerstonetownsbrampton.ca`) |

### Custom Domain

In Vercel → Project Settings → Domains, add `cornerstonetownsbrampton.ca` and update DNS.

### Security

- Security headers (HSTS, CSP, X-Frame-Options) enabled in `next.config.ts`
- API route: rate limiting, honeypot, input sanitization, server-only secrets
- Supabase RLS: insert-only for anonymous users (run `002_rls_policies.sql`)
- Never commit `.env.local` — secrets live in Vercel only

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
