import React from "react";
//import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCarrot } from "../../../Api";


export default function Carrot(){
    const [carrotData, setCarrotData] = React.useState([])
    useEffect( () => {
        const fetchData = async () => {
            try{
                const data = await fetchCarrot()
                setCarrotData(data)
            } catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])
    console.log(carrotData)

    const carrotElement = carrotData.map( carrot => {
        return(
            <div className="carrot_container">
                <img src={carrot.image_url} />
                <h3>{carrot.publisher}</h3>
            </div>
        )
    })

    return(
        <div className="carrot_categories">
            <div className="carrot_elements">{carrotElement}</div>
        </div>
    )

}



// import React, { useEffect, useState } from "react";
// import { fetchCarrot } from "../../../Api";
// import Cart from "./Cart";
// import ProductList from "./ProductList";

// export default function Carrot() {
//   const [carrotData, setCarrotData] = useState([]);
//   const [carrotItems, setCarrotItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchCarrot();
//         setCarrotData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddToCart = (carrot) => {
//    setCarrotItems( (prevItems) => [...prevItems, carrot])
//   }
//   console.log(carrotItems)

//   const handleRemoveFromCart = (carrot) => {
//     const updatedCarrotItems = carrotItems.filter(
//       (carrotItem) => carrotItem !== carrot
//     );
//     setCarrotItems(updatedCarrotItems);
//   };

//   return(
//     <div>
//       <ProductList carrotData={carrotData} handleAddToCart={handleAddToCart} />
//       <Cart carrotItems={carrotItems} handleRemoveFromCart={handleRemoveFromCart} />
//     </div>
//   )

// }




/*


const count = carrotItems.length;

const carrotElements = carrotData.map((carrot) => (
  <div key={carrot.id} className="carrot_container">
    <h3>{carrot.title}</h3>
    <AddToCart handleAddToCart={() => handleAddToCart(carrot)} />
  </div>
));

return (
  <div className="carrot_categories">
    {carrotElements}
    <Cart count={count} handleRemoveFromCart={handleRemoveFromCart} />
  </div>
);









*/