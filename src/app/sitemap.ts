import { MetadataRoute } from "next";
import { locales, siteUrl } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const localizedHome = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
  }));

  return [
    ...localizedHome,
    {
      url: `${siteUrl}/snapblend-politica-privacidade`,
      lastModified,
    },
  ];
}
