import { useState } from "react";
import type { ChangeEvent } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";

function App() {
  const [timer, setTimer] = useState(1);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input: number = Number(event.target.value);
    setInputValue(input);
    setTimer(input);
  }

  function testFunction(targetName: string) {
    alert(targetName + " clicked");
  }

  function updateTimeLeft() {
    let newTime: number = 0;
    console.log("1newTime =", newTime);
    newTime += timer;
    console.log("2newTime =", newTime);
    //console.log("type of newTime =", typeof newTime);
    newTime = newTime - 1;
    //console.log("type of newTime =", typeof newTime);
    console.log("3newTime =", newTime);
    setTimer(newTime);
    console.log("timeleft =", timer);
  }

  function runTimer() {
    let countDownValue = timer;
    if (timer > 9) {
      setInterval(updateTimeLeft, 1000);
      console.log("timer =", timer);
    }
  }

  return (
    <div className="app">
      <h1>Timer App</h1>
      <p> Zeit festlegen</p>
      <input type="number" onChange={handleInputChange}></input>
      <div className="time-left">
        <p>Time left:</p>
        <p>{timer}s</p>
      </div>
      <div className="buttons">
        <Button clickHandler={runTimer} buttonName={"Start"} />
        <Button
          clickHandler={(event) => {
            testFunction(event.currentTarget.innerText);
          }}
          buttonName={"Pause"}
        />
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
