import Image from 'next/image'
import React from 'react'
import * as S from "./styles"

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <S.ContainerFooter>
      <div className='footer-logo'>
        <Image src="/logo.svg" width={83} height={28} alt='logo' />
        <p>Wallace Bezerra ©{date}</p>
      </div>
    </S.ContainerFooter>
  )
}
