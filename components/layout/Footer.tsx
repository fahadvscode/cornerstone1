import Link from "next/link";
import { CONTACT, DISCLAIMER, NAV_LINKS, PROJECT } from "@/lib/constants";
import { formatPhoneLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-forest-900 text-cream-100">
      <div className="container-site section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 font-heading text-2xl font-bold text-gold-400">
              {PROJECT.marketingName}
            </h2>
            <p className="text-sm leading-relaxed text-cream-200">
              {PROJECT.phase1Units} freehold townhomes by {PROJECT.developer} in
              Northwest Brampton. {PROJECT.pricing}. Launching {PROJECT.launch}.
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
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cream-200 transition hover:text-gold-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h3>
            <address className="space-y-2 text-sm not-italic text-cream-200">
              <p className="font-semibold text-white">{CONTACT.agent}</p>
              <p>{CONTACT.title}</p>
              <p>{CONTACT.brokerage}</p>
              <p>{CONTACT.brokerageAddress}</p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition hover:text-gold-400"
                >
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={formatPhoneLink(CONTACT.phone)}
                  className="transition hover:text-gold-400"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold-400"
                >
                  fahadsold.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
              Project Info
            </h3>
            <ul className="space-y-2 text-sm text-cream-200">
              <li>Developer: {PROJECT.developer}</li>
              <li>Location: Northwest Brampton</li>
              <li>Units: {PROJECT.phase1Units} townhomes</li>
              <li>Pricing: {PROJECT.pricing}</li>
              <li>Launch: {PROJECT.launch}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-800 pt-8">
          <p className="text-center text-xs leading-relaxed text-cream-200">
            {DISCLAIMER}
          </p>
          <p className="mt-4 text-center text-xs text-cream-200">
            © {new Date().getFullYear()} {CONTACT.agent} | {CONTACT.brokerage}.
            All rights reserved.
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
