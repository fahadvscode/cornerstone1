import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { ProjectLogo } from "@/components/ui/ProjectLogo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      <div className="container-site">
        <div className="flex h-16 items-center justify-between gap-4">
          <ProjectLogo priority />

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition hover:text-forest-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/register" className="btn-primary text-xs sm:text-sm">
            VIP Access
          </Link>
        </div>

        <nav
          className="flex gap-5 overflow-x-auto border-t border-neutral-100 py-2.5 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 text-xs font-medium text-neutral-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
