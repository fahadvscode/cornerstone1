import { FUTURA_FEATURES, PROJECT, SITE_NAME, SITE_URL } from "./constants";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    description: `${PROJECT.marketingName} is a master-planned community of ${PROJECT.phase1Units} freehold townhomes in Northwest Brampton by ${PROJECT.developer}.`,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Residence",
      name: `${PROJECT.marketingName} Brampton`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brampton",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: `${PROJECT.marketingName} Brampton`,
    description: `${PROJECT.marketingName} is a master-planned community of ${PROJECT.phase1Units} freehold townhomes in Northwest Brampton by ${PROJECT.developer}. Back-to-Back and Traditional designs ${PROJECT.pricing.toLowerCase()} with Futura smart home technology. Launching ${PROJECT.launch}.`,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mississauga Road & Sandalwood Parkway West",
      addressLocality: "Brampton",
      addressRegion: "ON",
      postalCode: "L7A 4H9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PROJECT.coordinates.lat,
      longitude: PROJECT.coordinates.lng,
    },
    numberOfRooms: "1-3 bedrooms",
    amenityFeature: [
      ...FUTURA_FEATURES.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f.name,
        value: true,
      })),
      {
        "@type": "LocationFeatureSpecification",
        name: "Parks and Trail Network",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Community Courtyards",
        value: true,
      },
    ],
    brand: {
      "@type": "Organization",
      name: PROJECT.developer,
      foundingDate: "1975",
      url: PROJECT.developerUrl,
    },
  };
}

export function breadcrumbSchema(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
