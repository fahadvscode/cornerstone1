import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { VIP_INCENTIVES } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Register for VIP Access | Cornerstone Towns Brampton",
  description:
    "Register for exclusive VIP access to Cornerstone Towns Brampton by Primont Homes. First access to floor plans and lot selection. Launching Spring 2026.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Register", "/register")} />
      <PageHeader
        title="Get Exclusive VIP Access to Cornerstone Towns Brampton"
        subtitle="Be the first to receive floor plans and first lot selection"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-forest-900">
                VIP Benefits
              </h2>
              <ul className="space-y-3">
                {VIP_INCENTIVES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-forest-800">
                    <span className="text-gold-500" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm md:p-8">
              <LeadForm variant="full" page="register" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
