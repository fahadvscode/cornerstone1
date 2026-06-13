import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { FloorPlanGrid } from "@/components/sections/FloorPlanGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECT, UNIT_TYPES, VIP_INCENTIVES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Floor Plans | Brampton Townhomes by Primont Homes",
  description:
    "Explore floor plans for Cornerstone Towns in Brampton. 1–3 bedroom freehold townhomes by Primont Homes. Register for VIP access to unlock full plans.",
  path: "/floor-plans",
});

export default function FloorPlansPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Floor Plans", "/floor-plans")} />
      <PageHeader
        title="Floor Plans"
        subtitle={`${PROJECT.phase1Units} freehold townhomes by ${PROJECT.developer} — register for VIP access to unlock full floor plans`}
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-neutral-600 leading-relaxed">
              Cornerstone Towns offers six layout options from 1 Bedroom + Den to
              3 Bedroom, including Back-to-Back and Traditional designs. Every home
              includes Primont&apos;s Futura smart home technology as standard.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Full floor plans are available exclusively to VIP registrants before
              the public launch.
            </p>
          </div>

          <FloorPlanGrid />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Bedrooms</th>
                  <th className="pb-3 font-medium">Est. Size</th>
                  <th className="pb-3 font-medium">Highlights</th>
                </tr>
              </thead>
              <tbody>
                {UNIT_TYPES.map((unit) => (
                  <tr key={unit.slug} className="border-b border-neutral-100">
                    <td className="py-3 font-medium text-forest-900">{unit.name}</td>
                    <td className="py-3 text-neutral-600">{unit.bedrooms}</td>
                    <td className="py-3 text-neutral-600">{unit.sizeRange}</td>
                    <td className="py-3 text-neutral-600">{unit.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <article className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="card">
              <h2 className="font-heading text-xl font-semibold text-forest-900">
                Back-to-Back Towns
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Efficient modern design where units share a rear wall. Reduced
                exterior maintenance and contemporary layouts ideal for
                first-time buyers and investors.
              </p>
            </div>
            <div className="card">
              <h2 className="font-heading text-xl font-semibold text-forest-900">
                Traditional Towns
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Classic freehold layout with individual rear yard access and
                conventional street-facing design — suited for families wanting
                room to grow.
              </p>
            </div>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-semibold text-forest-900">
              VIP Incentives
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {VIP_INCENTIVES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                  <span className="text-forest-700" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-site mx-auto max-w-xl">
          <h2 className="mb-2 text-center font-heading text-2xl font-semibold text-forest-900">
            Unlock Full Floor Plans
          </h2>
          <p className="mb-8 text-center text-sm text-neutral-500">
            Register for VIP access to view detailed floor plans before the public launch.
          </p>
          <div className="card">
            <LeadForm variant="simple" page="floor-plans" submitLabel="Unlock Floor Plans" />
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500">
            Floor plans are subject to change.{" "}
            <Link href="/register" className="text-forest-700 underline">
              Register now
            </Link>{" "}
            for first access.
          </p>
        </div>
      </section>
    </>
  );
}
