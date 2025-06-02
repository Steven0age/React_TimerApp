import "./Button.css";
import type { MouseEventHandler } from "react";

type ButtonProps = {
  buttonName: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};
function Button({ buttonName, clickHandler }: ButtonProps) {
  return <button onClick={clickHandler}>{buttonName}</button>;
}
export default Button;
