import "./Button.css";

type ButtonProbs = {
  buttonName: string;
};
function Button({ buttonName }: ButtonProbs) {
  return <button>{buttonName}</button>;
}
export default Button;
