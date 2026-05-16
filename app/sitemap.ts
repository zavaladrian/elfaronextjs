import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.elfaros.com",
      lastModified: new Date("2026-05-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.elfaros.com/elfaro",
      lastModified: new Date("2026-05-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.elfaros.com/elfarotwo",
      lastModified: new Date("2026-05-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.elfaros.com/aboutus",
      lastModified: new Date("2026-05-16"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
