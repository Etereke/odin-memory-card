import { useState } from "react";
import "./App.css";
import GameComponent from "./Components/GameComponent";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function IncrementScore() {
    setCurrentScore(currentScore + 1);
  }

  function ResetScore() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
  }

  return (
    <div className="app">
      <HeaderComponent currentScore={currentScore} bestScore={bestScore} />
      <GameComponent IncrementScore={IncrementScore} ResetScore={ResetScore} />
    </div>
  );
}

export default App;
