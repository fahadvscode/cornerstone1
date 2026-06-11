import { BlurredFloorPlanCard } from "@/components/ui/BlurredFloorPlanCard";
import { UNIT_TYPES } from "@/lib/constants";
import { getFloorPlanImage } from "@/lib/images";

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
          imageSrc={getFloorPlanImage(unit.slug)}
        />
      ))}
    </div>
  );
}
