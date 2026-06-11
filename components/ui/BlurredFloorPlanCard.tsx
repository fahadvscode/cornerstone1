import Image from "next/image";
import Link from "next/link";

interface BlurredFloorPlanCardProps {
  name: string;
  bedrooms: string;
  sizeRange?: string;
  features: string;
  idealFor?: string;
  imageSrc?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80";

export function BlurredFloorPlanCard({
  name,
  bedrooms,
  sizeRange,
  features,
  idealFor,
  imageSrc = DEFAULT_IMAGE,
}: BlurredFloorPlanCardProps) {
  return (
    <Link
      href="/register"
      className="group block overflow-hidden rounded-2xl border border-neutral-200/80 bg-white transition hover:border-forest-700/30 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={imageSrc}
          alt={`${name} floor plan preview — register for VIP access`}
          fill
          className="object-cover blur-md scale-105 transition duration-500 group-hover:blur-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-forest-900/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-forest-900 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold text-white drop-shadow-md">
            Unlock Floor Plan
          </span>
          <span className="rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold text-forest-900 shadow-sm transition group-hover:bg-gold-400">
            Register for VIP Access
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-semibold text-forest-900">
            {name}
          </h3>
          <span className="shrink-0 rounded-full bg-forest-900/5 px-3 py-1 text-xs font-medium text-forest-800">
            {bedrooms} BR
          </span>
        </div>
        {sizeRange && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
            {sizeRange}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{features}</p>
        {idealFor && (
          <p className="mt-2 text-xs text-neutral-500">Ideal for {idealFor.toLowerCase()}</p>
        )}
      </div>
    </Link>
  );
}
