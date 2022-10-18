import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ubuntu';
    }
    
    button{
        cursor: pointer;
        box-shadow: 5px 5px rgba(0,0,0,0.5);
        font-family: 'Ubuntu';
        width: 100%; 
        @media only screen and (max-width: 768px){
        width: 50%;
        }
    }
`;
