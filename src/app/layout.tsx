import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTag } from "@/components/GoogleTag";

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
  title: {
    default: "Angielski online dla dorosłych, którzy nie mają czasu do stracenia",
    template: "%s · kurs angielskiego online",
  },
  description:
    "Kurs języka angielskiego online dla dorosłych w Polsce: żywe lekcje, nauka dopasowana do poziomu A1–C2, jasne zasady i realny plan nauki bez pustych obietnic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: "Angielski online dla dorosłych, którzy nie mają czasu do stracenia",
    description:
      "Żywe lekcje online, nauka dopasowana do poziomu A1–C2, jasne zasady i realny plan nauki.",
    siteName: site.domain,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <GoogleTag />
      </body>
    </html>
  );
}
