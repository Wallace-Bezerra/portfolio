'use client'
import Image from 'next/image'
import * as S from "./styles"
// import Link from 'next/link'
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <S.ContainerHeader id="home">
      <Image src="./logo.svg" width="126" height="42" alt='logo' />
      <S.Navbar>
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}
        >Home
        </Link>
        <Link
          to='projetos'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}>
          Projetos
        </Link>
        <Link
          to='sobre'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}
        >
          Sobre
        </Link>
      </S.Navbar>
    </S.ContainerHeader>
  )
}
