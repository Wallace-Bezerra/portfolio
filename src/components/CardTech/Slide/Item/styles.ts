import { styled } from "styled-components";

export const Item = styled.div`
    padding: 20px;
    border-radius: 11.667px;
    max-width: 90%;
    transition: background .4s ease-in-out;
    &.active{
      background-color:#2B2B2B;
    }
    @media (max-width:500px){
      padding: 12px;
    }
`