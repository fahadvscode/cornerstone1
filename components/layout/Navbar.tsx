import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-200 bg-cream-50/95 backdrop-blur-sm">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="shrink-0">
            <span className="block font-heading text-xl font-bold text-forest-900 lg:text-2xl">
              Cornerstone Towns
            </span>
            <span className="block text-xs font-medium uppercase tracking-widest text-gold-500">
              Brampton by Primont Homes
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest-800 transition hover:text-forest-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/register" className="btn-primary text-xs sm:text-sm">
              VIP Access
            </Link>
          </div>
        </div>

        <nav
          className="flex gap-4 overflow-x-auto border-t border-cream-200 py-2 xl:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-xs font-medium text-forest-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
