import { useState } from "react";
import "./App.css";
import Button from "./assets/Button/Button.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Timer App</h1>
      <p> Zeit festlegen</p>
      <input placeholder="0"></input>
      <div className="time-left">
        <p>Time left:</p>
        <p>0.000s</p>
      </div>
      <div className="buttons">
        <Button buttonName={"Start"} />
        <Button buttonName={"Pause"} />
        <Button buttonName={"Reset"} />
      </div>
    </div>
  );
}

export default App;
