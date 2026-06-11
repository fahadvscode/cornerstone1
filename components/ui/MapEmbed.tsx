import { PROJECT } from "@/lib/constants";

interface MapEmbedProps {
  title?: string;
  className?: string;
}

export function MapEmbed({
  title = "Cornerstone Towns Brampton location map",
  className = "",
}: MapEmbedProps) {
  const { lat, lng } = PROJECT.coordinates;
  const mapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const src = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${lat},${lng}&zoom=14`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div className={`overflow-hidden rounded-lg border border-cream-200 ${className}`}>
      <iframe
        title={title}
        src={src}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
