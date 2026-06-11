export const SITE_URL = "https://cornerstonetownsbrampton.ca";
export const SITE_NAME = "Cornerstone Towns Brampton";

export const PROJECT = {
  name: "Cornerstone",
  marketingName: "Cornerstone Towns",
  developer: "Primont Homes",
  developerUrl: "https://primont.com",
  developerLegacy: "Family-owned, 50+ years, 5,000+ homes built in the GTA",
  location: "Mississauga Road & Sandalwood Parkway West, Northwest Brampton, ON",
  nearestAddress: "Near 10344 Mississauga Road, Brampton, ON L7A 4H9",
  coordinates: { lat: 43.7315, lng: -79.7624 },
  projectType: "Master-Planned Community",
  phase1Units: 129,
  launch: "Spring 2026",
  occupancy: "TBD",
  status: "Pre-Construction — Coming Soon",
  communityScale: "18,000+ people at full buildout",
  futurePhases: "Condominiums, Detached Homes",
} as const;

export const FUTURA_FEATURES = [
  {
    name: "Smart Thermostat",
    description:
      "Learns your routine and reduces energy costs automatically.",
  },
  {
    name: "Camera Doorbell",
    description:
      "See and speak to visitors remotely from your smartphone.",
  },
  {
    name: "Motion-Activated Front Door Light",
    description: "Enhanced safety and visibility when you arrive home.",
  },
  {
    name: "USB & USB-C Charging Outlets",
    description: "Built into the kitchen and every bedroom.",
  },
  {
    name: "EV Charging-Ready Garage",
    description:
      "Pre-wired with conduit for a future electric vehicle charger.",
  },
] as const;

export const UNIT_TYPES = [
  {
    slug: "1br-den",
    name: "1 Bedroom + Den",
    bedrooms: "1 + Den",
    sizeRange: "700 – 850 sq ft",
    features: "Compact layout with dedicated home office space",
    idealFor: "Singles, young professionals, first-time buyers",
  },
  {
    slug: "2br",
    name: "2 Bedroom",
    bedrooms: "2",
    sizeRange: "900 – 1,050 sq ft",
    features: "Efficient layout ideal for couples and small families",
    idealFor: "Couples, small families, downsizers",
  },
  {
    slug: "2br-den",
    name: "2 Bedroom + Den",
    bedrooms: "2 + Den",
    sizeRange: "1,000 – 1,150 sq ft",
    features: "Extra flex room for office, nursery, or guest space",
    idealFor: "Growing families, work-from-home professionals",
  },
  {
    slug: "3br",
    name: "3 Bedroom",
    bedrooms: "3",
    sizeRange: "1,150 – 1,350 sq ft",
    features: "Spacious family-sized layout with multiple bathrooms",
    idealFor: "Families needing room to grow",
  },
  {
    slug: "back-to-back",
    name: "Back-to-Back Towns",
    bedrooms: "1–3",
    sizeRange: "700 – 1,200 sq ft",
    features: "Efficient modern design with flexible layouts",
    idealFor: "Budget-conscious buyers, first-time homeowners",
  },
  {
    slug: "traditional",
    name: "Traditional Towns",
    bedrooms: "2–3",
    sizeRange: "1,000 – 1,350 sq ft",
    features: "Classic freehold townhome layout with rear yard access",
    idealFor: "Families wanting traditional townhome living",
  },
] as const;

export const VIP_INCENTIVES = [
  "First access to floor plans before public release",
  "First selection of units and lots before public launch",
  "Capped development charges for better cost control",
  "Free assignment clause (subject to builder approval)",
  "Extended deposit structure for easier payment planning",
  "Property management & leasing services available",
  "Free lawyer review of purchase agreement",
  "Free mortgage arrangements",
] as const;

export const SCHOOLS = [
  { name: "Aylesbury Public School", type: "Elementary", board: "Peel District School Board", distance: "~1.5 km" },
  { name: "Mount Pleasant Village Public School", type: "Elementary", board: "Peel District School Board", distance: "~2 km" },
  { name: "Worthington Public School", type: "Elementary", board: "Peel District School Board", distance: "~2.5 km" },
  { name: "Dolson Public School", type: "Elementary", board: "Peel District School Board", distance: "~3 km" },
  { name: "St. Daniel Comboni C.S.", type: "Elementary", board: "Dufferin-Peel Catholic DSB", distance: "~3 km" },
  { name: "St. Bonaventure", type: "Elementary", board: "Dufferin-Peel Catholic DSB", distance: "~3.5 km" },
  { name: "Jean Augustine Secondary School", type: "Secondary", board: "Peel District School Board", distance: "~4 km" },
  { name: "Sandalwood Heights Secondary School", type: "Secondary", board: "Peel District School Board", distance: "~3 km" },
] as const;

export const COMPETITORS = [
  {
    name: "Arbor Grove Towns",
    developer: "Royal Pine Homes",
    location: "Gore Rd & Ebenezer Rd",
    unitTypes: "2–3 BR Towns",
    transit: "Limited GO access",
    smartHome: "Basic inclusions",
    communityScale: "Standalone development",
    deposit: "Standard",
    occupancy: "2027+",
  },
  {
    name: "Spruce Trails",
    developer: "Elm Developments",
    location: "Heart Lake Rd",
    unitTypes: "2–3 BR Towns",
    transit: "Moderate transit access",
    smartHome: "Limited smart features",
    communityScale: "Mid-size community",
    deposit: "Standard",
    occupancy: "2027",
  },
  {
    name: "Ellis Lane",
    developer: "Mattamy Homes",
    location: "Northwest Brampton",
    unitTypes: "2–4 BR Towns & Singles",
    transit: "GO access available",
    smartHome: "Select upgrades only",
    communityScale: "Large master-planned",
    deposit: "Standard Mattamy structure",
    occupancy: "2027–2028",
  },
  {
    name: "Mayfield Village",
    developer: "Royal Pine Homes",
    location: "Mayfield area, Brampton",
    unitTypes: "2–3 BR Towns",
    transit: "Bus routes nearby",
    smartHome: "Basic inclusions",
    communityScale: "Village-style community",
    deposit: "Standard",
    occupancy: "2027",
  },
  {
    name: "Honeystone Towns",
    developer: "Deco Homes",
    location: "Northwest Brampton",
    unitTypes: "2–3 BR Towns",
    transit: "Moderate access",
    smartHome: "Limited smart features",
    communityScale: "Standalone development",
    deposit: "Standard",
    occupancy: "2026–2027",
  },
] as const;

export const NAV_LINKS = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/location", label: "Location" },
  { href: "/builder", label: "Builder" },
  { href: "/amenities", label: "Amenities" },
  { href: "/investment", label: "Investment" },
  { href: "/compare", label: "Compare" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
] as const;

export const KEYWORDS =
  "Cornerstone Towns, Cornerstone Brampton, Primont Homes, pre-construction townhomes Brampton, new townhomes Brampton, Northwest Brampton, freehold townhomes Brampton";

export const DISCLAIMER =
  "Disclaimer: This website is an independent informational resource about Cornerstone Towns by Primont Homes. We do not represent the builder directly and are not affiliated with Primont Homes. All information is believed to be accurate but is subject to change without notice. For official pricing, floor plans, and availability, contact Primont Homes directly. E.&O.E.";

export const INVESTMENT_DISCLAIMER =
  "This analysis is for informational purposes only and does not constitute financial advice.";
