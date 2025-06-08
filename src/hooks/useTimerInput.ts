import { useState } from "react";
import type { ChangeEvent } from "react";

export function useTimerInput(initialValue: number) {
  const [timer, setTimer] = useState<number>(initialValue);
  const [inputValue, setInputValue] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input: number = Number(event.target.value) * 100;
    setInputValue(input);
    setTimer(input);
  };

  return {
    timer,
    setTimer,
    isRunning,
    setIsRunning,
    inputValue,
    handleInputChange,
  };
}
