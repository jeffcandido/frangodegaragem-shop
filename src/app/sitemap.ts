import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://frangodegaragem.shop",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://frangodegaragem.shop/natal",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://frangodegaragem.shop/cart",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
