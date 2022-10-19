import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { ButtonContainer, StyledButtonDec, StyledButtonInc, StyledButtonReset, StyledContainer, StyledFooter, StyledFooterContainer, StyledFooterLink, StyledNumber, StyledTitle } from "./Styles/Container";
import { GrPowerReset } from 'react-icons/gr';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs';
function App() {
  const [cont, setCont] = useState(0);

  const increasehandler = () => {
    setCont(cont + 1);
  }
  const decreasehandler = () => {
    setCont(cont - 1);
  }
  const resethandler = () => {
    setCont(0);
  }

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledTitle>Count Number App</StyledTitle>
        <StyledNumber>{cont}</StyledNumber>
        <ButtonContainer>
          <StyledButtonDec onClick={decreasehandler}><AiFillMinusCircle /></StyledButtonDec>
          <StyledButtonReset onClick={resethandler}><GrPowerReset /></StyledButtonReset>
          <StyledButtonInc onClick={increasehandler}><AiFillPlusCircle /></StyledButtonInc>
        </ButtonContainer>
      </StyledContainer>
      <StyledFooterContainer>
        <StyledFooter><StyledFooterLink href="https://github.com/MuneebGulzar" target="_blank"><BsGithub /> MuneebGulzar</StyledFooterLink></StyledFooter>
      </StyledFooterContainer>
    </>
  );
}

export default App;
