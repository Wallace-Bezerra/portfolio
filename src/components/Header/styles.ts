import { motion } from "framer-motion";
import  styled  from "styled-components";
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'], weight: ["300", '400', '500', '600', '700'] })

export const ContainerHeader = styled(motion.header)`
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${rubik.style.fontFamily}, sans-serif;
  gap: 30px;
  font-size: 18px;
  border-radius: 39px;
  background: rgba(217, 217, 217, 0.08);
  backdrop-filter: blur(19.5px);
  a{
    transition: all .5s;
    &.active{
      transition: all .5s;
      color: #3DD8BC;
    }
    &:not(&.active):hover{
      color: #3DD8BC;
      opacity: 0.6;
    }
    
  }
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