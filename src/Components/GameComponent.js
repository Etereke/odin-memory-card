import "./css/GameComponent.css";
import CardComponent from "./CardComponent";
import { CardData } from "../classes.js";
import React, { useState, useEffect } from "react";

function GameComponent() {
  const cards = [
    new CardData("Velvet", "Tales of Berseria", "velvet.jpg", 1),
    new CardData("Rokurou", "Tales of Berseria", "rokurou.jpg", 2),
    new CardData("Laphicet", "Tales of Berseria", "laphicet.jpg", 3),
    new CardData("Eizen", "Tales of Berseria", "eizen.jpg", 4),
    new CardData("Magilou", "Tales of Berseria", "magilou.jpg", 5),
    new CardData("Eleanor", "Tales of Berseria", "eleanor.jpg", 6),
    new CardData("Nier", "Nier Replicant", "nier.jpg", 7),
    new CardData("Weiss", "Nier Replicant", "weiss.jpg", 8),
    new CardData("Kainé", "Nier Replicant", "kaine.jpg", 9),
    new CardData("Emil", "Nier Replicant", "emil.jpg", 10),
    new CardData("Devola & Popola", "Nier Replicant", "devola_popola.jpg", 11),
    new CardData("Shadowlord", "Nier Replicant", "shadowlord.jpg", 12),
    new CardData("2B", "Nier Automata", "2b.jpg", 13),
    new CardData("9S", "Nier Automata", "9s.jpg", 14),
    new CardData("A2", "Nier Automata", "a2.jpg", 15),
    new CardData("Adam", "Nier Automata", "adam.jpg", 16),
    new CardData("Eve", "Nier Automata", "eve.jpg", 17),
    new CardData("Pascal", "Nier Automata", "pascal.jpg", 18),
    new CardData("Crono", "Chrono Trigger", "crono.jpg", 19),
    new CardData("Lucca", "Chrono Trigger", "lucca.jpg", 20),
    new CardData("Marle", "Chrono Trigger", "marle.jpg", 21),
    new CardData("Frog", "Chrono Trigger", "frog.jpg", 22),
    new CardData("Robo", "Chrono Trigger", "robo.jpg", 23),
    new CardData("Ayla", "Chrono Trigger", "ayla.jpg", 24),
    new CardData("Magus", "Chrono Trigger", "magus.jpg", 25),
  ];
  const [randomArray, setRandomArray] = useState(GetRandomOrder(25));

  function GetRandomOrder(numOfCards) {
    let tempArray = [];
    for (let i = 0; i < numOfCards; i++) {
      tempArray.push(i);
    }
    let randomArray = [];
    while (tempArray.length > 0) {
      const tempIdx = Math.floor(Math.random() * tempArray.length);
      randomArray.push(tempArray[tempIdx]);
      tempArray.splice(tempIdx, 1);
    }
    return randomArray;
  }

  function RandomizeOrder() {
    setRandomArray(GetRandomOrder(25));
  }

  useEffect(() => {
    [...document.querySelectorAll(".card")].forEach((card) => {
      document.addEventListener("click", RandomizeOrder);
    });

    return () => {
      [...document.querySelectorAll(".card")].forEach((card) => {
        document.removeEventListener("click", RandomizeOrder);
      });
    };
  });

  return (
    <div className="game">
      {randomArray.map((idx) => {
        return <CardComponent key={cards[idx].id} cardData={cards[idx]} />;
      })}

      {/* <CardComponent cardData={cards[0]} />
      <CardComponent cardData={cards[1]} />
      <CardComponent cardData={cards[2]} />
      <CardComponent cardData={cards[3]} />
      <CardComponent cardData={cards[4]} />
      <CardComponent cardData={cards[5]} />
      <CardComponent cardData={cards[6]} />
      <CardComponent cardData={cards[7]} />
      <CardComponent cardData={cards[8]} />
      <CardComponent cardData={cards[9]} />
      <CardComponent cardData={cards[10]} />
      <CardComponent cardData={cards[11]} />
      <CardComponent cardData={cards[12]} />
      <CardComponent cardData={cards[13]} />
      <CardComponent cardData={cards[14]} />
      <CardComponent cardData={cards[15]} />
      <CardComponent cardData={cards[16]} />
      <CardComponent cardData={cards[17]} />
      <CardComponent cardData={cards[18]} />
      <CardComponent cardData={cards[19]} />
      <CardComponent cardData={cards[20]} />
      <CardComponent cardData={cards[21]} />
      <CardComponent cardData={cards[22]} />
      <CardComponent cardData={cards[23]} />
      <CardComponent cardData={cards[24]} /> */}
    </div>
  );
}

export default GameComponent;
