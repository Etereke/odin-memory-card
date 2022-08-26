import CardComponent from "./CardComponent";

function GameComponent() {
  return (
    <div className="Game">
      <div>This is Game</div>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

export default GameComponent;
