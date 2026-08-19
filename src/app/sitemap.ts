import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";
import { site } from "@/content/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  cacheLife("days");

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/metoda", priority: 0.8, changeFrequency: "monthly" },
    { path: "/poziomy", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sprawdz-poziom", priority: 0.7, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.5, changeFrequency: "yearly" },
    { path: "/polityka-prywatnosci", priority: 0.2, changeFrequency: "yearly" },
    { path: "/regulamin", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
