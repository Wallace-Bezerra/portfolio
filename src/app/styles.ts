'use client'
import styled from "styled-components";

export const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 30px;
  .blur{
    border-radius: 640px;
    background: rgb(26 40 48);
    filter: blur(294.5px);
    max-width: 1000px;
    width:100%;
    max-height: 1000px;
    height:100%;
    position: absolute;
    z-index: -1;
    left: -20%;
    top: 0px;
  }
  @media (max-width:600px){
    overflow-x: hidden;
  }
`

    
