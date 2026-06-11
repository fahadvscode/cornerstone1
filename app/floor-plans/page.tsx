import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECT, UNIT_TYPES, VIP_INCENTIVES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Floor Plans & Pricing | Brampton Townhomes from $600s",
  description:
    "View floor plans and pricing for Cornerstone Towns in Brampton. 1-3 bedroom freehold townhomes by Primont Homes starting from the $600s. Back-to-Back & Traditional designs.",
  path: "/floor-plans",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Floor Plans", "/floor-plans")} />
      <PageHeader
        title="Cornerstone Towns Brampton — Floor Plans & Pricing"
        subtitle={`${PROJECT.phase1Units} freehold townhomes from ${PROJECT.pricing} by ${PROJECT.developer}`}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="prose-site max-w-4xl">
            <p>
              Cornerstone Towns offers a diverse range of freehold townhome layouts designed
              for different lifestyles and budgets. From compact 1 Bedroom + Den units ideal
              for first-time buyers to spacious 3 Bedroom family homes, every layout includes
              Primont&apos;s Futura smart home technology as standard.
            </p>
          </div>

          <h2 className="mb-6 mt-12 font-heading text-2xl font-bold text-forest-900">
            Unit Type Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-forest-900 text-left text-cream-50">
                  <th className="p-3 font-semibold">Type</th>
                  <th className="p-3 font-semibold">Bedrooms</th>
                  <th className="p-3 font-semibold">Est. Size Range</th>
                  <th className="p-3 font-semibold">Est. Price Range</th>
                  <th className="p-3 font-semibold">Key Features</th>
                </tr>
              </thead>
              <tbody>
                {UNIT_TYPES.map((unit, i) => (
                  <tr key={unit.slug} className={i % 2 === 0 ? "bg-white" : "bg-cream-100"}>
                    <td className="p-3 font-medium text-forest-900">{unit.name}</td>
                    <td className="p-3 text-forest-800">{unit.bedrooms}</td>
                    <td className="p-3 text-forest-800">{unit.sizeRange}</td>
                    <td className="p-3 text-forest-800">{unit.priceRange}</td>
                    <td className="p-3 text-forest-800">{unit.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {UNIT_TYPES.map((unit) => (
            <article key={unit.slug} className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-forest-900">
                {unit.name}
              </h2>
              <p className="mt-2 text-forest-800 leading-relaxed">
                The {unit.name} layout at Cornerstone Towns ({unit.sizeRange}) is{" "}
                {unit.idealFor.toLowerCase()}. {unit.features}. Estimated pricing:{" "}
                {unit.priceRange}.
              </p>
            </article>
          ))}

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Back-to-Back vs Traditional Townhomes
            </h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="font-heading text-xl font-semibold">Back-to-Back Towns</h3>
                <p className="mt-2 text-sm text-forest-800 leading-relaxed">
                  Efficient modern design where units share a rear wall. Lower price entry
                  point, reduced exterior maintenance, and contemporary layouts. Ideal for
                  budget-conscious buyers and first-time homeowners seeking freehold ownership
                  from the $600s.
                </p>
              </div>
              <div className="card">
                <h3 className="font-heading text-xl font-semibold">Traditional Towns</h3>
                <p className="mt-2 text-sm text-forest-800 leading-relaxed">
                  Classic freehold townhome layout with individual rear yard access and
                  conventional street-facing design. More spacious configurations (2–3
                  bedrooms) suited for families wanting traditional townhome living with
                  room to grow.
                </p>
              </div>
            </div>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Deposit Structure
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              The exact deposit structure for Cornerstone Towns has not yet been announced
              (TBA). Primont Homes typically designs deposit schedules spread over several
              months for manageable entry. Early VIP registrants historically receive the
              most favorable deposit terms.{" "}
              <Link href="/register" className="text-forest-700 underline">
                Register for VIP access
              </Link>{" "}
              to secure the best terms.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              VIP Incentives for Early Buyers
            </h2>
            <ul className="mt-4 space-y-3">
              {VIP_INCENTIVES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-forest-800">
                  <span className="text-gold-500" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <p className="mt-8 text-sm italic text-forest-700">
            Pricing and floor plans are preliminary and subject to change. Contact Fahad
            Javed for the most current information.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-site mx-auto max-w-2xl">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-forest-900">
            Request Detailed Floor Plans
          </h2>
          <div className="card">
            <LeadForm page="floor-plans" submitLabel="Request Floor Plans" />
          </div>
        </div>
      </section>
    </>
  );
}
