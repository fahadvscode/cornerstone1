# CURSOR BUILD PROMPT — Cornerstone Towns Brampton (Site #2 — Exact Match Domain)

Clone + upgrade from production Site #1. Paste this entire file into a **new empty Cursor project**.

---

## FILL THESE IN FIRST

| Variable | Value |
|----------|-------|
| **NEW_DOMAIN** | `https://[YOUR-EXACT-MATCH-DOMAIN].ca` |
| **NEW_SITE_NAME** | `[e.g. Cornerstone Towns Brampton]` |
| **SOURCE_PROJECT_PATH** | `/Users/fahadsold/Documents/Jaydeep Data/Landing pages/cornerstone brampton/cornerstone site 1` |
| **GITHUB_REPO** | Create a **new** repo (reference: `fahadvscode/cornerstone1`) |
| **VERCEL_PROJECT** | Create a **new** project (reference: `cornerstone-towns-brampton`) |
| **SUPABASE_TABLE** | `cornerstone_leads` (same table — differentiate by `source` field) |
| **LEAD_SOURCE_VALUE** | `[YOUR-EXACT-MATCH-DOMAIN].ca` (no `https://`) |

---

## MISSION

Build a **complete duplicate** of the production Cornerstone Towns Brampton microsite with:

1. **100% feature parity** — same pages, forms, Supabase integration, images, logos, content structure
2. **Completely new visual design** — must NOT look like Site #1 (different fonts, layout, color system, components)
3. **Superior SEO + AEO + GEO** — optimized for an **exact match domain** ranking for Cornerstone Towns / Brampton townhomes keywords
4. **Production-ready** — Next.js 15 SSG, security headers, rate-limited API, deployable to Vercel in one session

**CRITICAL:** This is an **independent informational site** about Cornerstone Towns by Primont Homes. NO agent/brokerage branding. NO pricing on site. Builder disclaimer required.

---

## STACK (MATCH SITE #1 EXACTLY)

- **Next.js 15** (App Router, Turbopack dev)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4** (`@tailwindcss/postcss`, `@theme` in `globals.css`)
- **Supabase** (`@supabase/supabase-js`) — server-side service role key
- **MDX blog** via `gray-matter` + `react-markdown` + `remark-gfm`
- **Deploy:** Vercel
- **No** agent contact info, no phone numbers in UI

### package.json dependencies

```json
{
  "name": "[new-project-name]",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.49.1",
    "gray-matter": "^4.0.3",
    "next": "^15.3.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.5",
    "@tailwindcss/postcss": "^4.1.8",
    "@types/node": "^22.15.21",
    "@types/react": "^19.1.6",
    "@types/react-dom": "^19.1.5",
    "eslint": "^9.28.0",
    "eslint-config-next": "^15.3.3",
    "tailwindcss": "^4.1.8",
    "typescript": "^5.8.3"
  }
}
```

---

## COPY THESE ASSETS FROM SITE #1 (byte-for-byte)

Copy from `SOURCE_PROJECT_PATH`:

### Images (`public/`)

| File | Purpose |
|------|---------|
| `public/images/hero.jpg` | Homepage hero background |
| `public/images/logo.png` | Dark project logo — **white background only** |
| `public/images/exterior.png` | Townhome rendering / gallery / floor plan teasers |
| `public/og-image.jpg` | Open Graph social share image |
| `app/icon.png` | 192×192 favicon (regenerate from logo if needed) |
| `app/apple-icon.png` | 180×180 Apple touch icon |

### Optional additional images (auto-mapped by `lib/images.ts`)

Drop into `public/images/` with these names:

- Floor plans: `1br-den`, `2br`, `2br-den`, `3br`, `back-to-back`, `traditional`
- Gallery: `interior`, `kitchen`, `community`, `back-to-back-exterior`, `traditional-exterior`
- Site plan: `site-plan`

---

## COMPLETE FILE TREE TO REPLICATE

```
/
├── app/
│   ├── layout.tsx              # Root layout: fonts, Navbar, Footer, DisclaimerBar, JsonLd
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind 4 theme + component classes
│   ├── icon.png                # Favicon
│   ├── apple-icon.png          # Apple icon
│   ├── robots.ts               # Allows all crawlers + AI bots
│   ├── sitemap.ts              # Dynamic sitemap (17 URLs)
│   ├── api/leads/route.ts      # POST lead capture → Supabase
│   ├── amenities/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── builder/page.tsx
│   ├── compare/page.tsx
│   ├── faq/page.tsx
│   ├── floor-plans/page.tsx
│   ├── gallery/page.tsx
│   ├── investment/page.tsx
│   ├── location/page.tsx
│   ├── privacy/page.tsx
│   └── register/page.tsx
├── components/
│   ├── forms/LeadForm.tsx      # simple | full | hero variants
│   ├── layout/Navbar.tsx
│   ├── layout/Footer.tsx
│   ├── layout/DisclaimerBar.tsx
│   ├── sections/HeroSection.tsx
│   ├── sections/FloorPlanGrid.tsx
│   ├── sections/FAQAccordion.tsx
│   ├── seo/JsonLd.tsx
│   └── ui/
│       ├── BlurredFloorPlanCard.tsx
│       ├── MapEmbed.tsx
│       ├── PageHeader.tsx
│       └── ProjectLogo.tsx
├── content/blog/               # 5 MDX posts (copy all)
├── lib/
│   ├── constants.ts            # ALL project data — update SITE_URL + source
│   ├── metadata.ts             # createPageMetadata() helper
│   ├── schema.ts               # JSON-LD generators
│   ├── faq-data.ts             # 57 FAQ items in 6 categories
│   ├── blog.ts                 # MDX loader
│   ├── images.ts               # Build-time image index from public/images/
│   ├── supabase.ts             # getSupabaseClient() — service role
│   ├── validate.ts             # Input sanitization
│   └── utils.ts                # getCanonicalUrl()
├── public/
│   ├── images/                 # hero, logo, exterior (+ optional)
│   ├── og-image.jpg
│   ├── llms.txt                # AI crawler summary
│   └── .well-known/llms.txt    # Mirror of llms.txt
├── supabase/migrations/        # Reference SQL (table already exists)
├── next.config.ts              # Security headers, CSP, /contact → /register redirect
├── vercel.json                 # { "name": "...", "framework": "nextjs" }
├── .env.local.example
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## ALL ROUTES (17 pages + API)

| Route | Purpose |
|-------|---------|
| `/` | Homepage with hero form, floor plan teasers, FAQ, VIP section |
| `/floor-plans` | Blurred floor plan grid + lead form |
| `/location` | Northwest Brampton guide + map |
| `/builder` | Primont Homes profile |
| `/amenities` | Community amenities |
| `/investment` | Market analysis (no pricing) |
| `/compare` | vs competitors table (no pricing columns) |
| `/gallery` | Renderings + site plan teaser |
| `/faq` | 57 questions, accordion, FAQPage schema |
| `/blog` | Blog index |
| `/blog/[slug]` | 5 MDX articles |
| `/register` | Full VIP registration form |
| `/privacy` | Privacy policy |
| `/contact` | 301 redirect → `/register` |
| `/api/leads` | POST JSON lead capture |
| `/sitemap.xml` | Auto-generated |
| `/robots.txt` | Auto-generated |

### Blog slugs (copy MDX content from Site #1)

1. `cornerstone-towns-everything-you-need-to-know`
2. `northwest-brampton-growth-corridor`
3. `primont-futura-smart-home-technology`
4. `brampton-townhomes-under-700k`
5. `back-to-back-vs-traditional-townhomes`

---

## PROJECT DATA (`lib/constants.ts` — KEEP IDENTICAL except URLs)

```typescript
export const SITE_URL = "NEW_DOMAIN";
export const SITE_NAME = "NEW_SITE_NAME";

export const PROJECT = {
  name: "Cornerstone",
  marketingName: "Cornerstone Towns",
  developer: "Primont Homes",
  developerUrl: "https://primont.com",
  developerLegacy: "Family-owned, 50+ years, 5,000+ homes built in the GTA",
  location: "Mississauga Road & Sandalwood Parkway West, Northwest Brampton, ON",
  nearestAddress: "Near 10344 Mississauga Road, Brampton, ON L7A 4H9",
  coordinates: { lat: 43.7315, lng: -79.7624 },
  projectType: "Master-Planned Community",
  phase1Units: 129,
  launch: "Spring 2026",
  occupancy: "TBD",
  status: "Pre-Construction — Coming Soon",
  communityScale: "18,000+ people at full buildout",
  futurePhases: "Condominiums, Detached Homes",
  // NO pricing fields
};

export const UNIT_TYPES = [
  { slug: "1br-den", name: "1 Bedroom + Den", bedrooms: "1 + Den", sizeRange: "700 – 850 sq ft", ... },
  { slug: "2br", name: "2 Bedroom", bedrooms: "2", sizeRange: "900 – 1,050 sq ft", ... },
  { slug: "2br-den", name: "2 Bedroom + Den", bedrooms: "2 + Den", sizeRange: "1,000 – 1,150 sq ft", ... },
  { slug: "3br", name: "3 Bedroom", bedrooms: "3", sizeRange: "1,150 – 1,350 sq ft", ... },
  { slug: "back-to-back", name: "Back-to-Back Towns", bedrooms: "1–3", sizeRange: "700 – 1,200 sq ft", ... },
  { slug: "traditional", name: "Traditional Towns", bedrooms: "2–3", sizeRange: "1,000 – 1,350 sq ft", ... },
];

export const VIP_INCENTIVES = [ /* 8 items — copy from Site #1 */ ];
export const SCHOOLS = [ /* 8 schools — copy from Site #1 */ ];
export const COMPETITORS = [ /* 5 projects — copy from Site #1, no pricing columns */ ];
export const FUTURA_FEATURES = [ /* 5 smart home items */ ];
export const NAV_LINKS = [ /* 9 nav links */ ];
export const KEYWORDS = "Cornerstone Towns, Cornerstone Brampton, Primont Homes, pre-construction townhomes Brampton, new townhomes Brampton, Northwest Brampton, freehold townhomes Brampton";

export const DISCLAIMER =
  "Disclaimer: This website is an independent informational resource about Cornerstone Towns by Primont Homes. We do not represent the builder directly and are not affiliated with Primont Homes. All information is believed to be accurate but is subject to change without notice. For official pricing, floor plans, and availability, contact Primont Homes directly. E.&O.E.";

export const INVESTMENT_DISCLAIMER =
  "This analysis is for informational purposes only and does not constitute financial advice.";
```

---

## LEAD FORM (`components/forms/LeadForm.tsx`)

### Variants

| Variant | Used On | Fields |
|---------|---------|--------|
| `hero` | Homepage hero card | first_name, last_name, email, phone, **is_broker** (yes/no) |
| `simple` | Floor plans page | above + optional message |
| `full` | Register page | + is_realtor, buyer_type, unit checkboxes, message, privacy consent |

### API payload → `POST /api/leads`

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string",
  "is_broker": true,
  "is_realtor": false,
  "buyer_type": "end-user",
  "unit_interest": ["1 Bedroom + Den"],
  "interest": "townhomes",
  "message": "optional",
  "page": "homepage-hero",
  "website": ""
}
```

- **Honeypot:** hidden `website` field — if filled, silently return `{ success: true }`
- **Rate limit:** 3 submissions per IP per hour

### Supabase insert mapping (`app/api/leads/route.ts`)

```typescript
{
  first_name,
  last_name,
  email,
  phone,
  is_realtor: boolean,
  is_broker: boolean,
  interest: string,           // default "townhomes" or joined unit types
  buyer_type: string,
  source: LEAD_SOURCE_VALUE,  // NEW domain — distinguishes from site #1
  last_note: message + "\n\nSubmitted from: {page}"
  // status, lead_temperature, call_history, call_count use DB defaults
}
```

### Environment variables (server-only — NEVER expose to browser)

```env
SUPABASE_URL=https://cfzuypbljirmibmxpabi.supabase.co
SUPABASE_SERVICE_ROLE_KEY=[same as Site #1]
N8N_WEBHOOK_URL=[optional]
NEXT_PUBLIC_GOOGLE_MAPS_KEY=[optional]
NEXT_PUBLIC_SITE_URL=NEW_DOMAIN
```

### Production Supabase table (already exists)

```sql
CREATE TABLE public.cornerstone_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  is_realtor BOOLEAN DEFAULT false,
  is_broker BOOLEAN DEFAULT false,
  interest TEXT DEFAULT 'townhomes',
  buyer_type TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'new',
  lead_temperature TEXT DEFAULT 'warm',
  call_history JSONB DEFAULT '[]'::jsonb,
  call_count INTEGER DEFAULT 0,
  last_note TEXT
);
-- NO unique constraint on email (duplicates allowed)
```

### Migrations reference (`supabase/migrations/`)

- `001_cornerstone_leads.sql` — table schema
- `002_rls_policies.sql` — RLS (anon insert only)
- `003_add_is_broker.sql` — `is_broker` column
- `004_allow_duplicate_emails.sql` — drop unique email constraint

---

## SEO / AEO / GEO — SITE #2 MUST EXCEED SITE #1

### Site #1 baseline (match + exceed)

- Unique `<title>` + meta description per page via `createPageMetadata()`
- Canonical URLs on every page
- Open Graph + Twitter Cards
- JSON-LD: `WebSite`, `Residence`, `FAQPage` (57 items), `BreadcrumbList`, `Article`
- `/sitemap.xml` + `/robots.txt` (allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, CCBot)
- `/llms.txt` + `/.well-known/llms.txt`
- Geo meta tags (`geo.region: CA-ON`, Brampton coordinates)
- Full HTML in source (SSG — no client-only rendering for key copy)

### Site #2 upgrades (implement all)

#### 1. Exact match domain optimization

- Primary keyword in H1: **"Cornerstone Towns Brampton"** + **"freehold townhomes"**
- Domain phrase in first 100 words of every major page (natural, not stuffed)
- Title tags lead with EMD: `Cornerstone Towns Brampton | [Page Topic] | Freehold Townhomes`

#### 2. Additional JSON-LD schemas

- `Organization` with logo URL
- `Place` + `GeoCoordinates` on `/location`
- `HowTo` on `/register` — "How to Register for VIP Access to Cornerstone Towns"
- `SpeakableSpecification` on homepage FAQ section
- `ItemList` for floor plan types on `/floor-plans`

#### 3. AEO (Answer Engine Optimization)

- Expand FAQ to **65+ questions** with direct first-sentence answers
- Add **Quick Answer** boxes at top of key pages (40–60 word direct answers)
- Definition-style H2s: "What is Cornerstone Towns Brampton?"

#### 4. GEO (Generative Engine Optimization)

- Richer `llms.txt` with structured facts and comparison data as plain text
- Entity-rich copy: Primont Homes, Northwest Brampton, Futura, Mount Pleasant GO
- Internal linking: every page links to 3+ related pages

#### 5. Technical SEO

- Semantic HTML: `<article>`, `<section>`, `<nav>`, proper heading hierarchy (one H1 per page)
- `loading="lazy"` on below-fold images; `priority` on hero only
- `metadataBase: new URL(SITE_URL)` in root layout
- Preconnect to Google Fonts

#### 6. Content

- Add **2 new blog posts** targeting long-tail keywords
- Remove any `$600s` / pricing references in blog MDX and `llms.txt`

---

## DESIGN — MUST BE COMPLETELY DIFFERENT FROM SITE #1

### Site #1 design (DO NOT COPY)

| Element | Site #1 |
|---------|---------|
| Colors | Forest green `#1a2e1f`, gold `#c9a84c`, white/cream |
| Fonts | Cormorant Garamond + Montserrat |
| Buttons | Rounded-full pills |
| Hero | Split layout, form card on right, dark green overlay |
| Cards | White, `rounded-2xl`, thin neutral borders |
| Logo | Dark logo on white backgrounds only |

### Site #2 design direction (pick one — must look distinct)

**Option A — Editorial Dark**

- Charcoal `#111` + warm white text + copper accent `#B87333`
- Fonts: Playfair Display + DM Sans
- Full-bleed hero, glassmorphism form panel

**Option B — Scandinavian Light**

- Off-white `#F7F5F2` + slate `#2C3E50` + sage green accent
- Fonts: Fraunces + Inter
- Asymmetric grid, thin borders, lots of whitespace

**Option C — Bold Modern**

- Deep navy `#0F172A` + electric teal accent
- Fonts: Syne + Plus Jakarta Sans
- Bento grid layout, sharp corners

### Design requirements (all options)

- Mobile-first; hero form above fold on mobile
- Blurred floor plan VIP teasers (same logic, new card design)
- Sticky nav with project logo on white header
- Footer disclaimer with accent-colored "Disclaimer:" label
- Disclaimer bar at top of every page
- WCAG AA contrast minimum
- Distinct button style (NOT rounded-full pills)
- Subtle hover micro-interactions

---

## SECURITY (`next.config.ts`)

Copy from Site #1:

- HSTS (`max-age=63072000; includeSubDomains; preload`)
- Content-Security-Policy (self + Supabase + Google Maps)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (disable camera, mic, geolocation)
- `poweredByHeader: false`
- Redirect `/contact` → `/register` (301)

---

## KEY COMPONENTS BEHAVIOR

### `HeroSection`

- Split layout: copy left, VIP form card right
- `LeadForm variant="hero" page="homepage-hero"`
- Hero image from `IMAGES.hero`
- Quick-fact pills; links to floor plans + gallery

### `BlurredFloorPlanCard`

- Blurred image, lock icon, "Register for VIP Access" CTA → `/register`
- Images from `getFloorPlanImage(slug)` via `lib/images.ts`

### `ProjectLogo`

- `public/images/logo.png` on white/light background only
- Used in: Navbar, Footer (white box on dark footer), PageHeader

### `DisclaimerBar` + `Footer`

```
Disclaimer: This website is an independent informational resource about Cornerstone Towns by Primont Homes. We do not represent the builder directly and are not affiliated with Primont Homes. All information is believed to be accurate but is subject to change without notice. For official pricing, floor plans, and availability, contact Primont Homes directly. E.&O.E.
```

---

## FAQ CATEGORIES (57 items in Site #1 — expand to 65+ in Site #2)

1. About the Project (12)
2. Pricing & Financials (no dollar amounts in answers)
3. Location & Lifestyle
4. The Builder
5. Registration & Process
6. Investment

Copy all FAQ content from `lib/faq-data.ts` in Site #1, then add 8+ new questions for Site #2.

---

## JSON-LD SCHEMAS (`lib/schema.ts`)

Implement these generator functions:

| Function | Used On |
|----------|---------|
| `websiteSchema()` | Root layout |
| `residenceSchema()` | Homepage |
| `breadcrumbSchema(page, path)` | Every inner page |
| `faqPageSchema(faqs)` | Homepage + /faq |
| `articleSchema(post)` | Blog posts |
| `organizationSchema()` | **NEW** — Site #2 |
| `placeSchema()` | **NEW** — /location |
| `howToRegisterSchema()` | **NEW** — /register |
| `floorPlanItemListSchema()` | **NEW** — /floor-plans |

---

## DEPLOYMENT CHECKLIST

- [ ] `npm run build` passes with 0 errors
- [ ] All 17+ sitemap URLs render static HTML
- [ ] Hero form submits to Supabase with `source` = new domain
- [ ] `is_broker` and `is_realtor` save correctly
- [ ] Favicon + OG image work
- [ ] Logo only on white/light backgrounds
- [ ] No pricing anywhere on site
- [ ] No agent/brokerage contact info
- [ ] Disclaimer on every page (bar + footer)
- [ ] `robots.txt` allows AI crawlers
- [ ] `llms.txt` updated with NEW_DOMAIN URLs
- [ ] Design visibly different from Site #1
- [ ] JSON-LD validates without errors
- [ ] Push to new GitHub repo
- [ ] Deploy new Vercel project
- [ ] Add env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Connect custom domain in Vercel
- [ ] GoDaddy DNS: A record `@` → `76.76.21.21`, CNAME `www` → Vercel DNS target
- [ ] Submit `https://NEW_DOMAIN/sitemap.xml` to Google Search Console

---

## EXECUTION ORDER

1. Scaffold Next.js 15 + Tailwind 4 in a **new folder**
2. Copy `lib/`, `components/`, `content/blog/`, `public/images/`, assets from `SOURCE_PROJECT_PATH`
3. Update `SITE_URL`, `SITE_NAME`, API `source` field, all URLs in `llms.txt` / sitemap / metadata
4. Apply **new design system** in `globals.css` + all components
5. Implement SEO upgrades (extra schemas, expanded FAQ, quick answer boxes)
6. Wire Supabase (same credentials as Site #1)
7. `npm run build` → fix errors → push to GitHub → deploy Vercel

---

## CURSOR AGENT INSTRUCTION

**Start now. Do not ask clarifying questions.**

Use the placeholder values above. If `NEW_DOMAIN` is not filled in, use `https://cornerstonetownsbrampton.ca` as content reference but remind the user to update before deploy.

Ship a production-ready site in one session.
