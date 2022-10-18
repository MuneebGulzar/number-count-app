import { useState } from "react";
import { GlobalStyle } from "./Styles/GlobalStyles";
import { StyledContainer, StyledTitle, StyledNumber, ButtonsConatiner, StyledButtonRed, StyledButtonReset, StyledButtonGreen } from "./Styles/Container";
import { GrPowerReset } from 'react-icons/gr';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
function App() {
  const [cont, setCont] = useState(0);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <StyledTitle>Number count App</StyledTitle>
        <StyledNumber>{cont}</StyledNumber>
        <ButtonsConatiner>
          <StyledButtonRed onClick={() => setCont(cont - 1)}><AiFillMinusCircle /></StyledButtonRed>
          <StyledButtonReset onClick={() => setCont(0)}><GrPowerReset /></StyledButtonReset>
          <StyledButtonGreen onClick={() => setCont(cont + 1)}><AiFillPlusCircle /></StyledButtonGreen>
        </ButtonsConatiner>
      </StyledContainer>
    </>
  );
}

export default App;
