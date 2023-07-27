"use client";
import { createGlobalStyle } from "styled-components";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: url(./cursor.png), auto;
}

html,
body {
  overflow-x: hidden;
  min-height:100vh;
  /* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1F2733;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #717D94;
}
}

body {
  color: white;
  background-color: #161A27;
  
}

a {
  color: inherit;
  text-decoration: none;
}
button{
  border: none;
}
ul{
  list-style: none;
}

`;
