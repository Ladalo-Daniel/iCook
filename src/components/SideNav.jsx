import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pizza from './Recipes/Pizza';
import Tomato from './Recipes/Tomato';
//import RecipesName from './Recipes/RecipesName';

export default function SideNav() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
    // Perform any additional logic, such as routing or updating content
  };

  return (
      <div className="side-nav">
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/tomato">Tomato</Link>
    </div>
  );
};




// const [recipes, setRecipes] = React.useState(RecipesName)

// const recipesElements = recipes.map()

// return(
//   <h4>{recipesElements}</h4>
// )
