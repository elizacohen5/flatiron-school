export default function Card({randomize, card, color }) {

    console.log(card);
    console.log(card.includes("Diamonds"));


//     function borderColor() {
//     // if (card.includes("Diamonds")|| card.includes("Hearts")) {
//     //     color = "solid red";
//     // } else {
//     //     color = "solid black";
//     // }
// }


    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: {color}, borderRadius: "10px"
        }}>
            {card}
            <button onClick={randomize} >Nah.</button>
        </h2>
    )
  }