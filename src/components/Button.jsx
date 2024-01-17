import "../styles/button.css";
import { PlusIcon, MinusIcon } from "./Icons";

export function Button({ addScore, index }) {
  return (
    <button className="plus_btn" onClick={() => addScore(index)}>
      <PlusIcon />
    </button>
  );
}

export function MinusButton({ subScore, index }) {
  return (
    <button
      className="minus_btn"
      onClick={() => {
        subScore(index);
      }}
    >
      <MinusIcon />
    </button>
  );
}
