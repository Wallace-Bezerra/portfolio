'use client'
import { styled } from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-block: 145px;
  .and-icone{
    position: absolute;
    left: 0%;
    top: -5%;
    width: 50%;
    height: 27%;
  }
  @media (max-width: 1180px){
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    margin-block: 120px;
    .and-icone{
      left: 42%;
      top: -1%;
      width: 27%;
      height: 14%;
    }
  }
  @media (max-width: 600px){
    margin-bottom: 70px;
    .and-icone{
      left: 25%;
      width: 96%;
      height: 11%;
    }
  }
`
export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  h2{
    color: #7C8999;
    font-size: 36px;
    font-weight: 400;
    line-height: 140%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
  }
  span{
    color: #fff;
  }
  .topics{
    display: flex;
    flex-direction: column;
    gap: 85px;
  .textTopic{
    h3{
      color: #FFF;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 24px;
    }
    p{
      color: #A6AEB8;
      font-size: 20px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.117px;
    }
  }
}
`
export const VsCode = styled.div`
  margin-top: 20px;
  padding-right: 108px;
  .image-container{
    position: relative;
  }
  .chave-1{
    position: absolute;
    left: -115px;
    top: -80px;
  }
  .chave-2{
    position: absolute;
    right: -115px;
    bottom: -150px;
  }
  .vscode-icon{
    position: absolute;
    left: -6%;
    bottom: -6%;
    width: 30.3%;
    height: 36.1%;
    transition: transform .8s;
    &:hover{
      transform: scale(1.1)
    }
  }
  .bugs{
    position: absolute;
    right: -12%;
    top: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:20px;
    width: 18%;
    height: 40%;
    border-radius: 16px;
    background: rgba(130, 130, 132, 0.37);
    backdrop-filter: blur(2.5px);
    .bug-1{
      width: 56%;
      height: 30.1%;
    }
    .bug-2{
      width: 56%;
      height: 30.1%;
    }
  }
  p{
    max-width:400px;
    margin-top: 40px;
    color: #A6AEB8;
    font-size: 23.392px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.117px;
  }
  @media (max-width: 1180px){
    max-width: 505px;
  }
  @media (max-width: 600px){
    padding-right: 0;
    .image-container{
      margin: 0px;
      max-width: 320px;
    .vscode-ilustration{
      width: 320px;
    }
    .chave-1,.chave-2{
      display:none;
  }
  
}
.bugs{
    right: -4%;
  }
  p{
    font-size: 21px;
  }
}
`