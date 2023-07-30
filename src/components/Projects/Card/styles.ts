'use client'
import  styled  from "styled-components";
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'], weight: ["300", '400', '500', '600', '700'] })

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  img {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: block;
    max-height: 400px;
    height: 800px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    cursor: grab;
    transition:  object-position 1.2s;
    &:hover{
      object-position: bottom;
    }
  } 
  .description{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      flex: 1;
      /* height: 100%; */
      background: #252933;
      padding: 40px 40px;
      border-end-start-radius: 30px;
      border-end-end-radius: 30px;
    .content{
      display: flex;
      flex-direction: column;
      h4{
        color: #A5ACB5;
        font-family: ${rubik.style.fontFamily}, sans-serif;
        align-self: flex-start;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 12px;
      }
      
      h3{
        align-self: flex-start;
        color: #FFF;
        font-size: 24px;
        font-weight: 600;
        line-height: 23.639px; 
        margin-bottom: 14px;
      }
      p{
        align-self: flex-start;
        text-align: start;
        color: #B0B0B0;
        font-family: ${rubik.style.fontFamily}, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }
    }
  .buttons{
        display: flex;
        width: 100%;
        /* flex-wrap: wrap; */
        justify-content: flex-start;
        gap: 30px;
      }
  }
  @media (max-width: 1080px){
    img{
      height: 400px;
    }
    .buttons{
      a{
        font-size: 18px;
      }
    }
  }
  @media (max-width: 800px){
    .description{
    .content{
      h4{
        font-size: 18px;
      }
      h3{
        font-size: 22px;
      }
      p{
        font-size: 16px;
      }
    }
  }
  }
  @media (max-width: 600px){
    img{
      max-height: 240px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .description{
      padding: 20px 20px;
      border-end-start-radius: 10px;
      border-end-end-radius: 10px;
    .content{
      h4{
        font-size: 12px;
      }
      h3{
        font-size: 18px;
      }
      p{
        line-height: 19px;
        font-size: 14px;
      }
    }
    .buttons{
      gap: 20px;
      flex-direction: column;
      a{
        font-size: 16px;
      }
    }
    }
  }
  @media (max-width: 400px){
    img{
      max-height: 180px;
    }
  }
`