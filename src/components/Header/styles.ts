import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";
import { Rubik } from "next/font/google";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const ContainerHeader = styled(motion.header)`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-block: 25px;
  padding-inline: 30px;
  margin: 0 auto;
  @media (max-width: 600px) {
    img {
      width: 68.29px;
    }
  }
  @media (max-width: 420px) {
    justify-content: space-between;
    align-items: center;
    padding-block: 12px;
    padding-inline: 30px;
  }
`;

/** Evita desalinhamento vertical por baseline do wrapper do Next/Image */
export const LogoWrap = styled.span`
  display: flex;
  align-items: center;
  line-height: 0;
  flex-shrink: 0;
`;
export const Navbar = styled.nav`
  padding: 20px 80px;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${rubik.style.fontFamily}, sans-serif;
  gap: 30px;
  font-size: 18px;
  border-radius: 39px;
  background: rgba(217, 217, 217, 0.08);
  backdrop-filter: blur(19.5px);
  a {
    transition: all 0.5s;
    &.active {
      transition: all 0.5s;
      color: #3dd8bc;
    }
    &:not(&.active):hover {
      color: #3dd8bc;
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    padding: 20px 30px;
    font-size: 14px;
  }
  @media (max-width: 420px) {
    position: fixed;
    max-width: initial;
    font-size: 24px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    border-radius: 0px;
    z-index: 10;
  }
`;

export const LanguageWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  align-self: center;
  font-family: ${rubik.style.fontFamily}, sans-serif;
`;

export const LanguageToggle = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(217, 217, 217, 0.15);
  background: rgba(217, 217, 217, 0.08);
  backdrop-filter: blur(12px);
  color: #e8edf5;
  cursor: pointer;
  line-height: 1;
  transition: border-color 0.25s, background 0.25s, color 0.25s;

  &:hover,
  &:focus-visible {
    border-color: rgba(61, 216, 188, 0.45);
    color: #3dd8bc;
    outline: none;
  }

  ${({ $open }) =>
    $open &&
    `
    border-color: rgba(61, 216, 188, 0.55);
    color: #3dd8bc;
  `}

  @media (max-width: 600px) {
    padding: 6px 10px;
    gap: 6px;
  }
`;

export const LanguageToggleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    display: block;
  }
`;

export const LanguageFlag = styled.span`
  font-size: 1.25rem;
  line-height: 1;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const LanguageChevron = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  color: inherit;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: transform 0.2s ease;

  svg {
    display: block;
  }
`;

export const LanguageMenu = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  padding: 6px;
  border-radius: 14px;
  border: 1px solid rgba(217, 217, 217, 0.12);
  background: rgba(22, 26, 39, 0.95);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
  z-index: 30;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transform: ${({ $open }) =>
    $open ? "translateY(0)" : "translateY(-6px)"};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  @media (max-width: 420px) {
    right: 0;
    left: auto;
  }
`;

export const LanguageMenuLink = styled(NextLink)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "#3dd8bc" : "#c8d0e0")};
  background: ${({ $active }) =>
    $active ? "rgba(61, 216, 188, 0.12)" : "transparent"};
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(61, 216, 188, 0.1);
    color: #3dd8bc;
  }

  span:first-child {
    font-size: 1.25rem;
    line-height: 1;
  }
`;
