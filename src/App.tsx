import { useState, useEffect, useMemo, useRef } from "react";
import type { ChangeEvent } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";

function App() {
  const [timer, setTimer] = useState<number>(0);
  //const [inputValue, setInputValue] = useState<number>();
  useEffect(() => {
    runTimer;
  }, []);
  let countDownValue = useRef("");
  //useMemo(() => currentTime, [currentTime]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input: number = Number(event.target.value);
    //setInputValue(input);
    setTimer(input * 100);
  }

  function testFunction(targetName: string) {
    alert(targetName + " clicked");
  }

  function runTimer() {
    countDownValue = setInterval(() => {
      setTimer((time) => {
        if (time <= 0) {
          clearInterval(countDownValue);
          return 0;
        } else return time - 1;
      });
    }, 10);
  }

  function pauseTimer() {
    console.log("countDownValue =", countDownValue);
    clearInterval(countDownValue);
  }

  return (
    <div className="app">
      <h1>Timer App</h1>
      <p> Zeit festlegen</p>
      <input type="number" onChange={handleInputChange}></input>
      <div className="time-left">
        <p>Time left:</p>
        <p>{(timer / 100).toFixed(2)} s</p>
      </div>
      <div className="buttons">
        <Button clickHandler={runTimer} buttonName={"Start"} />
        <Button clickHandler={pauseTimer} buttonName={"Pause"} />
        <Button
          clickHandler={(event) => {
            testFunction(event.currentTarget.innerText);
          }}
          buttonName={"Reset"}
        />
      </div>
    </div>
  );
}

export default App;
