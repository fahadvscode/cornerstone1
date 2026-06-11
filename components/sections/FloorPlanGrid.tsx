import { BlurredFloorPlanCard } from "@/components/ui/BlurredFloorPlanCard";
import { UNIT_TYPES } from "@/lib/constants";

const PLAN_IMAGES: Record<string, string> = {
  "1br-den": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "2br": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  "2br-den": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "3br": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "back-to-back": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  traditional: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
};

export function FloorPlanGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {UNIT_TYPES.map((unit) => (
        <BlurredFloorPlanCard
          key={unit.slug}
          name={unit.name}
          bedrooms={unit.bedrooms}
          sizeRange={unit.sizeRange}
          features={unit.features}
          idealFor={unit.idealFor}
          imageSrc={PLAN_IMAGES[unit.slug]}
        />
      ))}
    </div>
  );
}
