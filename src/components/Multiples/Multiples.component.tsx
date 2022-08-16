import React, {useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
`;
const Wrapper = styled.div`
  text-align: center;
  background: #ccc;
`;
const ResultWrapper = styled.div`
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0 auto;
  color: palevioletred;
  width: 30%;
  background: papayawhip;
  font-weight: bold;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 14px;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Multiples = () => {
  const [number, setNumber] = useState<number>(1);
  const [result, setResult] = useState<Array<any>>([]);
  const handleChange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setNumber(value);
    setResult([]);
  };
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let dummy = [];
    if (number) {
      for (let i = 1; i <= 10; i++) {
        dummy.push(<p key={i}>{`${number} * ${i} = ${number * i}`}</p>);
      }
      setResult(dummy);
    }
  };
  const reset = () => {
    setNumber(1);
    setResult([]);
  };
  return (
    <Wrapper>
      <Input type="number" value={number} onChange={handleChange} />
      <Button onClick={handleClick}>check the table of {number}</Button>
      <Button onClick={reset}>Reset</Button>
      {result.length > 0 ? <ResultWrapper>{result}</ResultWrapper> : null}
    </Wrapper>
  );
};
export default Multiples;
