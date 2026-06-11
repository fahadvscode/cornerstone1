import { DISCLAIMER } from "@/lib/constants";

export function DisclaimerBar() {
  return (
    <div className="border-b border-neutral-200/80 bg-cream-100 py-2.5">
      <div className="container-site">
        <p className="text-center text-[11px] leading-relaxed text-neutral-500">
          {DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
