'use client'
import { styled, css } from "styled-components";

interface ButtonStyled {
  variant: "primary" | "outlined" | "view" | "repo"
}
export const Button = styled.a<ButtonStyled>`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  &#linkedin{
    padding: 16px;
    &:hover{
      transform: scale(1.04);
      background-color:#2159C1;
    }
  }
  &#instagram{
    padding: 16px;
    &:hover{
      transform: scale(1.04);
      background-color:#E51F66;
    }
  }
  &#github{
    padding: 16px;
    &:hover{
      transform: scale(1.04);
      background-color:#000000;
    }
  }

  font-family: Rubik;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  transition: all .4s ease-in-out;
  &:hover{
    transform: scale(1.02);
  }
  ${({ variant }) => {
    return variant === "primary" && css`
   background: linear-gradient(131deg, #3698C9 1.59%, #28CC87 100%);
   color: #FFF;
   &:hover{
      filter: drop-shadow(0px 0px 8px #30ABB0);
    }
  `}}

  ${({ variant }) => {
    return variant === "outlined" && css`
   border-radius: 10px;
    border: 1px solid #FFF;
    color: #FFF;
    background-color: transparent;
    &:hover{
      background: #374151;
    }
  `}}

  ${({ variant }) => {
    return variant === "view" && css`
    border-radius: 10px;
    border: 1px solid #FFF;
    background:  #FFF;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 23.639px; 
    &:hover{
      transform: scale(1.03);
      box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.25);
    }
  `}}

  ${({ variant }) => {
    return variant === "repo" && css`
    border-radius: 10px;
    border: 1px solid #FFF;
    color: #FFF;
    background-color: transparent;
    font-size: 20px;
    font-weight: 600;
    line-height: 23.639px; 
    &:hover{
      transform: scale(1.03);
      background: #374151;
      /* box-shadow: 0px 0px 14px 0px rgba(255, 255, 255, 0.25); */
    }
  `}}
   
  @media (max-width: 1080px){
    padding: 10px 20px;
    font-size: 28px;
  }
  @media (max-width: 600px){
    padding: 5px 13px;
    justify-content: center;
    align-items: center;
    padding: 11px 12px;
    font-size: 24px;
    height: 100%;
    &#linkedin,&#instagram,&#github {
      width: 52px;
      height: 52px;
      img{
        width:25px;
        height: 25px;
      }
    }
  }
  @media (max-width: 420px){
    padding: 10px 28px;
    height: 46px;
    border-radius: 6px;
    &#linkedin,&#instagram,&#github{
      border-radius: 6px;
      width: 46px;
      height: 46px;
      img{
        width:20px;
        height: 20px;
      }
    }
  }
`