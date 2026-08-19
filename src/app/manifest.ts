import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Kurs angielskiego online, ${site.domain}`,
    short_name: site.domain,
    description:
      "Kurs języka angielskiego online dla dorosłych w Polsce: żywe lekcje, poziomy A1–C2.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e4",
    theme_color: "#24446f",
    lang: "pl",
    icons: [
      { src: "/icons/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/app-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
