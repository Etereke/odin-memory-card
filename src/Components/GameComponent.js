import "./css/GameComponent.css";
import CardComponent from "./CardComponent";
import { CardData } from "../classes.js";
import React, { useState, useEffect } from "react";

function GameComponent(props) {
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
  const [usedIdList, setUsedIdList] = useState([]);

  //Returns an array with numbers from 0 to numOfCards in random order
  //This array is used to create the CardComponents from the data in the cards[] array in randomized order
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

  //Handles the game logic: the usedIdList array stores the id-s of cards you already clicked on
  //This function checks if the currently clicked element's id is in the array, if yes, the array and the score is reset, if no, the score is incremented and the id is added to the usedIdList array
  function HandleScore(e) {
    if (usedIdList.includes(e.currentTarget.id)) {
      setUsedIdList([]);
      props.ResetScore();
    } else {
      const tempArray = [].concat(usedIdList).concat(e.currentTarget.id);
      setUsedIdList(tempArray);
      props.IncrementScore();
    }
  }

  function HandleClick(e) {
    RandomizeOrder();
    HandleScore(e);
  }

  useEffect(() => {
    [...document.querySelectorAll(".card")].forEach((card) => {
      card.addEventListener("click", HandleClick);
    });

    return () => {
      [...document.querySelectorAll(".card")].forEach((card) => {
        card.removeEventListener("click", HandleClick);
      });
    };
  });

  return (
    <div className="game">
      {randomArray.map((idx) => {
        return <CardComponent key={cards[idx].id} cardData={cards[idx]} />;
      })}
    </div>
  );
}

export default GameComponent;
