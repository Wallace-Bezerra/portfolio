'use client'
import { Swiper as Slider, SwiperSlide } from 'swiper/react';
import { styled } from "styled-components";

export const ContainerProjects = styled.div`
margin-block: 100px;
text-align: center;
.title{
  margin-bottom: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  img{
    width: 100%;
  }
  h3{
    color: #FFF;
    font-family: Rubik;
    font-size: 48px;
    font-weight: 500;
    line-height: normal;
    position: absolute;
    top: 80px;
  }
}
 
  @media (max-width: 700px){
    /* margin-block: initial; */
    .title{
      margin-bottom: initial;
    }
  }
`
export const SwiperWrapper = styled.div`
    margin-top: 40px;
    transform: scale(1);
    margin-inline: 40px;
    @media (max-width: 600px){
      margin-inline: 20px;
    }
`
export const Swiper = styled(Slider)`
  overflow: clip visible;
  width: 100%;
  height:680px;
  .swiper-button-prev{
      color: white;
      position: fixed;
      left: -45px !important;
    }
  .swiper-button-next{
      color: white;
      position: fixed;
      right: -45px !important;
    }
    .swiper-pagination{
      top: -58px;
      left: initial;
      right: 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px 0px;
      justify-content: flex-end;
      height: min-content;
      .swiper-pagination-bullet{
        width: 20px;
        height: 20px;
        background: #27303E;
        opacity:1;
        &.swiper-pagination-bullet-active{
          background-color: #fff;
        }
      }
    }
 @media (max-width: 800px){
  .swiper-pagination{
    justify-content: center;
    top: initial;
    bottom: -50px;
  }
 }
 @media (max-width: 800px){
  height: initial;
 }
`
export const Slide = styled(SwiperSlide)`
 border-radius: 30px;
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .7s;
`