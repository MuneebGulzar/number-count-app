import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 50vw;
    height: 50vh;
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 3px 5px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 480px){
        width: 90vw;
        height: 90vh;
    }

    @media only screen and  (max-width: 768px){
        width: 80vw;
        height: 80vh;
    }
    @media only screen and (max-width: 1279px){
        width: 65vw;
        height: 50vh;
    }
`;
export const StyledTitle = styled.h1`
    font-weight: 700;
    color: #000;
    margin-block: 5%;

    @media only screen and (max-width: 480px){
        font-size: 26px;
    }
`;

export const StyledNumber = styled.p`
    color: #000;
    font-weight: 500;
    font-size: 30px;
`;
export const ButtonsConatiner = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 8%;
    @media only screen and (max-width: 480px){
        margin-top: 10%;
        flex-direction: column;
        font-size: 16px;
    }
    @media only screen and (max-width: 768px){
        margin-top: 10%;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;
export const StyledButtonRed = styled.button`
    background-color: #F03E3E;
    color: #fff;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 500;
`;

export const StyledButtonReset = styled.button`
    background-color: #EFEFEF;
    color: #000;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 500;
`;

export const StyledButtonGreen = styled.button`
    background-color: #38B24D;
    color: #fff;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 500;
`;