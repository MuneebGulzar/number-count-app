import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu';
    }
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        /* position: relative; */
    }
    button{
        padding: 10px 15px;
        border: none;
        color: #fff;
        width: 75%;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.5em;
    }
`;