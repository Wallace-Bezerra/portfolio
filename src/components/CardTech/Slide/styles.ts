'use client'
import styled from "styled-components";

export const Slider = styled.ul`
  padding: 46px 35px 75px 35px;
  width: 70%;
  height: 100%;
  color: #FFF;
  font-family: Rubik;
  /* font-size: max(1.8vw,1.2rem); */
  font-size: 32px;
  font-weight: 400;
  line-height: 140%;
  text-transform: uppercase;
  position: relative;
  .tech-images-1{
    width: 39%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    transition: all .5s;
    pointer-events: none;
    #tech-1{
      transition: all .5s;
      transform: translateY(0px);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          z-index: 1;
          width: 96.3%;
        }
        &:last-child{
          position: absolute;
          left: -12%;
          top: 59%;
          width: 61.101%;
        }
      }
    }
    #tech-2{
      transition: all .5s;
      transform: translateY(0);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          top: 73px;
          right: 25%;
          width:103.5%;
        }
  }

    }
    #tech-3{
      transition: all .5s;
      transform: translateY(0px);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
        img{
          &:first-child{
            position: relative;
            top: 74px;
            right: 11%;
            width: 94%;
            height: 83%;
          }
      }
    }
    
}
.tech-images-2{
    width: 270px;
    height: 320px;
    /* background: red; */
    position: absolute;
    top: 0px;
    right: 0px;
    pointer-events: none;
    #tech-1{
      right: 0px;
      width: 100%;
      position: absolute;
      transition: all .5s;
      transform: translateY(0px);
      height: 100%;
      @media (max-width: 600px){
        width: 257px;
        height: 275px;
      }
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          left: 0px;
          top: 0px;
          width: 65%;
          height: 68%;
        }
        &:last-child{
          position: absolute;
          left: 20%;
          top: 30%;
          height: 59%;
          width: 61%;
        }
      }
    }
    #tech-2{
      transition: all .5s;
      transform: translateY(0px);
      right: 0px;
      position: absolute;
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          top: -23%;
          width: 64%;
          right: -5%;
        }
        @media (max-width: 500px){
          
        }
  }

    }
    #tech-3{
      transition: all .5s;
      transform: translateY(0px);
      pointer-events: all;
      @media (max-width: 640px){
        position: absolute;
        right: 0px;
        top: 71px;
      }
      @media (max-width:505px){
        top: 0px;
      }
      &.active{
        opacity: 0;
        pointer-events: none;
        transform: translateY(40px);
      }
        img{
          &:first-child{
            position: relative;
            top: 27px;
            right: 0%;
            width: 89%;
            height: 76%;
          }
          &:last-child{
            position: absolute;
            left: -52%;
            width: 90%;
            height: 90%;
        }
      }
    }
}
.tech-images-3{
    width: 33%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    pointer-events: none;
    img{
      &.acitve{
        display: none;
      }
    }
    #tech-1{
      transition: all .5s;
      transform: translateY(0px);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          left: -73px;
          top: 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
    #tech-2{
      transition: all .5s;
      transform: translateY(0px);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
      img{
        &:first-child{
          position: relative;
          top: 29px;
          right: 100px;
          width: 100%;
          width: 139%;
          height: 86%;
        }
  }

    }
    #tech-3{
      transition: all .5s;
      transform: translateY(0px);
      &.active{
        opacity: 0;
        transform: translateY(40px);
      }
        img{
          &:first-child{
            position: relative;
            top: 53px;
            right: 150px;
            width: 150%;
            height: 100%;
          }
      }
    }
}
@media (max-width:660px){
  font-size: 26px;
}
@media (max-width:500px){
  font-size: 26px;
  .tech-images-1,.tech-images-2,.tech-images-3{
    #tech-1,#tech-2,#tech-3{
      width: 130px;
    }
  }
}
@media (max-width:500px){
  padding: 23px 28px 38px 17px;
  .tech-images-1,.tech-images-2,.tech-images-3{
    #tech-1,#tech-2,#tech-3{
      width: 160px;
      height: 160px;
    }
    #tech-1{
      width: 150px;
      height: 159px;
    }
    #tech-2{
      width: 118px;
    }
    #tech-3{
      width: 100px;
      height: 130px;
    }
  }
  .tech-images-1 {
    #tech-1{
      width: 130px;
      height: 159px;
      top: -65px;
      position: absolute;
    }
    #tech-2 img:first-child{
      top: -12px;
    }
    #tech-3 img:first-child{
      top: 48px;
    }
  }
  .tech-images-2{
    #tech-3{
      width: 104px;
      height: 123px;
    }
  }
  .tech-images-3{
    #tech-1{
      width: 113px;
      height: 111px;
      position: relative;
      right: -47px;
    }
    #tech-2{
      width: 160px;
      height: 160px;
      position: relative;
      right: -50px;
      img:first-child{
        width: 100%;
        height: 100%;
      }
    }
    #tech-3{
      width: 120px;
      height: 120px;
      position: relative;
      right: -50px;
      top: -29px;
      img:first-child{
        width: 150px;
        right: 79px;
      }
    }
  }
}
@media (max-width:420px){
  font-size: 20px;
}
`
