import "../styles/card.css";
import Stepper from "./Stepper";
import { useState } from "react";
import { Players } from "../utils/DummyData";

export default function Card({ person, index, addScore, subScore }) {
  const [players, serPlayers] = useState(Players);
  return (
    <div className="card">
      <div className="player"> {person.player} </div>
      <Stepper
        personScore={person.score}
        index={index}
        addScore={addScore}
        subScore={subScore}
      />
    </div>
  );
}
