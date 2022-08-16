import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: #dcdcdc;
  margin-top: 2rem;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 18px;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Paragraph = styled.p`
  color: palevioletred;
  font-size: 20px;
  font-weight: bold;
  display: inline;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
`;

const PrimeIdentifier = () => {
  const [value, setValue] = useState<number>(0);
  const [isPrimeValue, setIsPrimeValue] = useState<boolean>(false);
  const [isVisible, setIsVisibile] = useState<boolean>(false);
  const handleChange = (e: { target: { value: any } }) => {
    if (e) {
      const { value } = e.target;
      setValue(value);
      setIsVisibile(false);
    }
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    console.log(value);
    e.preventDefault();
    setIsPrimeValue(isPrime(value));
    setIsVisibile(true);
  };
  const reset = () => {
    setValue(0);
  };
  // Function to check the number is prime or not
  const isPrime = (number: number) => {
    if (number < 1) return false;
    if (number > 2 && number % 2 === 0) return false;
    const s = Math.sqrt(number);
    for (let i = 3; i <= s; i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  };
  const checkForPrime = () => {
    if (isVisible && isPrimeValue)
      return <Paragraph>It is a prime number</Paragraph>;
    else if (isVisible && !isPrimeValue)
      return <Paragraph>It is not a prime number</Paragraph>;
  };
  return (
    <Container>
      <Input type="number" value={value} onChange={handleChange} />
      &nbsp;<Button onClick={handleClick}>Check for Prime / Not</Button>
      <Button onClick={reset}>Reset</Button>
      {checkForPrime()}
    </Container>
  );
};
export default PrimeIdentifier;
