import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { FUTURA_FEATURES, PROJECT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Amenities | Smart Homes & Community Features",
  description:
    "Discover Cornerstone Towns Brampton amenities — Futura smart home tech, parkland, trails, courtyards, community gathering spaces, and modern finishes by Primont Homes.",
  path: "/amenities",
});

const INTERIOR_FINISHES = [
  "Open-concept layouts with natural light",
  "Laminate flooring throughout main living areas",
  "Stone kitchen countertops",
  "Stainless steel appliances",
  "Stacked washer and dryer",
  "Modern cabinetry with considered finishes",
  "Spacious bedrooms with ample closet space",
];

const COMMUNITY_AMENITIES = [
  "Gathering areas and courtyards steps from front door",
  "Integrated parkland and green corridors",
  "Connected network of trails and pedestrian routes",
  "Beautiful streetscapes and landscaped parks",
  "Multi-district design with unique character per area",
  "Architectural variety across residential districts",
];

const BUILDER_COMPARISON = [
  { feature: "Smart Thermostat", primont: "Included (Futura)", typical: "Upgrade ($500+)" },
  { feature: "Camera Doorbell", primont: "Included (Futura)", typical: "Not included" },
  { feature: "EV-Ready Garage", primont: "Included (Futura)", typical: "Upgrade ($1,000+)" },
  { feature: "USB-C Outlets", primont: "Included (Futura)", typical: "Not included" },
  { feature: "Stone Countertops", primont: "Standard", typical: "Often laminate standard" },
  { feature: "Stainless Appliances", primont: "Standard", typical: "Often upgrade" },
];

export default function AmenitiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Amenities", "/amenities")} />
      <PageHeader
        title="Cornerstone Towns Brampton — Amenities & Community Features"
        subtitle="Futura smart home technology, modern finishes, and master-planned community amenities"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <article>
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Futura Smart Home Package
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Every home at {PROJECT.marketingName} includes Primont&apos;s Futura smart home
              technology as standard — a significant value advantage over competing Brampton
              pre-construction projects.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {FUTURA_FEATURES.map((f) => (
                <div key={f.name} className="card">
                  <h3 className="font-semibold text-forest-900">{f.name}</h3>
                  <p className="mt-1 text-sm text-forest-800">{f.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Interior Finishes &amp; Design
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {INTERIOR_FINISHES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-forest-800">
                  <span className="text-gold-500" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Community Amenities
            </h2>
            <ul className="mt-4 space-y-2">
              {COMMUNITY_AMENITIES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-forest-800">
                  <span className="text-gold-500" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              District Concept
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Cornerstone is designed as a multi-district master-planned community. Each district
              will have its own unique architectural character while remaining connected through
              green corridors, trail networks, and shared gathering spaces. At full buildout, the
              community is expected to house over {PROJECT.communityScale} across townhomes,
              future condominiums, and detached homes.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Primont vs Standard Builder Inclusions
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr className="bg-forest-900 text-left text-cream-50">
                    <th className="p-3">Feature</th>
                    <th className="p-3">Primont (Cornerstone)</th>
                    <th className="p-3">Typical Builder</th>
                  </tr>
                </thead>
                <tbody>
                  {BUILDER_COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-cream-100"}>
                      <td className="p-3 font-medium">{row.feature}</td>
                      <td className="p-3 text-forest-700">{row.primont}</td>
                      <td className="p-3 text-forest-800">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link href="/register" className="btn-primary">
              Register for VIP Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
