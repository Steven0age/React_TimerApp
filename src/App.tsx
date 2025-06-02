import { useState } from "react";
import type { ChangeEvent } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";

function App() {
  const [timer, setTimer] = useState(0.0);
  const [inputValue, setInputValue] = useState(1);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input: number = Number(event.target.value);
    setInputValue(input);
    setTimer(input);
  }

  function testFunction(targetName: string) {
    alert(targetName + " clicked");
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
        <Button
          clickHandler={(event) => {
            testFunction(event.currentTarget.innerText);
          }}
          buttonName={"Start"}
        />
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
