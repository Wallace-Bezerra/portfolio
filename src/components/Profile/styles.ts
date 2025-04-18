'use client';
import { motion } from 'framer-motion';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const spinner = keyframes`
to{
  rotate: 0deg;
}
from{
  rotate: 360deg;
}
`;
const pointer = keyframes`
0%{
  transform: translateX(7%)
}
5%{
  transform: translateX(20%)
}
20%{
  transform: translateX(20%)
   scale(0.8)
}
30%{
  transform: translateX(20%)
  scale(1)
}
40%{
  transform: translate(379%, -192%)
}
45%{
  transform: translate(379%, -192%)
 scale(0.8)
}
50%{
  transform: translate(379%, -192%)
  scale(1)
}
60%{
  transform: translate(-73%, -295%);
}
65%{
  transform: translate(-73%, -295%)
  scale(0.8)
}
72%{
  transform: translate(-73%, -295%)
  scale(1)
}
84%{
  transform: translate(-14%, -10%)
}
93%{
  transform: translate(-10%, -7%)
}
100%{
  transform: translateX(7%)
}
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-top: 40px;
  @media (max-width: 1180px) {
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 420px) {
    margin-top: 0px;
  }
`;
export const Emphasis = styled(motion.div)`
  position: relative;
  span {
    color: #3dd8bc;
    font-family: Rubik;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 15px;
  }
  h1 {
    max-width: 395px;
    font-size: 52px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 22px;
  }
  p {
    color: #a6aeb8;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    max-width: 610px;
    margin-bottom: 50px;
  }
  .vscode-background {
    position: absolute;
    bottom: -90%;
    right: -1%;
    z-index: -1;
  }
  @media (max-width: 1180px) {
    .vscode-background {
      width: 55%;
      bottom: -88%;
      right: 8%;
      z-index: -1;
    }
  }
  @media (max-width: 600px) {
    .vscode-background {
      width: 59%;
      height: 154%;
      left: 38%;
      top: -15%;
    }
    span {
      font-size: 18px;
    }
    h1 {
      font-size: 42px;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 420px) {
    .vscode-background {
      top: 0%;
    }
    span {
      font-size: 18px;
    }
    h1 {
      max-width: 305px;
      font-size: 32px;
      margin-bottom: 10px;
    }
    p {
      font-size: 17px;
      line-height: 23px;
      margin-bottom: 30px;
    }
  }
`;
export const Contact = styled(motion.div)`
  display: flex;
  gap: 30px;
  .group-button {
    display: flex;
    gap: 30px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 480px;
    .group-button {
      display: flex;
      gap: 30px;
      gap: 13px;
      a {
        width: 100%;
        height: 52px;
      }
    }
  }
  @media (max-width: 420px) {
    gap: 20px;
    .group-button {
      display: flex;
      gap: 30px;
      gap: 13px;
      a {
        width: 100%;
        height: 46px;
      }
    }
  }
`;
export const ProfileUser = styled(motion.div)`
  position: relative;
  margin-right: 40px;
  max-width: 320px;
  width: 100%;
  .profile {
    border-radius: 20px;
    object-fit: cover;
    width: 295px;
    height: 450px;
  }
  .react-element {
    position: absolute;
    width: 28.571%;
    height: 20.833%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: rgba(130, 130, 132, 0.37);
    filter: drop-shadow(0px 0px 52px rgba(255, 255, 255, 0.25));
    backdrop-filter: blur(6px);
    border: 1px solid #b2b4bb0f;
    bottom: -5%;
    left: -12%;
    img {
      width: 50%;
      height: 50%;
    }
  }
  .icone-computer {
    position: absolute;
    width: 28.571%;
    height: 20.833%;
    display: flex;
    filter: drop-shadow(0px 0px 52px rgba(255, 255, 255, 0.25));
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: rgba(130, 130, 132, 0.37);
    backdrop-filter: blur(6px);
    border: 1px solid #b2b4bb0f;
    right: -12%;
    top: 46%;
    img {
      width: 50%;
      width: 50%;
    }
  }
  .tree-structure {
    position: absolute;
    left: -29%;
    top: 30%;
    filter: drop-shadow(0px 0px 52px rgba(255, 255, 255, 0.25));
    width: 20.588%;
    height: 14.583%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pointer {
    position: absolute;
    bottom: -12%;
    left: 1%;
    animation: ${pointer} 12s infinite;
    width: 25%;
    height: 19%;
  }
  @media (max-width: 600px) {
    margin-right: 0px;
  }
  @media (max-width: 480px) {
    width: 237px;
    height: 322px;
    .profile {
      /* max-width: 200px;
      height: 300px; */
      /* max-width: 256px;
     height: 328px; */
      /* width: 360px;
    height: 459px */
      position: absolute;
      left: -14px;
      width: 269px;
      height: 416px;
    }
  }
`;
export const Spinner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54.412%;
  height: 38.542%;
  border-radius: 50%;
  background-color: rgba(59, 62, 69, 0.26);
  backdrop-filter: blur(20px);
  position: absolute;
  bottom: -20%;
  right: -20%;
  .name-spinner {
    position: absolute;
    flex: 1;
    width: 94%;
    height: 94%;
    animation: ${spinner} 14s linear infinite;
  }
  .logo-spinner {
    position: absolute;
    width: 45%;
    height: 45%;
  }
`;
export const Image = styled.div`
  position: relative;
  .blur {
    position: absolute;
    border-radius: 640px;
    background: rgb(139 233 255 / 29%);
    filter: blur(207.5px);
    width: 400px;
    height: 420px;
  }
`;
