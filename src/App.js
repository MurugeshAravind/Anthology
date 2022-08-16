import React from "react";
import Multiples from "./components/Multiples/Multiples.component";
import PrimeIdentifier from "./components/PrimeIdentifier/PrimeIdentifier.component";
import CountdownTimer from "./components/Solution/CountdownTimer.component";
import State from "./components/State/State.component";
import DynamicEdit from "./components/DynamicEdit/DynamicEdit.component";

function App() {
  return (
    <>
      <State />
      <Multiples />
      <CountdownTimer />
      <PrimeIdentifier />
      <DynamicEdit />
    </>
  );
}

export default App;
