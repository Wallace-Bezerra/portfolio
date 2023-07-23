'use client'
import { styled } from "styled-components";

export const ContainerTech = styled.div`
    .tech{
      display: flex;
      gap: 30px;
      justify-content: space-between;
      margin-bottom: 150px;
      align-items: center;
    }
  h2{
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-family: Rubik;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
 
  }
  @media (max-width:1180px){
    .tech{
    flex-direction: column-reverse;
    }
    
    .title{
      text-align: center;
    }
  }
  @media (max-width:640px){
    .tech{
      margin-bottom: 60px;
    }
    .title{
      text-align: start;
    }
  }
`
export const Skills = styled.div`
   max-width: 400px;
  h2{
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
    text-transform: uppercase;
    span{
      color: #7C8999;
    }
  }
  .side,.below{
      color:  #A6AEB8;
      font-size: 24px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.16px;
    }
    .below{
      display: none;
    }
    
    @media (max-width:1180px){
      max-width:600px;
      .side{
        display: none;
      }
      .below{
        display: inline-block;
      }
  }

`