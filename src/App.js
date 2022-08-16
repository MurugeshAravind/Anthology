import React from "react";
import Multiples from "./components/Multiples/Multiples.component";
import PrimeIdentifier from "./components/PrimeIdentifier/PrimeIdentifier.component";
import CountdownTimer from "./components/Countdown/CountdownTimer.component";
import State from "./components/State/State.component";

function App() {
  return (
    <>
      <State />
      <Multiples />
      <CountdownTimer />
      <PrimeIdentifier />
    </>
  );
}

export default App;
