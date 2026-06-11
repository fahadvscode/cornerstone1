import type { Metadata } from "next";
import { KEYWORDS, PROJECT, SITE_NAME, SITE_URL } from "./constants";
import { getCanonicalUrl } from "./utils";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.jpg",
}: PageMetadataOptions): Metadata {
  const canonical = getCanonicalUrl(path);
  const fullTitle = title.includes("Cornerstone Towns")
    ? title
    : `${title} | Cornerstone Towns Brampton`;

  return {
    title: fullTitle,
    description,
    keywords: KEYWORDS,
    authors: [{ name: SITE_NAME }],
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_CA",
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${PROJECT.marketingName} Brampton by ${PROJECT.developer}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
    other: {
      "geo.region": "CA-ON",
      "geo.placename": "Brampton",
      "geo.position": `${PROJECT.coordinates.lat};${PROJECT.coordinates.lng}`,
      ICBM: `${PROJECT.coordinates.lat}, ${PROJECT.coordinates.lng}`,
    },
  };
}
