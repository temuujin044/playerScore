import "../styles/stepper.css";
import { useState } from "react";
import { MinusButton, PlusButton } from "./Button";
import { Players } from "../utils/DummyData";

export default function Stepper({ personScore, index, addScore, subScore }) {
  return (
    <div className="stepper">
      <MinusButton subScore={subScore} index={index} />
      <div className="score">{personScore}</div>
      <PlusButton addScore={addScore} index={index} />
    </div>
  );
}
