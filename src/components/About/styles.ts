'use client'
import { motion } from "framer-motion";
import { keyframes, styled } from "styled-components";
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'], weight: ["300", '400', '500', '600', '700'] })

const move = keyframes`
  to{
    transform: translateY(20px)
  }
  from{
    transform: translateY(0px)
  }
`
export const ContainerAbout = styled.div`
  display: flex;
  margin-top: 160px;
  flex-direction: column;
  margin-bottom: 120px;
  h2{
    color: #FFF;
    font-family: ${rubik.style.fontFamily}, sans-serif;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
  }  
.wrapper{
    width: 454px;
    height: 500px;
}
  .about{
    display: flex;
    position: relative;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    .bg-aboutImage{
      width: 454px;
      height: 387.143px;
      border-radius: 22px;
      border-start-end-radius: 200px;
      background: rgba(47, 47, 47, 0.39);
      position: absolute;
      top: 73px;
      .about-image{
        position: absolute;
        width: 240px;
         height: 471px;
        top: -73px;
        right: 66px;
      }
      .vscode-bar{
      position: absolute;
      width: 44px;
      height: 480px;
      top: -43px;
      left: 0px;
    }
    .vscode-icon{
      position: absolute;
      top: 20px;
      left: 60px;
      z-index: -1;
      filter: saturate(50%) blur(4px);
      transform: rotate(345deg);
    }
    .figma{
      position: absolute;
      bottom: -70px;
      right: -9px;
      width: 107px;
      height: 161px;
      filter: blur(2.5px);
      transform: rotate(5deg);
      animation: ${move} 3s ease-in-out infinite alternate;
    }
    .blur{
      position: absolute;
      left: 170px;
      transition: all .5s;
      width: 359px;
      height: 389px;
      border-radius: 640px;
      background: rgba(125, 161, 182, 0.72);
      z-index:2;
      filter: blur(207.5px);
    }
    }
   
  }

  @media (max-width:1150px){
    margin-inline: auto;
    max-width: 629px;
    margin-bottom: 120px;
    flex-direction: column;
    .about{
      gap: 60px;
    }
  }
  @media (max-width:700px){
    margin-top: 115px;
    margin-bottom: 80px;
  }
  @media (max-width:530px){
    .wrapper{
      width: 100%;
      height: 360px;
}
    .about{
      .bg-aboutImage{
        width: 326px;
        height: 262px;
        border-radius: 22px;
        border-start-end-radius: 144px;
        background: rgba(47, 47, 47, 0.39);
        position: absolute;
        top: 71px;
        .about-image{
          position: absolute;
          width: 163px;
          height: 319px;
          top: -44px;
          right: 66px;
        }
        .vscode-bar{
          position: absolute;
          width: 29px;
          height: 326px;
          top: -43px;
          left: 0px;
      }
      .vscode-icon{
        position: absolute;
        top: 20px;
        left: 60px;
        z-index: -1;
        filter: saturate(50%) blur(4px);
        transform: rotate(345deg);
        width: 87px;
      }
      .figma{
        position: absolute;
        bottom: -70px;
        right: -9px;
        width: 107px;
        height: 161px;
        filter: blur(2.5px);
        transform: rotate(5deg);
      }
      .blur{
        position: absolute;
        left: 170px;
        width: 359px;
        height: 389px;
        border-radius: 640px;
        background: rgba(125, 161, 182, 0.72);
        filter: blur(207.5px);
      }
    }
  }
  }
`
export const AboutCard = styled(motion.div)`
  max-width: 692px;
  min-height: 509px;
  padding: 42px;
  border-radius: 22.5px;
  background: #171717;
  display: flex;
  position: relative;
  z-index: -1;
  flex-direction: column;
  box-shadow: 0px 0.8333333730697632px 2.500000238418579px 0px rgba(62, 62, 62, 0.35);
  span{
    border-radius: 11.667px;
    width: max-content;
    background: #2B2B2B;
    color: #FFF;
    font-family: ${rubik.style.fontFamily}, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    padding: 14px 30px;
    line-height: 140%;
    text-transform: uppercase;
    margin-bottom: 48px;
  }
  p{
    color: #FFF;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    letter-spacing: 0.115px;
    &+p{
      margin-top:32px;
    }
  }
  @media (max-width: 900px){
    min-height: max-content;
    p{
      font-size: 18px;
    }
  }
  @media (max-width: 700px){
    padding: 20px;
    padding-bottom: 30px;
    span{
      padding: 10px 20px;
      font-size: 18px;
      margin-bottom: 30px;
    }
    p{
      font-size: 16px;
      line-height: 170%;
    }
  }
`