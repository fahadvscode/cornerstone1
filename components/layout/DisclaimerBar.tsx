import { DISCLAIMER } from "@/lib/constants";

export function DisclaimerBar() {
  return (
    <div className="border-b border-cream-200 bg-cream-100 py-2">
      <div className="container-site">
        <p className="text-center text-xs leading-relaxed text-forest-700">
          {DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
