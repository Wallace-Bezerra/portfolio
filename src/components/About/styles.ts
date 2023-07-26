'use client'
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  margin-bottom: 120px;
  h2{
    color: #FFF;
    font-family: Rubik;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
  }  
  img{
    object-fit: cover;
    border-radius: 30px;
    width: 360px;
    height:500px;
  }

  .about{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (max-width:1150px){
    margin-inline: auto;
    max-width: max-content;
    margin-bottom: 120px;
    .about{
      display: initial;
    }
    img{
      display: none;
    }
  }
  @media (max-width:700px){
    margin-top: 60px;
    margin-bottom: 80px;
  }
`
export const AboutCard = styled(motion.div)`
  max-width: 692px;
  min-height: 509px;
  padding: 42px;
  border-radius: 22.5px;
  background: #171717;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0.8333333730697632px 2.500000238418579px 0px rgba(62, 62, 62, 0.35);
  span{
    border-radius: 11.667px;
    width: max-content;
    background: #2B2B2B;
    color: #FFF;
    font-family: Rubik;
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
      line-height: 190%;
    }
  }
`