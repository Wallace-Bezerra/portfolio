import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-block: 25px;
  padding-inline: 30px;
  margin: 0 auto;
  @media (max-width:600px){
    img{
      width: 68.29px;
    }
  }
  @media (max-width:420px){
    justify-content: flex-end;
    padding-block: 12px;
  }
`
export const Navbar = styled.nav`
  padding: 20px 80px;
  max-width: 300px;
  display:flex;
  align-items: center;
  justify-content:center;
  font-family: Rubik;
  gap: 30px;
  font-size: 18px;
  border-radius: 39px;
  background: rgba(217, 217, 217, 0.08);
  backdrop-filter: blur(19.5px);
  @media (max-width:600px){
    padding: 20px 30px;
    font-size: 14px;
  }
  @media (max-width:420px){
    position: fixed;
    max-width: initial;
    font-size: 14px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    border-radius: 0px;
    z-index: 10;
  }
  `