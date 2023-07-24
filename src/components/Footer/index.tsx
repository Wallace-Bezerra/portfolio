import Image from 'next/image'
import React from 'react'
import * as S from "./styles"

export const Footer = () => {
  return (
    <S.ContainerFooter>
      <Image src="/logo.svg" width={83} height={28} alt='' />
      <p>Wallace Bezerra ©2023</p>
    </S.ContainerFooter>
  )
}
