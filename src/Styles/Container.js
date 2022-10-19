import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 80vw;
    height: 80vh;
    background-color: #fff;
    box-shadow: 3px 3px 5px grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 70vw;
    }
    @media screen and (min-width: 769px) and (max-width: 1279px){
        width: 60vw;
    }
    @media screen and (min-width: 1280px){
        width: 50vw;
        height: 60vh;
    }
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    position: absolute;
    top: 10%;
`;

export const StyledNumber = styled.p`
    text-align: center;
    font-size: 2em;
    font-weight: 500;
    position: absolute;
    top: 35%;
`;
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    position: absolute;
    bottom: 10%;
    @media screen and (min-width: 1280px){
        flex-direction: row;
        width: 60%;
        justify-content: space-evenly;
    }
`;
export const StyledButtonDec = styled.button`
    background-color: #EE3F3B;
`;
export const StyledButtonReset = styled.button`
    background-color: #F0EEEF;
`;
export const StyledButtonInc = styled.button`
    background-color: #38B446;
`;

export const StyledFooterContainer = styled.div`
    width: 100%;
    padding: 10px 15px;
    position: relative;
    bottom: 0;
    font-size: 1.5em;
    color: grey;
`;
export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
`;

export const StyledFooterLink = styled.a`
    text-decoration: none;
    color: grey;
`;