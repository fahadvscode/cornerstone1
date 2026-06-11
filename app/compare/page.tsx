import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { COMPETITORS, PROJECT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns vs Other Brampton Pre-Construction Projects | 2026 Comparison",
  description:
    "Compare Cornerstone Towns Brampton by Primont to other pre-construction projects like Arbor Grove, Spruce Trails, Ellis Lane, and Mayfield Village.",
  path: "/compare",
});

const CORNERSTONE_ROW = {
  name: "Cornerstone Towns",
  developer: "Primont Homes",
  location: "Mississauga Rd & Sandalwood Pkwy W",
  unitTypes: "1–3 BR (Back-to-Back & Traditional)",
  transit: "Mount Pleasant GO (~5 min)",
  smartHome: "Futura package (standard)",
  communityScale: "Master-planned (18,000+)",
  occupancy: "Spring 2026 launch",
};

export default function ComparePage() {
  const allProjects = [CORNERSTONE_ROW, ...COMPETITORS];

  return (
    <>
      <JsonLd data={breadcrumbSchema("Compare", "/compare")} />
      <PageHeader
        title="Project Comparison"
        subtitle="How Cornerstone Towns compares to other Northwest Brampton pre-construction developments"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-200 text-left text-neutral-500">
                  <th className="pb-3 font-medium">Project</th>
                  <th className="pb-3 font-medium">Developer</th>
                  <th className="pb-3 font-medium">Location</th>
                  <th className="pb-3 font-medium">Unit Types</th>
                  <th className="pb-3 font-medium">Transit</th>
                  <th className="pb-3 font-medium">Smart Home</th>
                  <th className="pb-3 font-medium">Scale</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project, i) => (
                  <tr
                    key={project.name}
                    className={
                      i === 0
                        ? "border-b border-neutral-100 bg-forest-900/5 font-medium"
                        : "border-b border-neutral-100"
                    }
                  >
                    <td className="py-3 text-forest-900">{project.name}</td>
                    <td className="py-3 text-neutral-600">{project.developer}</td>
                    <td className="py-3 text-neutral-600">{project.location}</td>
                    <td className="py-3 text-neutral-600">{project.unitTypes}</td>
                    <td className="py-3 text-neutral-600">{project.transit}</td>
                    <td className="py-3 text-neutral-600">{project.smartHome}</td>
                    <td className="py-3 text-neutral-600">{project.communityScale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <article className="prose-site mt-12 max-w-3xl">
            <h2>How Does Cornerstone Compare?</h2>
            <p>
              {PROJECT.marketingName} stands out for Primont&apos;s 50-year track record,
              Futura smart home technology as standard, master-planned community scale,
              and Mount Pleasant GO proximity in Northwest Brampton&apos;s growth corridor.
            </p>
          </article>

          <div className="mt-10 text-center">
            <Link href="/register" className="btn-primary">
              Register for VIP Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
