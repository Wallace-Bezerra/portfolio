'use client'
import { motion } from "framer-motion";
import styled from "styled-components";
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'], weight: ["300", '400', '500', '600', '700'] })

/** Texto de fundo traduzível (substitui o SVG com “Projetos” desenhado em paths). */
export const TitleWatermark = styled.span`
  display: block;
  width: 100%;
  font-family: ${rubik.style.fontFamily}, sans-serif;
  font-size: clamp(2.25rem, 12vw, 7rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    #2c3844 0%,
    rgba(44, 56, 68, 0.5) 50%,
    rgba(44, 56, 68, 0) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
  pointer-events: none;
`;

export const ContainerProjects = styled.div`
margin-top: 100px;
text-align: center;
.title{
  margin-bottom: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(100px, 22vw, 165px);
  h3{
    color: #FFF;
    font-family: ${rubik.style.fontFamily}, sans-serif;
    font-size: 48px;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    padding-inline: 12px;
    padding-top: clamp(48px, 9vw, 80px);
  }
}
.swiper{
  height: 100%;
}
 
  @media (max-width: 700px){
    margin-top: initial;
    .title{
      margin-bottom: 20px;
      h3 {
        font-size: clamp(28px, 8vw, 40px);
      }
    }
  }
`
export const SwiperWrapper = styled(motion.div)`
    margin-top: 40px;
    transform: scale(1) !important;
    margin-inline: 40px;
    @media (max-width: 600px){
      margin-inline: 0;
    }
`
export const ContainerSwiper = styled.div`
  overflow: clip visible;
  width: 100%;
  height: 730px;
  .swiper-button-prev{
      color: white;
      position: fixed;
      left: -45px !important;
    }
  .swiper-button-next{
      color: white;
      position: fixed;
      right: -45px !important;
    }
    .swiper-pagination{
      top: -58px;
      position: fixed;
      left: initial;
      right: 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px 0px;
      justify-content: flex-end;
      height: min-content;
      .swiper-pagination-bullet{
        width: 20px;
        height: 20px;
        background: #27303E;
        opacity:1;
        &.swiper-pagination-bullet-active{
          background-color: #fff;
        }
      }
    }
    .swiper-slide{
      border-radius: 30px;
      text-align: start;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all .7s;
    }
    @media (max-width: 970px){
      height: 740px;
    }
 @media (max-width: 800px){
  height: 100%;
  .swiper-pagination{
    justify-content: center;
    top: initial;
    bottom: -50px;
  }
 }
 @media (max-width: 800px){
  height: initial;
 }
`