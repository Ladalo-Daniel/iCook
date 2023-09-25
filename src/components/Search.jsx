import React from "react";
import { useState } from "react";
import { fetchRecipes } from "../../Api";
import { useLoaderData } from "react-router-dom";

export function loader(){
    return fetchRecipes()
}

export default function Search({ onSearch }) {
    const [query, setQuery] = React.useState('')
    const [searchResult, setSearchResult] = React.useState([])

    const handleSearch = async (e) => {
        e.preventDefault()
        const data =  await fetchRecipes(query)
        onSearch(data)
        setSearchResult(data)
        
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        handleSearch(e)
    }

    return(
        <form onSubmit={handleSubmit} className="header_search_input_container" >
            <input 
            type="search"
            placeholder="Search your favorite recipes here"
            value={query}
            onChange={handleChange}
            /> <span className="search_container"><i className="material-icons">search</i></span>
            <button type="submit" className="search_button">Search</button>
        </form>
    )


   
    
}
    
    /*
    return(
        {recipes && (
            <div>
            {recipes.map((recipe) => (
                <div key={recipe.recipe_id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image_url} alt={recipe.title} />
                </div>
            ))}
         </div>
         )}


        <div>
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image_url} alt={recipe.title} />
          </div>
        ))}
      </div>
    )
    */
