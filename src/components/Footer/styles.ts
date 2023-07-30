'use client'
import  styled  from "styled-components";

export const ContainerFooter = styled.footer`
  position: absolute;
  padding-left: 40px;
  bottom: 0px;
  left: 0px;
  background-color: #171E29;
  height: 80px;
  width: 100%;
  .footer-logo{
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: start;
  }
  @media (max-width: 700px){
    height: 60px;
    img{
      width: 80px;
    }
  }
`