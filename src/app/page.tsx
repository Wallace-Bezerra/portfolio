import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase().slice(0, 2));

  for (const lang of preferred) {
    const match = locales.find((l) => l === lang);
    if (match) return match;
  }

  return defaultLocale;
}

export default async function Home() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = detectLocale(acceptLanguage);
  redirect(`/${locale}`);
}
