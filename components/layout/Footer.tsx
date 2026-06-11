import Link from "next/link";
import { DISCLAIMER, NAV_LINKS, PROJECT, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-forest-900 text-cream-100">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-gold-400">
              {PROJECT.marketingName}
            </h2>
            <p className="text-sm leading-relaxed text-cream-200">
              {PROJECT.phase1Units} freehold townhomes by {PROJECT.developer} in
              Northwest Brampton. Launching {PROJECT.launch}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200 transition hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/register"
                  className="text-sm text-cream-200 transition hover:text-gold-400"
                >
                  Register for VIP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Project Info
            </h3>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>Developer: {PROJECT.developer}</li>
              <li>Location: Northwest Brampton</li>
              <li>Units: {PROJECT.phase1Units} townhomes</li>
              <li>Launch: {PROJECT.launch}</li>
              <li>
                <a
                  href={PROJECT.developerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline"
                >
                  Official Primont Homes Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-800 pt-8">
          <p className="text-center text-xs leading-relaxed text-cream-200">
            {DISCLAIMER}
          </p>
          <p className="mt-4 text-center text-xs text-cream-200">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs">
            <Link href="/privacy" className="text-gold-400 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
