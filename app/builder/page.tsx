import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { FUTURA_FEATURES, PROJECT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "About Primont Homes | 50+ Years Building GTA Communities",
  description:
    "Learn about Primont Homes, the family-owned builder behind Cornerstone Towns Brampton. 50+ years of experience, 5,000+ homes built, and the Futura smart home technology package.",
  path: "/builder",
});

const COMMUNITIES = [
  { name: "Primont Place", location: "Brampton", type: "Townhomes & Condos" },
  { name: "M3 Condos", location: "Mississauga", type: "Condominiums" },
  { name: "Appellation", location: "Welland", type: "Single-Family Homes" },
  { name: "Summit 2", location: "GTA", type: "Townhomes" },
];

export default function BuilderPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Builder", "/builder")} />
      <PageHeader
        title="Primont Homes — The Builder Behind Cornerstone Towns"
        subtitle="Family-owned since 1975. 5,000+ homes built across the Greater Toronto Area."
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <article className="prose-site">
            <h2>Who Is Primont Homes?</h2>
            <p>
              Primont Homes is the family-owned builder behind {PROJECT.marketingName} in
              Brampton. Founded in 1975, the company has over 50 years of experience and
              has built more than 5,000 homes across the Greater Toronto Area. With Italian
              heritage and a multi-generational commitment to quality, Primont is led by
              President Joe Montesano, Vice President Lore Attardo, and Charles Attardo.
            </p>
            <p>
              The company&apos;s philosophy — &ldquo;building every home as if it&apos;s our
              own, treating every customer like family&rdquo; — reflects a quality-over-volume
              approach that distinguishes Primont from larger production builders.
            </p>

            <h2>Leadership &amp; Legacy</h2>
            <p>
              Joe Montesano serves as President, bringing decades of hands-on building
              experience. Lore Attardo, as Vice President, oversees operations and customer
              relations. Charles Attardo contributes to the family&apos;s continued commitment
              to the GTA housing market. Together, they maintain Primont&apos;s reputation
              for delivering homes with premium inclusions at competitive price points.
            </p>

            <h2>Awards &amp; Recognition</h2>
            <p>
              Primont Homes has received recognition from the Southern Ontario Home Builders&apos;
              Association (SCHBA), Building Industry and Land Development Association (BILD),
              and Ontario Home Builders&apos; Association (OHBA) for design excellence and
              customer satisfaction.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Futura Smart Home Technology
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Futura is Primont&apos;s proprietary smart home package included as standard in
              every Cornerstone townhome — not as an upgrade. Unlike most builders who charge
              extra for smart features, Primont includes:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {FUTURA_FEATURES.map((feature) => (
                <div key={feature.name} className="card">
                  <h3 className="font-semibold text-forest-900">{feature.name}</h3>
                  <p className="mt-1 text-sm text-forest-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Other Primont Communities
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {COMMUNITIES.map((community) => (
                <div key={community.name} className="card">
                  <h3 className="font-semibold text-forest-900">{community.name}</h3>
                  <p className="text-sm text-forest-700">{community.location}</p>
                  <p className="text-sm text-forest-800">{community.type}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-12 card bg-cream-100">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Builder Trust &amp; Warranty
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              All Primont Homes purchases include Tarion warranty protection — Ontario&apos;s
              mandatory new home warranty covering deposit protection, construction defects, and
              delayed closing compensation. With 5,000+ homes delivered over 50+ years, Primont&apos;s
              track record provides confidence for pre-construction buyers at Cornerstone Towns.
            </p>
            <Link href="/register" className="btn-primary mt-6 inline-flex">
              Register for VIP Access
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
