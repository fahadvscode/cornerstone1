import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { PROJECT, VIP_INCENTIVES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const HERO_PERKS = VIP_INCENTIVES.slice(0, 4);

export function HeroSection() {
  return (
    <section className="relative min-h-[min(100vh,920px)] overflow-hidden bg-forest-900 text-white">
      <Image
        src={IMAGES.hero}
        alt="Cornerstone Towns Brampton new freehold townhomes by Primont Homes"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/92 via-forest-900/78 to-forest-900/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.12),transparent_55%)]" />

      <div className="container-site relative z-10 flex min-h-[min(100vh,920px)] items-center py-16 md:py-20">
        <div className="grid w-full items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              Launching {PROJECT.launch}
            </div>

            <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[3.35rem]">
              New Freehold Townhomes in Northwest Brampton
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {PROJECT.marketingName} by {PROJECT.developer} — {PROJECT.phase1Units}{" "}
              freehold townhomes with Futura smart home technology included as standard.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {[
                `${PROJECT.phase1Units} Townhomes`,
                "Freehold Ownership",
                "Futura Smart Home",
                PROJECT.launch,
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/floor-plans"
                className="btn-secondary border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15 hover:text-white"
              >
                View Floor Plans
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-white/70 underline-offset-4 transition hover:text-gold-400 hover:underline"
              >
                See renderings
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl shadow-black/25">
              <div className="bg-forest-900 px-6 py-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                  VIP Registration
                </p>
                <h2 className="mt-1 font-heading text-2xl font-semibold">
                  Get First Access
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  Register now for floor plans, lot selection, and launch updates
                  before the public release.
                </p>
              </div>

              <div className="max-h-[min(85vh,820px)] space-y-4 overflow-y-auto px-6 py-5">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {HERO_PERKS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-snug text-neutral-600"
                    >
                      <span className="mt-0.5 text-gold-500" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <LeadForm
                  variant="full"
                  page="homepage-hero"
                  submitLabel="Register for VIP Access"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
