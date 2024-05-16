/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import react, { useState } from "react";
import Card from "./Card";

export default function App() {

  const [card, setCard] = useState("Ace of Spades")

  function randomize() {
    const suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const numbersArray = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    const randomSuit = suitArray[Math.floor(Math.random() * suitArray.length)];
    const randomNumber = numbersArray[Math.floor(Math.random() * numbersArray.length)];
    const randomCard = `${randomNumber} of ${randomSuit}`;
    setCard(randomCard);

    let color;
    if (card.includes("Diamonds")|| card.includes("Hearts")) {
      color = "solid red";
  } else {
      color = "solid black";
  }
  return color;
  }

  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card randomize={randomize} card={card} color={color} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}