'use client'
import { motion } from "framer-motion";
import  styled  from "styled-components";

export const ContainerCardTech = styled(motion.div)`
  border-radius: 22.5px;
  background: #171717;
  box-shadow: 0px 0.8333333730697632px 2.500000238418579px 0px rgba(62, 62, 62, 0.35);
  position: relative;
  width: 700px;
  height: 100%;
  overflow: hidden;
  .setas{
    display: flex;
    gap: 25px;
    position: absolute;
    bottom: 20px;
    right: 30px;
    width: 21%;
  }
  @media (max-width:760px){
    width: 100%;
    .setas{
      min-width: 100px;
      gap: 18px;
    }
  }
`
interface ArrowProps {
  $inactive: boolean;
}
export const Arrow = styled.div<ArrowProps>`
  img{
    width: 100%;
    opacity: ${({ $inactive }) => $inactive ? "0.5" : '1'};
    cursor: ${({ $inactive }) => $inactive ? 'not-allowed' : 'pointer'};
  }
`


interface SliderWrapperProps {
  $state: number
}
export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  width: calc(100% * 3);
  transform: ${({ $state }) => `translateX(calc(${$state}* -33.1%))`};
  transition: all .6s;
`
