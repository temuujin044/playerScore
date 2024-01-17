import { useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { Players } from "./utils/DummyData";

export default function App() {
  const [players, setPlayers] = useState(Players);

  function addScore(index) {
    const updatedPlayers = [...players];
    updatedPlayers[index].score += 1;
    updatedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(updatedPlayers);
  }

  function subScore(index) {
    const updatedPlayers = [...players];
    updatedPlayers[index].score -= 1;
    updatedPlayers.sort((a, b) => b.score - a.score);
    setPlayers(updatedPlayers);
  }

  function resetScore() {
    const updatedPlayers = [...players];
    updatedPlayers.map((element) => {
      element.score = 0;
      return element;
    });
    setPlayers(updatedPlayers);
  }

  return (
    <div className="container">
      <Header />
      {players.map((person, index) => (
        <Card
          person={person}
          key={index}
          index={index}
          addScore={addScore}
          subScore={subScore}
        />
      ))}
      <div className="bottom">
        <button
          className="reset_btn"
          onClick={() => {
            resetScore();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
