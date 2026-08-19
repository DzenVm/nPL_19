import Link from "next/link";
import { legalLinks, navLinks, site } from "@/content/site";
import { CurrentYear } from "@/components/CurrentYear";

export function SiteFooter() {
  return (
    <footer className="border-t border-night-rule bg-night text-paper-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-paper">{site.domain}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper-dim/80">
              Serwis edukacyjny poświęcony nauce języka angielskiego online. Bez logotypu i bez
              nazwy własnej, bo liczy się to, co dzieje się na lekcji, nie jak nazywa się strona.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-paper-dim/60">
              Serwis
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper-dim/90 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-paper-dim/60">
              Informacje prawne
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-paper-dim/90 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-paper-dim/90 hover:text-paper"
                >
                  {site.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-night-rule pt-6 text-xs text-paper-dim/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.domain}. Treści na stronie mają charakter edukacyjny i
            informacyjny.
          </p>
          <p>Zajęcia prowadzone zdalnie, dostępne z terenu całej Polski.</p>
        </div>
      </div>
    </footer>
  );
}
