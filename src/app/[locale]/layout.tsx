import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  isLocale,
  localeAlternates,
  locales,
  ogLocales,
  siteUrl,
  type Locale,
} from "@/i18n/routing";
import deMessages from "../../../messages/de.json";
import enMessages from "../../../messages/en.json";
import esMessages from "../../../messages/es.json";
import frMessages from "../../../messages/fr.json";
import ptMessages from "../../../messages/pt.json";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type HomeMetadataMessages = {
  title: string;
  description: string;
  keywords: string[];
};

const metadataMessagesByLocale: Record<Locale, { metadata: { home: HomeMetadataMessages } }> = {
  pt: ptMessages,
  en: enMessages,
  es: esMessages,
  fr: frMessages,
  de: deMessages,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "pt";
  const metadata = metadataMessagesByLocale[locale].metadata.home;
  const languages = Object.fromEntries(
    locales.map((item) => [localeAlternates[item], `/${item}`])
  );

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    creator: "Wallace Bezerra",
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `/${locale}`,
      siteName: "Wallace Bezerra",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => ogLocales[item]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    metadataBase: new URL(siteUrl),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
