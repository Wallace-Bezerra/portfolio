import Image from 'next/image'
import React from 'react'
import * as S from "./styles"
import { useTranslations } from 'next-intl'

export const Footer = () => {
  const date = new Date().getFullYear();
  const t = useTranslations('footer');

  return (
    <S.ContainerFooter>
      <div className='footer-logo'>
        <Image src="/logo.svg" width={83} height={28} alt={t('logoAlt')} />
        <p>Wallace Bezerra ©{date}</p>
      </div>
    </S.ContainerFooter>
  )
}
