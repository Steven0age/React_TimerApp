import { useState } from "react";
import type { ChangeEvent } from "react";

// export ??
// const useTimerInput = (initialValue: number) => {

//   //setTimer(initialValue);
//   return timer;
// };

// const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {

//   // setInputValue(input);
//   // setTimer(input);
//   return input;
// };

export function useTimerInput(initialValue: number) {
  const [timer, setTimer] = useState<number>(initialValue);
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input: number = Number(event.target.value) * 100;
    setInputValue(input);
    setTimer(input);
  };

  return { timer, inputValue, setTimer, handleInputChange };
}
