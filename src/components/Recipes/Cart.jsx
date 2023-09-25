import React from "react";

export default function Cart({carrotItems, handleRemoveFromCart }) {
  return (
    <div className="carrot_categories">
      {carrotItems.map(item => (
        <div key={item.id} className="carrot_container">
          <h1>{item.title}</h1>
          <button onClick={() => {handleRemoveFromCart(item)}}>REMOVE</button>
        </div>
      ))}
    </div>
  );
}
// {carrotItems.length === undefined ? (<h5>Cart is empty</h5>) :
// (carrotItems.map( (item) => (
//   <div key={item.id}>
//     <p>{item.title}</p>
//   </div>
// )))
// }