import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.wallacebezerra.com",
      lastModified: new Date(),
    },
  ];
}
