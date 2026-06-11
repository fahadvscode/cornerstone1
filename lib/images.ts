import fs from "fs";
import path from "path";

const IMAGE_DIR = path.join(process.cwd(), "public", "images");
const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png"];

/** Normalize filename stems for lookup (e.g. floor-plan-1br-den → 1br-den) */
function normalizeKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/^floor[-_]?plan[-_]?/, "")
    .replace(/\s+/g, "-");
}

function buildImageIndex(): Record<string, string> {
  const index: Record<string, string> = {};

  if (!fs.existsSync(IMAGE_DIR)) return index;

  for (const file of fs.readdirSync(IMAGE_DIR)) {
    if (file.startsWith(".")) continue;
    const ext = path.extname(file).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;

    const stem = path.basename(file, ext);
    const key = normalizeKey(stem);
    index[key] = `/images/${file}`;
    index[stem.toLowerCase()] = `/images/${file}`;
  }

  return index;
}

const imageIndex = buildImageIndex();

const FALLBACK = "/og-image.jpg";

/** Map logical keys to another indexed asset when no dedicated file exists */
const IMAGE_ALIASES: Record<string, string> = {
  community: "exterior",
  interior: "exterior",
  kitchen: "exterior",
  "back-to-back-exterior": "exterior",
  "traditional-exterior": "exterior",
  "site-plan": "exterior",
};

export function getImage(key: string): string {
  const normalized = normalizeKey(key);
  const direct = imageIndex[normalized] ?? imageIndex[key.toLowerCase()];
  if (direct) return direct;

  const alias = IMAGE_ALIASES[normalized];
  if (alias) return getImage(alias);

  for (const fallbackKey of ["exterior", "hero"]) {
    const fallback = imageIndex[fallbackKey];
    if (fallback) return fallback;
  }

  return FALLBACK;
}

export const IMAGES = {
  hero: getImage("hero"),
  sitePlan: getImage("site-plan"),
  primontLogo: getImage("primont-logo"),
  community: getImage("community"),
} as const;

export const FLOOR_PLAN_IMAGE_KEYS = [
  "1br-den",
  "2br",
  "2br-den",
  "3br",
  "back-to-back",
  "traditional",
] as const;

export function getFloorPlanImage(slug: string): string {
  return getImage(slug);
}

export const GALLERY_ITEMS = [
  {
    key: "exterior",
    caption: "Townhome Exterior",
    alt: "Cornerstone Towns Brampton townhome exterior rendering by Primont Homes",
  },
  {
    key: "interior",
    caption: "Open-Concept Interior",
    alt: "Cornerstone Towns open-concept interior with natural light",
  },
  {
    key: "kitchen",
    caption: "Kitchen Finishes",
    alt: "Cornerstone Towns kitchen with stone countertops and stainless appliances",
  },
  {
    key: "community",
    caption: "Community Streetscape",
    alt: "Cornerstone Towns master-planned community streetscape",
  },
  {
    key: "back-to-back-exterior",
    caption: "Back-to-Back Design",
    alt: "Cornerstone Towns back-to-back townhome design",
  },
  {
    key: "traditional-exterior",
    caption: "Traditional Design",
    alt: "Cornerstone Towns traditional freehold townhome design",
  },
] as const;

export function getGalleryItems() {
  return GALLERY_ITEMS.map((item) => ({
    src: getImage(item.key),
    caption: item.caption,
    alt: item.alt,
  })).filter((item) => item.src !== FALLBACK || item.src === getImage("hero"));
}

/** Gallery items that have a dedicated image file (not fallback) */
export function getAvailableGalleryItems() {
  const items = GALLERY_ITEMS.map((item) => ({
    src: getImage(item.key),
    caption: item.caption,
    alt: item.alt,
    hasDedicatedImage: Boolean(imageIndex[normalizeKey(item.key)]),
  }));

  const dedicated = items.filter((item) => item.hasDedicatedImage);
  if (dedicated.length > 0) return dedicated;

  return items.map(({ src, caption, alt }) => ({ src, caption, alt }));
}
