'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import * as S from "./styles"

export const Header = () => {
  return (
    <S.ContainerHeader>
      <Image src="./logo.svg" width="126" height="42" alt='logo' />
      <S.Navbar>
        <a href="#home">Home</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
      </S.Navbar>
    </S.ContainerHeader>
  )
}
