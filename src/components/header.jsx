import React, { useState } from "react";
import logo from "/src/assets/img/logo.jpg"
import { Link, NavLink } from "react-router-dom";
import Search, { loader as recipesSearch } from "./Search";
import Account from "./Account";



export default function Header() {
   const [searchResult, setSearchResult] = React.useState([])
   const [close, setClose] = useState(true)

   const handleClose = () => {
    setClose(true)
    //document.body.style.overflow = 'auto'; // Prevent scrolling
   }

    const handleSearch = (data) => {
        //console.log( data);
        // Perform any necessary actions with the search results
        setSearchResult(data)
        //document.body.style.overflow = 'hidden'; // Prevent scrolling
      };

    return(
        <div className="header_container">
           <Link to="/"> <img className="logo" src={logo} /></Link>
            <Search onSearch={handleSearch} loader={recipesSearch} />
            <Account />

            {searchResult.length > 0 && ( close &&
            <ol>
              <button onClick={handleClose}>X</button>
              {searchResult.map((result) => (
                <>
                <div key={result.id} className="search_result">
                <img src={result.image_url} />
                <li>{result.title}</li> 
                </div>
                </>
              ))}
            </ol>
            )}

        </div>
    )

   
}