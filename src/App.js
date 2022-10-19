import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { ButtonContainer, StyledButtonDec, StyledButtonInc, StyledButtonReset, StyledContainer, StyledNumber, StyledTitle } from "./Styles/Container";
import { GrPowerReset } from 'react-icons/gr';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
function App() {
  const [cont, setCont] = useState(0);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledTitle>Number Count App</StyledTitle>
        <StyledNumber>0</StyledNumber>
        <ButtonContainer>
          <StyledButtonDec><AiFillMinusCircle /></StyledButtonDec>
          <StyledButtonReset><GrPowerReset /></StyledButtonReset>
          <StyledButtonInc><AiFillPlusCircle /></StyledButtonInc>
        </ButtonContainer>
      </StyledContainer>
    </>
  );
}

export default App;
