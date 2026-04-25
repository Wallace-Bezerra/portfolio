'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Rubik } from 'next/font/google';
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const ContainerAbout = styled.div`
  display: flex;
  margin-top: 160px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  h2 {
    color: #fff;
    font-family: ${rubik.style.fontFamily}, sans-serif;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
  .about {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 692px;
  }

  @media (max-width: 1150px) {
    margin-inline: auto;
    max-width: 629px;
    margin-bottom: 120px;
  }
  @media (max-width: 700px) {
    margin-top: 115px;
    margin-bottom: 80px;
  }
`;
export const AboutCard = styled(motion.div)`
  max-width: 692px;
  width: 100%;
  min-height: max-content;
  padding: 42px;
  border-radius: 22.5px;
  background: #171717;
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0.8333333730697632px 2.500000238418579px 0px
    rgba(62, 62, 62, 0.35);
  span {
    border-radius: 11.667px;
    width: max-content;
    background: #2b2b2b;
    color: #fff;
    font-family: ${rubik.style.fontFamily}, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding: 14px 30px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 48px;
    margin-left: auto;
    margin-right: auto;
  }
  > div {
    width: 100%;
  }
  p {
    color: #fff;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    letter-spacing: 0.115px;
    & + p {
      margin-top: 20px;
    }
  }
  @media (max-width: 900px) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 700px) {
    padding: 20px;
    padding-bottom: 30px;
    span {
      padding: 10px 20px;
      font-size: 18px;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      line-height: 170%;
    }
  }
`;
