const MAX = {
  name: 100,
  email: 254,
  phone: 30,
  message: 2000,
  page: 100,
  utm: 200,
  unitInterest: 10,
} as const;

const ALLOWED_BUYER_TYPES = new Set(["end-user", "investor", "both"]);

export function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeOptionalString(
  value: unknown,
  maxLength: number
): string | undefined {
  const sanitized = sanitizeString(value, maxLength);
  return sanitized || undefined;
}

export function sanitizeEmail(value: unknown): string {
  return sanitizeString(value, MAX.email).toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return (
    email.length > 0 &&
    email.length <= MAX.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

export function sanitizePhone(value: unknown): string | undefined {
  const phone = sanitizeString(value, MAX.phone);
  if (!phone) return undefined;
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.length < 10 || digits.length > 15) return undefined;
  return phone;
}

export function sanitizeBuyerType(value: unknown): string | undefined {
  const type = sanitizeString(value, 20);
  return ALLOWED_BUYER_TYPES.has(type) ? type : undefined;
}

export function sanitizeUnitInterest(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => sanitizeString(item, 100))
    .filter(Boolean)
    .slice(0, MAX.unitInterest);
  return items.length > 0 ? items : undefined;
}

export { MAX };
