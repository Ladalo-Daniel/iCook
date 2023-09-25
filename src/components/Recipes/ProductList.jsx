import React from "react";

export default function ProductList({ carrotData, handleAddToCart }) {
  
  const carrotElement = carrotData.map( (carrot) => (
    <div key={carrot.id} className="carrot_container">
      <h4>{carrot.title}</h4>
      <button onClick={() => handleAddToCart(carrot)}>ADD</button>
    </div>
  ))

  return(
    <div className="carrot_categories">{carrotElement}</div>
  )
}