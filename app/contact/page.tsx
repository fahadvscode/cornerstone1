import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { formatPhoneLink } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Contact Fahad Javed | Cornerstone Towns Brampton",
  description:
    "Contact Fahad Javed, Sales Representative at Century 21 Property Zone Realty Inc. for Cornerstone Towns Brampton. Call 647-898-1739 or email fahad@fahadsold.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema("Contact", "/contact"),
          localBusinessSchema(),
        ]}
      />
      <PageHeader
        title="Contact Fahad Javed"
        subtitle="Your dedicated agent for Cornerstone Towns Brampton by Primont Homes"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="card mb-8">
                <h2 className="font-heading text-2xl font-bold text-forest-900">
                  {CONTACT.agent}
                </h2>
                <p className="text-forest-700">{CONTACT.title}</p>
                <p className="mt-2 font-medium text-forest-900">{CONTACT.brokerage}</p>
                <address className="mt-4 space-y-2 text-sm not-italic text-forest-800">
                  <p>{CONTACT.brokerageAddress}</p>
                  <p>
                    <a href={`mailto:${CONTACT.email}`} className="text-forest-700 underline">
                      {CONTACT.email}
                    </a>
                  </p>
                  <p>
                    <a href={formatPhoneLink(CONTACT.phone)} className="text-forest-700 underline">
                      {CONTACT.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={CONTACT.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-700 underline"
                    >
                      fahadsold.com
                    </a>
                  </p>
                </address>
                <p className="mt-4 text-sm text-forest-700">
                  <strong>Hours:</strong> {CONTACT.hours}
                </p>
              </div>

              <a
                href={CONTACT.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mb-8 inline-flex w-full justify-center sm:w-auto"
              >
                Book a Call
              </a>

              <MapEmbed title="Century 21 Property Zone Realty office location" />
            </div>

            <div className="card">
              <h2 className="mb-6 font-heading text-2xl font-bold text-forest-900">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
