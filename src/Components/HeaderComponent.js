import "./css/HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <div className="title-side">
        <h1>JRPG Memory Game</h1>
        <div className="rules-div">
          Click on different cards to earn points! If you click on a card you
          have chosen before, your progress is reset.
        </div>
        <div className="rules-div">Maximum score: 25</div>
      </div>
      <div className="score-side">
        <div className="scores">
          <div id="CurrentScore">Score: 0</div>
          <div id="BestScore">Best: 0</div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
