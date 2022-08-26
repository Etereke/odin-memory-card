import "./css/CardComponent.css";

function CardComponent(props) {
  return (
    <div className="card">
      <img
        src={require(`../img/${props.cardData.src}`)}
        alt={props.cardData.name}
      />
      <div className="card-name">{props.cardData.name}</div>
      <div className="card-origin">{props.cardData.game}</div>
    </div>
  );
}

export default CardComponent;
