import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, type Locale } from "./routing";

const messageLoaders: Record<
  Locale,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  pt: () => import("../../messages/pt.json"),
  en: () => import("../../messages/en.json"),
  es: () => import("../../messages/es.json"),
  fr: () => import("../../messages/fr.json"),
  de: () => import("../../messages/de.json"),
  it: () => import("../../messages/it.json"),
  nl: () => import("../../messages/nl.json"),
  hi: () => import("../../messages/hi.json"),
  ja: () => import("../../messages/ja.json"),
  zh: () => import("../../messages/zh.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isLocale(requested) ? requested : defaultLocale;
  const messages = (await messageLoaders[locale]()).default;

  return {
    locale,
    messages,
  };
});
