import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "404 · Strona nie została znaleziona",
  description: "Podany adres nie prowadzi do żadnej strony w serwisie lemneeva.top.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pl" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex flex-1 items-center">
          <section className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="kicker">Błąd 404</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Tej strony tutaj nie ma
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Adres mógł się zmienić albo zawiera literówkę. Wróć na stronę główną
              lub przejdź do kontaktu, jeśli szukasz informacji o zajęciach.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="rounded-sm bg-cobalt px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-cobalt-deep"
              >
                Wróć na stronę główną
              </Link>
              <Link
                href="/kontakt"
                className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Przejdź do kontaktu
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
