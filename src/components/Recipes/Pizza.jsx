import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchPizza } from "../../../Api";
import { useState } from "react";


export function loader() {
    return fetchPizza()
}


export default function Pizza(){
    const [error, setError] = React.useState(null)
    const pizza = useLoaderData()
    console.log(pizza);

    if (!Array.isArray(pizza)) {
        return <div>Loading...</div>;
      }


      const pizzaElements = pizza.map(recipe=> {
        return(
          <div key={recipe.id} className='host-vans'>
             <img src={recipe.image_url} />
             <div className='text'>
              <h2>{recipe.title}</h2>
              <h5>{recipe.publisher}</h5>
             </div>
          </div>
        )
       })

    //console.log(pizzaElements)

    return(
        <div className="recipe_elements">{pizzaElements}</div>
    )
}