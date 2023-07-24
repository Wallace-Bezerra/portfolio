'use client'
import { styled } from "styled-components";

export const ContainerFooter = styled.footer`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 40px;
  gap: 20px;
  bottom: 0px;
  left: 0px;
  background-color: #171E29;
  height: 80px;
  width: 100%;
  @media (max-width: 700px){
    height: 60px;
    img{
      width: 80px;
    }
  }
`