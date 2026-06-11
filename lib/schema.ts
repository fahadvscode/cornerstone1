import { CONTACT, FUTURA_FEATURES, PROJECT, SITE_URL } from "./constants";

export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Fahad Javed — Sold by Fahad",
    description:
      "Fahad Javed is a licensed real estate Sales Representative at Century 21 Property Zone Realty Inc. specializing in pre-construction townhomes and condos in the Greater Toronto Area.",
    url: CONTACT.website,
    telephone: CONTACT.phoneFormatted,
    email: CONTACT.email,
    image: `${SITE_URL}/fahad-javed.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 Matheson Blvd W, Unit 5",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: CONTACT.brokeragePostal,
      addressCountry: "CA",
    },
    worksFor: {
      "@type": "RealEstateAgent",
      name: CONTACT.brokerage,
      url: "https://www.century21.ca",
    },
    areaServed: {
      "@type": "City",
      name: "Brampton",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Greater Toronto Area",
      },
    },
    knowsAbout: [
      "Pre-Construction Homes",
      "Townhomes",
      "Real Estate Investment",
      "Brampton Real Estate",
    ],
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
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Cornerstone Towns Brampton",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${CONTACT.agent} — ${CONTACT.brokerage}`,
    description:
      "Licensed real estate sales representative specializing in pre-construction homes in Brampton and the Greater Toronto Area.",
    url: SITE_URL,
    telephone: CONTACT.phoneFormatted,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 Matheson Blvd W, Unit 5",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: CONTACT.brokeragePostal,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PROJECT.coordinates.lat,
      longitude: PROJECT.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  };
}
