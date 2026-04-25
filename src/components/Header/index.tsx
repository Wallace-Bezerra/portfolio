'use client';

import * as S from './styles';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { localeFlags, locales, type Locale } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from 'react-scroll';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

function GlobeIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export const Header = () => {
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('navigation');
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;

    const onDocPointer = (e: MouseEvent | TouchEvent) => {
      const el = wrapRef.current;
      if (!el || !(e.target instanceof Node) || el.contains(e.target)) return;
      close();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.addEventListener('mousedown', onDocPointer);
    document.addEventListener('touchstart', onDocPointer, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocPointer);
      document.removeEventListener('touchstart', onDocPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (pathname.endsWith('/snapblend-politica-privacidade')) {
    return <></>;
  }

  return (
    <S.ContainerHeader
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.LogoWrap>
        <Image src="/logo.svg" width="126" height="42" alt="Wallace Bezerra" priority />
      </S.LogoWrap>
      <S.Navbar>
        <Link
          to="home"
          href="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
        >
          {t('home')}
        </Link>
        <Link
          href="projetos"
          to="projetos"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
        >
          {t('projects')}
        </Link>
        <Link
          href="sobre"
          to="sobre"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-60}
        >
          {t('about')}
        </Link>
      </S.Navbar>
      <S.LanguageWrap ref={wrapRef}>
        <S.LanguageToggle
          type="button"
          id={`${menuId}-trigger`}
          aria-label={t('languageSwitcher')}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={`${menuId}-menu`}
          $open={open}
          onClick={toggle}
        >
          <S.LanguageToggleIcon>
            <GlobeIcon />
          </S.LanguageToggleIcon>
          <S.LanguageFlag aria-hidden>{localeFlags[currentLocale]}</S.LanguageFlag>
          <S.LanguageChevron $open={open}>
            <ChevronIcon />
          </S.LanguageChevron>
        </S.LanguageToggle>
        <S.LanguageMenu id={`${menuId}-menu`} $open={open} role="menu" aria-labelledby={`${menuId}-trigger`}>
          {locales.map((locale) => (
            <S.LanguageMenuLink
              key={locale}
              href={`/${locale}`}
              $active={locale === currentLocale}
              title={t(`languages.${locale}`)}
              aria-current={locale === currentLocale ? 'true' : undefined}
              role="menuitem"
              onClick={close}
            >
              <span aria-hidden>{localeFlags[locale]}</span>
              <span>{t(`languages.${locale}`)}</span>
            </S.LanguageMenuLink>
          ))}
        </S.LanguageMenu>
      </S.LanguageWrap>
    </S.ContainerHeader>
  );
};
