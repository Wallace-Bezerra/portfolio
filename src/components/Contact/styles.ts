'use client'
import { styled } from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  justify-content: center;
  margin-bottom: 150px;
  h2{
    color: #7C8999;
    font-family: Rubik;
    font-size: 40px;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  p{
    color: #FFF;
    font-family: Rubik;
    font-size: 36px;
    font-weight: 400;
    line-height: normal;
  }
  .contacts{
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 890px){

    h2{
      font-size: 32px;
      max-width: 420px;
      margin-bottom: 10px;
    }
    p{
      font-size: 24px;
    }
  }
  @media (max-width: 600px){
    margin-bottom: 110px;
  }
  @media (max-width: 400px){
    
    h2{
      font-size: 26px;
    }
    p{
      font-size: 18px;
    }
  }
`