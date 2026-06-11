import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import {
  FUTURA_FEATURES,
  PROJECT,
  UNIT_TYPES,
  VIP_INCENTIVES,
} from "@/lib/constants";
import { getTopFaqs } from "@/lib/faq-data";
import { breadcrumbSchema, faqPageSchema, residenceSchema } from "@/lib/schema";

const WHY_ITEMS = [
  {
    title: "Freehold Ownership",
    description:
      "Own your home and the land it sits on with no condo maintenance fees. Cornerstone Phase 1 offers true freehold townhome ownership in Northwest Brampton.",
    icon: "🏠",
  },
  {
    title: "Smart Home Technology",
    description:
      "Every home includes Primont's Futura package — smart thermostat, camera doorbell, motion lights, USB-C outlets, and EV-ready garage as standard.",
    icon: "📱",
  },
  {
    title: "Master-Planned Community",
    description:
      "A multi-district community designed to house 18,000+ people with integrated parkland, trails, courtyards, and gathering spaces steps from your door.",
    icon: "🌳",
  },
  {
    title: "Transit-Connected",
    description:
      "Mount Pleasant GO Station is a 5-minute drive. Access Züm BRT, Brampton Transit, and quick highway connections to 407, 410, and 401.",
    icon: "🚆",
  },
  {
    title: "Trusted 50-Year Builder",
    description:
      "Primont Homes has built 5,000+ homes across the GTA over 50+ years. Family-owned with a philosophy of building every home as if it's their own.",
    icon: "⭐",
  },
  {
    title: "Investment Growth Corridor",
    description:
      "Northwest Brampton is a designated growth corridor since 2006. Brampton's population is projected to reach 1 million by 2051 with 113,000 new homes by 2031.",
    icon: "📈",
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

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center bg-forest-900 text-cream-50">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Cornerstone Towns Brampton new freehold townhomes by Primont Homes in Northwest Brampton"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="container-site relative z-10 py-20">
          <span className="mb-4 inline-block rounded-full bg-gold-500 px-4 py-1 text-sm font-semibold text-forest-900">
            Launching {PROJECT.launch}
          </span>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight md:text-6xl">
            Cornerstone Towns Brampton — New Freehold Townhomes by Primont Homes
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-cream-200">
            A New Standard for Townhomes in Northwest Brampton
          </p>
          <p className="mt-2 text-2xl font-semibold text-gold-400">
            {PROJECT.pricing}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="btn-primary">
              Register for VIP Access
            </Link>
            <Link href="/floor-plans" className="btn-secondary">
              View Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-b border-cream-200 bg-cream-100 py-6" aria-label="Quick facts">
        <div className="container-site">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm font-semibold text-forest-900 md:text-base">
            <li>{PROJECT.phase1Units} Townhomes</li>
            <li className="hidden text-gold-500 md:inline" aria-hidden="true">|</li>
            <li>{PROJECT.pricing}</li>
            <li className="hidden text-gold-500 md:inline" aria-hidden="true">|</li>
            <li>{PROJECT.developer}</li>
            <li className="hidden text-gold-500 md:inline" aria-hidden="true">|</li>
            <li>{PROJECT.launch}</li>
            <li className="hidden text-gold-500 md:inline" aria-hidden="true">|</li>
            <li>Northwest Brampton</li>
          </ul>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-3xl font-bold text-forest-900 md:text-4xl">
            What Is Cornerstone Towns Brampton?
          </h2>
          <div className="prose-site max-w-4xl">
            <p>
              Cornerstone Towns is a master-planned community of {PROJECT.phase1Units} freehold
              townhomes in Northwest Brampton by {PROJECT.developer}, located at Mississauga Road
              and Sandalwood Parkway West. This designated urban growth area has been planned for
              development since 2006 and represents one of the largest new community builds in
              the city.
            </p>
            <p>
              The community is designed as a multi-district development — distinct yet connected
              residential districts that will eventually house over {PROJECT.communityScale}. Phase 1
              focuses on freehold townhomes in both Back-to-Back and Traditional designs, offering
              buyers a range of layouts from 1 Bedroom + Den to 3 Bedroom configurations.
            </p>
            <p>
              Every home at Cornerstone includes Primont&apos;s proprietary Futura smart home
              technology package as standard — not as an upgrade. This includes a smart thermostat,
              camera doorbell, motion-activated front door light, USB and USB-C charging outlets,
              and an EV charging-ready garage. Interior finishes include laminate flooring, stone
              kitchen countertops, stainless steel appliances, and stacked washer/dryer.
            </p>
            <p>
              {PROJECT.developer} brings over 50 years of family-owned building experience to
              Cornerstone, with more than 5,000 homes built across the Greater Toronto Area.
              Led by President Joe Montesano and VP Lore Attardo, Primont&apos;s philosophy is
              &ldquo;building every home as if it&apos;s our own, treating every customer like
              family.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Why Cornerstone */}
      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-forest-900 md:text-4xl">
            Why Choose Cornerstone Towns?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <article key={item.title} className="card">
                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location Snapshot */}
      <section className="section-padding">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-3xl font-bold text-forest-900">
            Where Is Cornerstone Located?
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <MapEmbed />
            <div>
              <p className="mb-6 text-forest-800 leading-relaxed">
                Cornerstone Towns sits at Mississauga Road and Sandalwood Parkway West in
                Northwest Brampton — a key growth corridor with excellent connectivity across
                the Greater Toronto Area.
              </p>
              <ul className="space-y-3">
                {[
                  ["Mount Pleasant GO Station", "~5 min drive"],
                  ["Highway 407", "Quick access via Mississauga Road"],
                  ["Toronto Pearson Airport", "~20 min drive"],
                  ["Downtown Toronto", "~35 min by car / ~50 min via GO Transit"],
                ].map(([place, time]) => (
                  <li key={place} className="flex justify-between border-b border-cream-200 pb-2 text-sm">
                    <span className="font-medium text-forest-900">{place}</span>
                    <span className="text-forest-700">{time}</span>
                  </li>
                ))}
              </ul>
              <Link href="/location" className="btn-secondary mt-6 inline-flex">
                Full Location Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Preview */}
      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-3xl font-bold text-forest-900">
            Floor Plans &amp; Unit Types
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UNIT_TYPES.map((unit) => (
              <article key={unit.slug} className="card">
                <h3 className="font-heading text-xl font-semibold text-forest-900">
                  {unit.name}
                </h3>
                <p className="mt-1 text-sm text-gold-500">{unit.priceRange}</p>
                <p className="mt-2 text-sm text-forest-800">{unit.features}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/floor-plans" className="btn-primary">
              View Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="section-padding bg-forest-900 text-cream-50">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center font-heading text-3xl font-bold">
              Get VIP Access to Cornerstone Towns
            </h2>
            <p className="mb-8 text-center text-cream-200">
              Be the first to receive floor plans, pricing, and lot selection
            </p>
            <div className="rounded-lg bg-white p-6 text-forest-900">
              <LeadForm page="homepage" />
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {VIP_INCENTIVES.slice(0, 4).map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-cream-200">
                  <span className="text-gold-400" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Builder */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold text-forest-900">
                About Primont Homes
              </h2>
              <p className="mb-4 text-forest-800 leading-relaxed">
                Family-owned since 1975, Primont Homes has built over 5,000 homes across the
                Greater Toronto Area. Their commitment to quality over volume means features
                like Futura smart home technology come standard — not as costly upgrades.
              </p>
              <p className="mb-6 text-forest-800 leading-relaxed">
                Futura includes: {FUTURA_FEATURES.map((f) => f.name.toLowerCase()).join(", ")}.
              </p>
              <Link href="/builder" className="btn-secondary">
                Learn About the Builder
              </Link>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg bg-cream-200">
              <span className="font-heading text-2xl text-forest-800">
                Primont Homes Logo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-cream-100">
        <div className="container-site">
          <h2 className="mb-8 font-heading text-3xl font-bold text-forest-900">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={topFaqs} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="btn-primary">
              View All 50+ FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
