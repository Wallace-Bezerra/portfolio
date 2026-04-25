import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "en", "es", "fr", "de", "it", "nl", "hi", "ja", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";
export const siteUrl = "https://www.wallacebezerra.com";

export const localeLabels: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
  hi: "हिंदी",
  ja: "日本語",
  zh: "中文",
};

/** Emoji flags for the language menu (no extra assets). */
export const localeFlags: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  it: "🇮🇹",
  nl: "🇳🇱",
  hi: "🇮🇳",
  ja: "🇯🇵",
  zh: "🇨🇳",
};

export const localeAlternates: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  nl: "nl",
  hi: "hi",
  ja: "ja",
  zh: "zh-CN",
};

export const ogLocales: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
  nl: "nl_NL",
  hi: "hi_IN",
  ja: "ja_JP",
  zh: "zh_CN",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export function isLocale(locale: string | undefined): locale is Locale {
  return locales.includes(locale as Locale);
}
