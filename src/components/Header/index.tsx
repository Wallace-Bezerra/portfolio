'use client';
import * as S from './styles';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Link } from 'react-scroll';

export const Header = () => {
  const pathname = usePathname();

  if (pathname === '/snapblend-politica-privacidade') {
    return <></>;
  }
  return (
    <S.ContainerHeader
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image src="./logo.svg" width="126" height="42" alt="logo" priority />
      <S.Navbar>
        <Link
          to="home"
          href="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
        >
          Home
        </Link>
        <Link
          href="projetos"
          to="projetos"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
        >
          Projetos
        </Link>
        <Link
          href="sobre"
          to="sobre"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-60}
        >
          Sobre
        </Link>
      </S.Navbar>
    </S.ContainerHeader>
  );
};
