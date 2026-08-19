import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          aria-label={`${site.domain}, strona główna`}
        >
          {site.domain}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-cobalt"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kontakt"
            className="hidden rounded-sm bg-cobalt px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-cobalt-deep sm:inline-block"
          >
            Umów lekcję próbną
          </Link>

          <details className="relative md:hidden">
            <summary
              className="flex cursor-pointer list-none items-center gap-2 rounded-sm border border-rule px-3 py-2 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden"
              aria-label="Otwórz menu"
            >
              Menu
            </summary>
            <nav
              className="absolute right-0 top-[calc(100%+0.5rem)] w-56 rounded-sm border border-rule bg-paper p-3 shadow-lg shadow-ink/10"
              aria-label="Nawigacja mobilna"
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-sm px-3 py-2 text-sm font-medium text-ink-soft hover:bg-paper-dim hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-rule pt-2">
                  <Link
                    href="/kontakt"
                    className="block rounded-sm bg-cobalt px-3 py-2 text-center text-sm font-semibold text-paper"
                  >
                    Umów lekcję próbną
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
