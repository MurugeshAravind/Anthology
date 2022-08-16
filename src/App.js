import React from "react";
import Multiples from "./components/Multiples/Multiples.component";
import PrimeIdentifier from "./components/PrimeIdentifier/PrimeIdentifier.component";
import CountdownTimer from "./components/Countdown/CountdownTimer.component";
import State from "./components/State/State.component";
import styled from "styled-components";

const WrapperDiv = styled.div`
background: #DCDCDC
display: flex
`

function App() {
  return (
    <WrapperDiv>
      <State />
      <Multiples />
      <CountdownTimer />
      <PrimeIdentifier />
    </WrapperDiv>
  );
}

export default App;
