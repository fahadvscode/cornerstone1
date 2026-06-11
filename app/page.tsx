import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FloorPlanGrid } from "@/components/sections/FloorPlanGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import {
  FUTURA_FEATURES,
  PROJECT,
  VIP_INCENTIVES,
} from "@/lib/constants";
import { getTopFaqs } from "@/lib/faq-data";
import { breadcrumbSchema, faqPageSchema, residenceSchema } from "@/lib/schema";

const WHY_ITEMS = [
  {
    title: "Freehold Ownership",
    description:
      "Own your home and the land it sits on. Cornerstone Phase 1 offers true freehold townhome ownership in Northwest Brampton.",
  },
  {
    title: "Smart Home Technology",
    description:
      "Every home includes Primont's Futura package — smart thermostat, camera doorbell, motion lights, USB-C outlets, and EV-ready garage.",
  },
  {
    title: "Master-Planned Community",
    description:
      "A multi-district community designed to house 18,000+ people with integrated parkland, trails, and gathering spaces.",
  },
  {
    title: "Transit-Connected",
    description:
      "Mount Pleasant GO Station is a 5-minute drive with quick highway access to 407, 410, and 401.",
  },
  {
    title: "Trusted Builder",
    description:
      "Primont Homes has built 5,000+ homes across the GTA over 50+ years with a family-owned commitment to quality.",
  },
  {
    title: "Growth Corridor",
    description:
      "Northwest Brampton is a designated growth corridor with major infrastructure investment and population growth through 2051.",
  },
];

export default function HomePage() {
  const topFaqs = getTopFaqs(5);

  return (
    <>
      <JsonLd
        data={[
          residenceSchema(),
          breadcrumbSchema("Home", "/"),
          faqPageSchema(topFaqs),
        ]}
      />

      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-forest-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Cornerstone Towns Brampton new freehold townhomes by Primont Homes"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/80 to-forest-900/40" />
        <div className="container-site relative z-10 py-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-400">
            Launching {PROJECT.launch}
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] md:text-6xl">
            New Freehold Townhomes in Northwest Brampton
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Cornerstone Towns by Primont Homes — {PROJECT.phase1Units} freehold
            townhomes with Futura smart home technology included as standard.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="btn-primary bg-white text-forest-900 hover:bg-white/90">
              Register for VIP Access
            </Link>
            <Link href="/floor-plans" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:text-white">
              View Floor Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200/80 py-5" aria-label="Quick facts">
        <div className="container-site">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-sm text-neutral-600">
            <li><span className="font-semibold text-forest-900">{PROJECT.phase1Units}</span> Townhomes</li>
            <li><span className="font-semibold text-forest-900">{PROJECT.developer}</span></li>
            <li><span className="font-semibold text-forest-900">{PROJECT.launch}</span> Launch</li>
            <li><span className="font-semibold text-forest-900">Northwest Brampton</span></li>
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-forest-900 md:text-4xl">
              What Is Cornerstone Towns?
            </h2>
            <p className="mt-6 text-neutral-600 leading-relaxed">
              Cornerstone Towns is a master-planned community of {PROJECT.phase1Units} freehold
              townhomes in Northwest Brampton by {PROJECT.developer}, located at Mississauga Road
              and Sandalwood Parkway West. Phase 1 features Back-to-Back and Traditional designs
              with Primont&apos;s Futura smart home technology included as standard.
            </p>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              At full buildout, the community is expected to house over {PROJECT.communityScale}
              across multiple connected districts with integrated parkland, trails, and gathering spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold text-forest-900">
            Why Cornerstone
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <article key={item.title} className="card">
                <h3 className="font-heading text-lg font-semibold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-forest-900">
                Location
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Mississauga Road &amp; Sandalwood Parkway West — a key growth corridor
                with excellent connectivity across the Greater Toronto Area.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  ["Mount Pleasant GO", "~5 min drive"],
                  ["Highway 407", "Quick access"],
                  ["Pearson Airport", "~20 min"],
                  ["Downtown Toronto", "~35 min car / ~50 min GO"],
                ].map(([place, time]) => (
                  <li key={place} className="flex justify-between border-b border-neutral-100 pb-2 text-sm">
                    <span className="text-forest-900">{place}</span>
                    <span className="text-neutral-500">{time}</span>
                  </li>
                ))}
              </ul>
              <Link href="/location" className="btn-secondary mt-8 inline-flex">
                Location Guide
              </Link>
            </div>
            <MapEmbed />
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-forest-900">
              Floor Plans
            </h2>
            <p className="mt-3 text-neutral-600">
              Register for VIP access to unlock full floor plans before the public launch.
            </p>
          </div>
          <FloorPlanGrid />
          <div className="mt-10 text-center">
            <Link href="/floor-plans" className="btn-primary">
              See All Floor Plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-900 text-white">
        <div className="container-site">
          <div className="mx-auto max-w-xl">
            <h2 className="text-center font-heading text-3xl font-semibold">
              Get VIP Access
            </h2>
            <p className="mt-3 text-center text-sm text-white/60">
              Be the first to receive floor plans and lot selection details
            </p>
            <div className="mt-8 rounded-2xl bg-white p-6 text-forest-900">
              <LeadForm page="homepage" />
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {VIP_INCENTIVES.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-white/70">
                  <span className="text-gold-400" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-forest-900">
                Primont Homes
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Family-owned since 1975 with 5,000+ homes built across the GTA.
                Futura smart home technology comes standard — not as an upgrade.
              </p>
              <p className="mt-4 text-sm text-neutral-500">
                {FUTURA_FEATURES.map((f) => f.name).join(" · ")}
              </p>
              <Link href="/builder" className="btn-secondary mt-8 inline-flex">
                About the Builder
              </Link>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-cream-100">
              <span className="font-heading text-xl text-neutral-400">Primont Homes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <h2 className="mb-8 text-center font-heading text-3xl font-semibold text-forest-900">
            FAQ
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={topFaqs} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-secondary">
              All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
