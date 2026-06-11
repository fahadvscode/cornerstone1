import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { INVESTMENT_DISCLAIMER } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Brampton Investment Analysis | Pre-Construction ROI & Market Data",
  description:
    "Investment analysis for Cornerstone Towns Brampton. Brampton market growth data, price appreciation trends, rental yields, and why Northwest Brampton is a top investment corridor.",
  path: "/investment",
});

export default function InvestmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Investment", "/investment")} />
      <PageHeader
        title="Cornerstone Towns Brampton — Investment Analysis & Market Outlook"
        subtitle="Data-driven analysis of Brampton's real estate market and Northwest Brampton growth corridor"
      />

      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <article className="prose-site">
            <h2>Is Cornerstone Towns a Good Investment?</h2>
            <p>
              Cornerstone Towns by Primont Homes offers compelling investment fundamentals:
              a master-planned community within Northwest Brampton&apos;s designated growth
              corridor, Futura smart home technology as standard, and the advantages of
              pre-construction buying including deposit leverage and appreciation during
              the build period.
            </p>

            <h2>Brampton Population Growth</h2>
            <p>
              Brampton&apos;s current population exceeds 711,000 and is projected to reach
              1 million by 2051 — making it the second-largest city in the GTA. The city has
              committed to building 113,000 new homes by 2031, reflecting sustained housing
              demand in one of Canada&apos;s fastest-growing municipalities.
            </p>

            <h2>Price Appreciation Trends</h2>
            <p>
              Brampton&apos;s real estate market has demonstrated steady price appreciation,
              supported by population growth, transit infrastructure investment, and housing
              supply constraints. RE/MAX projects continued appreciation, particularly in
              growth corridors like Northwest Brampton where major master-planned communities
              are reshaping the landscape.
            </p>

            <h2>Northwest Brampton Growth Corridor</h2>
            <p>
              Northwest Brampton has been designated for urban development since 2006. The area
              benefits from Highway 407/410 access, Mount Pleasant GO Station, the Hurontario
              LRT corridor, and proximity to major employment centers. Cornerstone&apos;s location
              at Mississauga Road and Sandalwood Parkway West positions it at the heart of this
              growth zone.
            </p>

            <h2>Transit Infrastructure Impact</h2>
            <p>
              Major transit investments — including Mount Pleasant GO, Züm BRT, and the future
              Hurontario LRT — historically support property value appreciation in connected
              corridors. Cornerstone&apos;s 5-minute proximity to Mount Pleasant GO Station
              provides direct commuter access to downtown Toronto.
            </p>

            <h2>Pre-Construction Buying Advantages</h2>
            <ul>
              <li>Lower entry pricing compared to resale equivalents</li>
              <li>Staged deposit payments spread over months</li>
              <li>Property appreciation during the construction period</li>
              <li>Customization and upgrade selection at pre-construction prices</li>
              <li>VIP incentives including capped development charges and free assignment</li>
              <li>Tarion warranty protection on a brand-new home</li>
            </ul>

            <h2>Rental Market Analysis</h2>
            <p>
              Brampton townhomes typically command rental rates of $2,500–$3,500+ per month
              depending on size and location. Cornerstone&apos;s proximity to transit, schools,
              Sheridan College, and employment centers supports strong rental demand. The
              free assignment clause available to VIP registrants adds flexibility for
              investors who may wish to assign before closing.
            </p>

            <h2>Comparison to Resale</h2>
            <p>
              Pre-construction townhomes in Brampton typically offer advantages over comparable
              resale units during the construction period. Cornerstone buyers benefit from a
              brand-new home with modern smart technology and energy-efficient construction
              in a high-growth corridor.
            </p>

            <h2>Who Should Invest?</h2>
            <p>
              Cornerstone Towns appeals to first-time buyers seeking affordable freehold
              entry, families looking for room to grow in a master-planned community, and
              investors targeting rental income and long-term appreciation in a high-growth
              corridor. The combination of Primont&apos;s 50-year track record, Futura
              technology, and Northwest Brampton&apos;s growth trajectory creates a
              well-rounded investment case.
            </p>
          </article>

          <p className="mt-8 text-sm italic text-forest-700">{INVESTMENT_DISCLAIMER}</p>

          <div className="mt-8 text-center">
            <Link href="/register" className="btn-primary">
              Register for VIP Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
