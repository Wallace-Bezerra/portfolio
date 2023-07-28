'use client'
import * as S from "./styles"
import Image from 'next/image'
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <S.ContainerHeader id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image src="./logo.svg" width="126" height="42" alt='logo' priority />
      <S.Navbar>
        <Link
          to='home'
          href=""
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}
        >Home
        </Link>
        <Link
          href=""
          to='projetos'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={0}>
          Projetos
        </Link>
        <Link
          href=""
          to='sobre'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-60}
        >
          Sobre
        </Link>
      </S.Navbar>
    </S.ContainerHeader>
  )
}
