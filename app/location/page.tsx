import { JsonLd } from "@/components/seo/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECT, SCHOOLS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Location | Northwest Brampton Neighbourhood Guide",
  description:
    "Explore the Cornerstone Towns Brampton location at Mississauga Rd & Sandalwood Pkwy W. Near Mount Pleasant GO, Hwy 407/410, schools, parks, and shopping in Northwest Brampton.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Location", "/location")} />
      <PageHeader
        title="Cornerstone Towns Location — Northwest Brampton Neighbourhood Guide"
        subtitle={PROJECT.location}
      />

      <section className="section-padding">
        <div className="container-site">
          <MapEmbed className="mb-12" />

          <article className="prose-site max-w-4xl">
            <h2>Where Is Cornerstone Towns Located?</h2>
            <p>
              Cornerstone Towns is located at Mississauga Road and Sandalwood Parkway West in
              Northwest Brampton, Ontario. The nearest address is {PROJECT.nearestAddress}.
              This area has been designated for urban development since 2006 and is part of
              Brampton&apos;s key growth corridor — one of the most active development zones
              in the Greater Toronto Area.
            </p>
            <p>
              Northwest Brampton benefits from strategic positioning between major employment
              centers, transit infrastructure, and natural amenities. The community is expected
              to house over {PROJECT.communityScale} at full buildout, making it one of the
              largest master-planned developments in the city.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Transit &amp; Commuting
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { name: "Mount Pleasant GO Station", detail: "~5 min drive. Connects to Union Station in ~50 min." },
                { name: "Züm BRT Route 502", detail: "Rapid transit along Hurontario/Main to Square One Mississauga." },
                { name: "Brampton Transit", detail: "Multiple bus routes with Sandalwood Transit facility nearby." },
                { name: "Hurontario LRT (Future)", detail: "18 km rapid transit corridor connecting Brampton to Mississauga." },
                { name: "Highway 407", detail: "Quick access via Mississauga Road." },
                { name: "Highway 410", detail: "Minutes away via Sandalwood Parkway." },
                { name: "Highway 401", detail: "Accessible via 407 or 410 connectors." },
                { name: "Pearson Airport", detail: "~20 min drive to Toronto Pearson International." },
              ].map((item) => (
                <div key={item.name} className="card">
                  <h3 className="font-semibold text-forest-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-forest-800">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Schools Nearby
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead>
                  <tr className="bg-forest-900 text-left text-cream-50">
                    <th className="p-3">School</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Board</th>
                    <th className="p-3">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHOOLS.map((school, i) => (
                    <tr key={school.name} className={i % 2 === 0 ? "bg-white" : "bg-cream-100"}>
                      <td className="p-3 font-medium">{school.name}</td>
                      <td className="p-3">{school.type}</td>
                      <td className="p-3">{school.board}</td>
                      <td className="p-3">{school.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-forest-800">
              Special programs nearby include French Immersion, International Baccalaureate,
              Advanced Placement, Montessori, Vocational, and Specialist High Skills Major (SHSM).
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Post-Secondary Education
            </h2>
            <ul className="mt-4 space-y-2 text-forest-800">
              <li>Sheridan College (Davis Campus) — minutes away</li>
              <li>Algoma University (Brampton Campus)</li>
            </ul>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Shopping &amp; Dining
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Big box retail stores line the Mississauga Road corridor. Shoppers World Brampton,
              Trinity Common Mall, and Square One Shopping Centre (via Züm BRT, ~40 min) provide
              comprehensive shopping options. Grocery stores, pharmacies, banks, and diverse
              restaurants reflecting Brampton&apos;s multicultural community are within the
              neighbourhood.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Parks, Recreation &amp; Nature
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Brampton boasts 3,014+ hectares of parkland. Nearby destinations include Mount
              Pleasant Village Square, Fletcher&apos;s Parkette, Heart Lake Conservation Area
              (~15 min), Creditview Park, Angus Morrison Park, Buick Park and Skatepark, Moody
              Family Park, Gage Park (~16 min), and Peel Art Gallery, Museum and Archives (PAMA).
              Cornerstone itself will feature integrated parkland, green corridors, and trail
              networks connecting residents to nature.
            </p>
          </article>

          <article className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Healthcare
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Multiple walk-in clinics along the Sandalwood corridor, William Osler Health
              System&apos;s Peel Memorial Centre for Integrated Health and Wellness, Brampton
              Civic Hospital, and multiple pharmacies within walking distance serve the
              Cornerstone community.
            </p>
          </article>

          <article className="mt-12 card">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Neighbourhood Profile
            </h2>
            <p className="mt-4 text-forest-800 leading-relaxed">
              Northwest Brampton is a family-oriented community with approximately 68% family
              households. The area is experiencing rapid growth as part of Brampton&apos;s
              commitment to building 113,000 new homes by 2031. Walk Score varies by specific
              location, but the master-planned design of Cornerstone emphasizes pedestrian-friendly
              streetscapes and internal trail connectivity.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
