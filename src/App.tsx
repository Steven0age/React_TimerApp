import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";
import { useTimerInput } from "./hooks/useTimerInput.ts";

function App() {
  const formInput = useTimerInput(0);
  const [timer, setTimer] = useState<number>(formInput.timer);
  const [inputValue, setInputValue] = useState<number>(0);
  useEffect(() => {
    runTimer;
  }, []);
  let countDownValue = useRef<number>(0);

  // function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
  //   const input: number = Number(event.target.value) * 100;
  //   setInputValue(input);
  //   setTimer(input);
  // }

  function runTimer() {
    if (countDownValue.current) {
      clearInterval(countDownValue.current);
    }
    countDownValue.current = setInterval(() => {
      formInput.setTimer((time) => {
        if (time <= 0) {
          clearInterval(countDownValue.current);
          return 0;
        } else return time - 1;
      });
    }, 10);
  }

  function pauseTimer() {
    console.log("countDownValue =", countDownValue);
    clearInterval(countDownValue.current);
  }

  function resetTimer() {
    formInput.setTimer(formInput.inputValue);
    clearInterval(countDownValue.current);
  }

  return (
    <div className="app">
      <h1>Timer App</h1>
      <p> Zeit festlegen</p>
      <input type="number" onChange={formInput.handleInputChange}></input>
      <div className="time-left">
        <p>Time left:</p>
        {/* <p>{(timer / 100).toFixed(2)} s</p> */}
        <p>{formInput.timer} s</p>
      </div>
      <div className="buttons">
        <Button clickHandler={runTimer} buttonName={"Start"} />
        <Button clickHandler={pauseTimer} buttonName={"Pause"} />
        <Button clickHandler={resetTimer} buttonName={"Reset"} />
      </div>
    </div>
  );
}

export default App;
