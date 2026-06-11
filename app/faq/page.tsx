import Link from "next/link";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQ_CATEGORIES, FAQ_DATA } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Brampton FAQ | 50+ Questions Answered",
  description:
    "Get answers to 50+ frequently asked questions about Cornerstone Towns Brampton by Primont Homes. Pricing, floor plans, deposit structure, location, registration, and more.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema("FAQ", "/faq"),
          faqPageSchema(FAQ_DATA),
        ]}
      />
      <PageHeader
        title="Cornerstone Towns Brampton — Frequently Asked Questions"
        subtitle={`${FAQ_DATA.length} questions answered about pricing, floor plans, location, registration, and more`}
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          {FAQ_CATEGORIES.map((category) => {
            const categoryFaqs = FAQ_DATA.filter((f) => f.category === category);
            return (
              <article key={category} className="mb-12">
                <h2 className="mb-6 font-heading text-2xl font-bold text-forest-900">
                  {category}
                </h2>
                <FAQAccordion faqs={categoryFaqs} />
              </article>
            );
          })}

          <div className="mt-8 text-center">
            <p className="mb-4 text-forest-800">
              Still have questions? Register for VIP access to receive more information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="btn-primary">
                Register for VIP Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
