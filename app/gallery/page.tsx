import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Cornerstone Towns Gallery | Renderings & Site Plan",
  description:
    "View renderings, architectural designs, and site plans for Cornerstone Towns Brampton by Primont Homes. Back-to-Back and Traditional townhome designs in Northwest Brampton.",
  path: "/gallery",
});

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Cornerstone Towns Brampton modern townhome exterior rendering by Primont Homes",
    caption: "Modern Townhome Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Cornerstone Towns open-concept interior with natural light and modern finishes",
    caption: "Open-Concept Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Cornerstone Towns kitchen with stone countertops and stainless steel appliances",
    caption: "Kitchen with Stone Countertops",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Cornerstone Towns master-planned community streetscape with landscaped parks",
    caption: "Community Streetscape",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Cornerstone Towns back-to-back townhome design in Northwest Brampton",
    caption: "Back-to-Back Townhome Design",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
    alt: "Cornerstone Towns traditional freehold townhome with rear yard access",
    caption: "Traditional Townhome Design",
  },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Gallery", "/gallery")} />
      <PageHeader
        title="Cornerstone Towns — Renderings & Site Plan Gallery"
        subtitle={`Architectural renderings and community designs for ${PROJECT.marketingName} by ${PROJECT.developer}`}
      />

      <section className="section-padding">
        <div className="container-site">
          <p className="mb-8 max-w-3xl text-forest-800 leading-relaxed">
            Explore architectural renderings and design concepts for Cornerstone Towns
            Brampton. These images represent the modern design aesthetic planned for both
            Back-to-Back and Traditional townhome districts within the master-planned
            community. Official renderings from Primont Homes will be updated as they
            become available.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.caption} className="card overflow-hidden p-0">
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

          <div className="mt-12 card bg-cream-100 text-center">
            <h2 className="font-heading text-2xl font-bold text-forest-900">
              Site Plan
            </h2>
            <p className="mt-2 text-forest-800">
              The official site plan for Cornerstone Towns will be released to VIP
              registrants before the public launch. Register now for first access.
            </p>
            <Link href="/register" className="btn-primary mt-6 inline-flex">
              Register for VIP Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
