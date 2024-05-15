// To destructure an object within an object, separate the "nests" you want with a colon.
// Writing `export default` before our component saves us from writing `export default [function]` at the end of the file.
import react, { useState } from "react";

export default function Item({ item: { name, price } }) {
  
  const [inCart, setInCart] = useState(false);

  function toggleCart() {
    setInCart(!inCart);
  }

  let buttonLabel;
  inCart ? buttonLabel = "Remove from Cart" : buttonLabel = "Add to Cart";

  let spanLabel;
  inCart ? spanLabel = "In Cart" : spanLabel = "Not in Cart";

  return (
    <li>
      {/* Since we destructured props.item, we save ourselves from writing `item.name` and `item.price`. */}
      <h2>{name} for only ${price}!</h2>
      <p>
        <button onClick={toggleCart}>
          <strong>{buttonLabel}</strong>
        </button>
        {/* Some manual spacing, nothing to see here... */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{spanLabel}</span>
      </p>
      {/* Some manual spacing between <Item> components, nothing to see here... */}
      <br/>
    </li>
  );
}