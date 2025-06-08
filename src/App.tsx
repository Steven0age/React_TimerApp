import { useEffect, useRef } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";
import { useTimerInput } from "./hooks/useTimerInput.ts";

function App() {
  const timerHook = useTimerInput(0);

  useEffect(() => {
    runTimer;
  }, []);

  let countDownValue = useRef<number>(0);

  function runTimer() {
    if (countDownValue.current) {
      clearInterval(countDownValue.current);
    }
    timerHook.setIsRunning(true);
    countDownValue.current = setInterval(() => {
      timerHook.setTimer((time) => {
        if (time <= 0) {
          timerHook.setIsRunning(false);
          clearInterval(countDownValue.current);
          return 0;
        } else return time - 1;
      });
    }, 10);
  }

  function pauseTimer() {
    timerHook.setIsRunning(false);
    clearInterval(countDownValue.current);
  }

  function resetTimer() {
    timerHook.setTimer(timerHook.inputValue);
    timerHook.setIsRunning(false);
    clearInterval(countDownValue.current);
  }

  return (
    <div className="app">
      <h1>Timer App</h1>
      <p> Zeit festlegen</p>
      <input
        disabled={timerHook.isRunning}
        type="number"
        onChange={timerHook.handleInputChange}
      ></input>
      <div className="time-left">
        <p>Time left:</p>
        <p>{(timerHook.timer / 100).toFixed(2)} s</p>
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
