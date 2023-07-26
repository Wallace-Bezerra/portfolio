'use client'
import * as S from "./styles"
import Image from 'next/image'
import { Link } from 'react-scroll';
import { fadeIn } from '@/lib/variants';

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
          offset={-60}
        >
          Sobre
        </Link>
      </S.Navbar>
    </S.ContainerHeader>
  )
}
