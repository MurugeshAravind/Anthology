import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
`;
const Container = styled.div`
  text-align: center;
  background: #ccc
`;
const Header = styled.h1`
  color: palevioletred;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 14px;
  margin: 0.5em;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [minutes2, setMinutes2] = useState<string>("");
  const [seconds2, setSeconds2] = useState<string>("");
  const [time, setTime] = useState<string>(`00:00`);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const handleMinute = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setMinutes2(value);
  };
  const handleSeconds = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setSeconds2(value);
  };
  useEffect(() => {
    if (minutes && seconds && isStarted) {
      if (seconds > "60") {
        setMinutes((minutes) => `0${Number(+minutes + 1)}`);
        setSeconds((seconds) => String(+seconds - 60).padStart(2, "0"));
      }
      let interval = setInterval(() => {
        if (seconds === "00") {
          if (minutes > "00") {
            setMinutes((minutes) => String(+minutes - 1).padStart(2, "0"));
            setSeconds("59");
          } else if (minutes === "00") {
            setTime(`00:00`)
            setIsStarted(false);
          }
        } else {
          setSeconds((seconds) => String(+seconds - 1).padStart(2, "0"));
        }
      }, 1000);
      setTime(`${minutes}:${seconds}`);
      return () => clearInterval(interval);
    }
  }, [minutes, seconds, isStarted]);
  const startHandler = () => {
    setIsStarted(true);
    setMinutes(minutes2);
    setSeconds(seconds2);
  };
  const pauseOrResumeHandler = () => {
    setIsStarted(!isStarted);
  };
  const resetHandler = () => {
    setMinutes("");
    setSeconds("");
    setMinutes2("");
    setSeconds2("");
    setTime("00:00");
    setIsStarted(false);
  };
  return (
    <Container>
      <Header data-testid="running-clock">Countdown Timer</Header>
      <label>
        <Input type="number" onChange={handleMinute} value={minutes2} />
        Minutes
      </label>
      <label>
        <Input type="number" onChange={handleSeconds} value={seconds2} />
        Seconds
      </label>
      <Header data-testid="running-clock">{time}</Header>
      <Button onClick={startHandler}>START</Button>
      <Button onClick={pauseOrResumeHandler}>PAUSE / RESUME</Button>
      <Button onClick={resetHandler}>RESET</Button>
    </Container>
  );
}

export default CountdownTimer;
