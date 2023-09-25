import React from "react";
import { useLoaderData } from "react-router-dom";
import { fetchTomato } from "../../../Api";
import { useState } from "react";


export function loader() {
    return fetchTomato()
}


export default function Tomato(){
    const [error, setError] = React.useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Number of items per page
    const pizza = useLoaderData()
    console.log(pizza);

    if (!Array.isArray(pizza)) {
        return <div>Loading...</div>;
      }
      
       // Function to handle page changes
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


      // Pagination logic
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedItems = pizza.slice(startIndex, endIndex);


      const pizzaElements = displayedItems.map(recipe=> {
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
      <div className="pagination_container">
        <div className="recipe_elements">{pizzaElements}</div>

      {/* Pagination UI */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(pizza.length / itemsPerPage) }).map(
          (_, index) => (
            <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          )
          )}
      </div>
      </div>
    )
}