import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { COMPETITORS, PROJECT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns vs Other Brampton Pre-Construction Projects | 2026 Comparison",
  description:
    "Compare Cornerstone Towns Brampton by Primont to other pre-construction projects like Arbor Grove, Spruce Trails, Ellis Lane, and Mayfield Village. Pricing, features, and location compared.",
  path: "/compare",
});

const CORNERSTONE_ROW = {
  name: "Cornerstone Towns",
  developer: "Primont Homes",
  location: "Mississauga Rd & Sandalwood Pkwy W",
  unitTypes: "1–3 BR (Back-to-Back & Traditional)",
  pricing: "From the $600s",
  transit: "Mount Pleasant GO (~5 min)",
  smartHome: "Futura package (standard)",
  communityScale: "Master-planned (18,000+)",
  deposit: "VIP extended structure",
  occupancy: "Spring 2026 launch",
};

export default function ComparePage() {
  const allProjects = [CORNERSTONE_ROW, ...COMPETITORS];

  return (
    <>
      <JsonLd data={breadcrumbSchema("Compare", "/compare")} />
      <PageHeader
        title="Cornerstone Towns vs Other Brampton Pre-Construction Townhomes"
        subtitle="A detailed comparison of pricing, features, location, and value across Northwest Brampton developments"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="bg-forest-900 text-left text-cream-50">
                  <th className="p-3">Project</th>
                  <th className="p-3">Developer</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Unit Types</th>
                  <th className="p-3">Pricing</th>
                  <th className="p-3">Transit</th>
                  <th className="p-3">Smart Home</th>
                  <th className="p-3">Community Scale</th>
                  <th className="p-3">Occupancy</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project, i) => (
                  <tr
                    key={project.name}
                    className={
                      i === 0
                        ? "bg-gold-500/10 font-medium"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-cream-100"
                    }
                  >
                    <td className="p-3 text-forest-900">{project.name}</td>
                    <td className="p-3">{project.developer}</td>
                    <td className="p-3">{project.location}</td>
                    <td className="p-3">{project.unitTypes}</td>
                    <td className="p-3">{project.pricing}</td>
                    <td className="p-3">{project.transit}</td>
                    <td className="p-3">{project.smartHome}</td>
                    <td className="p-3">{project.communityScale}</td>
                    <td className="p-3">{project.occupancy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <article className="prose-site mt-12 max-w-4xl">
            <h2>How Does Cornerstone Compare?</h2>
            <p>
              {PROJECT.marketingName} by {PROJECT.developer} stands out among Brampton
              pre-construction townhomes for several key reasons:
            </p>
            <h3>Master-Planned vs Standalone</h3>
            <p>
              Unlike standalone developments like Honeystone Towns or Arbor Grove, Cornerstone
              is a master-planned community designed to house over 18,000 people with integrated
              parkland, trails, and multi-district design. This scale creates long-term value
              through comprehensive community amenities.
            </p>
            <h3>Primont&apos;s 50-Year Track Record</h3>
            <p>
              With 5,000+ homes built over 50+ years, Primont Homes offers a proven track
              record that newer developers like Elm Developments cannot match. Tarion warranty
              protection and family-business values provide additional buyer confidence.
            </p>
            <h3>Futura Smart Home Technology</h3>
            <p>
              No competing Brampton project includes a comprehensive smart home package as
              standard. Cornerstone&apos;s Futura technology — smart thermostat, camera
              doorbell, EV-ready garage, USB-C outlets — would cost thousands in upgrades
              at other developments.
            </p>
            <h3>Location on Growth Corridor</h3>
            <p>
              Cornerstone&apos;s position at Mississauga Road and Sandalwood Parkway West
              provides superior highway access (407, 410, 401) and proximity to Mount Pleasant
              GO Station (~5 min) — a transit advantage over projects further from GO access.
            </p>
            <h3>Entry Pricing</h3>
            <p>
              Starting from the $600s, Cornerstone offers one of the most accessible entry
              points for freehold townhome ownership in Northwest Brampton, particularly with
              Back-to-Back designs. VIP incentives including capped development charges and
              free assignment add further value for early registrants.
            </p>
          </article>

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
