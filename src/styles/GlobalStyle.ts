"use client";
import { createGlobalStyle } from "styled-components";
import { Rubik, Barlow } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'], weight: ["300", '400', '500', '600', '700'] })
const barlow = Barlow({ subsets: ['latin'], style: 'normal', weight: ["300", '400', '500', '600', '700'] })


export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: url(./cursor.png), auto;
  /* font-family: Rubik, sans-serif; */
}

html,
body {
  overflow-x: hidden;
  min-height:100vh;
  font-family: ${barlow.style.fontFamily},${rubik.style.fontFamily}, sans-serif;
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
