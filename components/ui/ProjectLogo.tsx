import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

interface ProjectLogoProps {
  href?: string;
  /** Wrap logo on a white surface — use in dark sections like the footer */
  onWhiteSurface?: boolean;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ProjectLogo({
  href = "/",
  onWhiteSurface = false,
  className = "",
  imageClassName = "h-9 w-auto object-contain sm:h-10",
  priority = false,
}: ProjectLogoProps) {
  const logo = (
    <span
      className={`inline-flex items-center ${
        onWhiteSurface ? "rounded-xl bg-white px-4 py-2.5 shadow-sm" : ""
      } ${className}`}
    >
      <Image
        src={IMAGES.logo}
        alt="Cornerstone Towns Brampton"
        width={220}
        height={56}
        priority={priority}
        className={imageClassName}
      />
    </span>
  );

  if (!href) return <div className="shrink-0">{logo}</div>;

  return (
    <Link href={href} className="shrink-0 transition opacity-90 hover:opacity-100">
      {logo}
    </Link>
  );
}
