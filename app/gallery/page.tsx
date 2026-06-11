import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECT } from "@/lib/constants";
import { getAvailableGalleryItems, IMAGES } from "@/lib/images";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Gallery | Renderings & Site Plan",
  description:
    "View renderings, architectural designs, and site plans for Cornerstone Towns Brampton by Primont Homes.",
  path: "/gallery",
});

export default function GalleryPage() {
  const galleryItems = getAvailableGalleryItems();

  return (
    <>
      <JsonLd data={breadcrumbSchema("Gallery", "/gallery")} />
      <PageHeader
        title="Renderings & Site Plan"
        subtitle={`Architectural renderings for ${PROJECT.marketingName} by ${PROJECT.developer}`}
      />

      <section className="section-padding">
        <div className="container-site">
          <p className="mb-10 max-w-2xl text-neutral-600 leading-relaxed">
            Explore renderings and design concepts for Cornerstone Towns Brampton —
            Back-to-Back and Traditional townhome districts within the master-planned
            community.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.caption}
                className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium text-forest-900">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200/80 bg-cream-100">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={IMAGES.sitePlan}
                alt="Cornerstone Towns Brampton site plan"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="p-8 text-center">
              <h2 className="font-heading text-2xl font-semibold text-forest-900">
                Site Plan
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Full site plan details released to VIP registrants before public launch.
              </p>
              <Link href="/register" className="btn-primary mt-6 inline-flex">
                Register for VIP Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
