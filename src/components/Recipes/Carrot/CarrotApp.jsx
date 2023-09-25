import React, { useEffect, useState } from "react";
import { fetchCarrot } from "../../../../Api";
import { CarrotProvider } from "../Context/CarrotContext";
import CarrotProduct from "./CarrotProduct";
import CarrotCart from "./CarrotCart";
import CartCount from "./CartCount";

export default function CarrotApp() {
  const [carrotData, setCarrotData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCarrot();
        setCarrotData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return(
    <CarrotProvider>
        {/* <div>
            <h1>Product List</h1>
            {carrotData.map( carrot => (
                <CarrotProduct key={carrot.id} carrot={carrot} />
            ))}
            <div>
                <CarrotCart />
                <CartCount />
            </div>
        </div> */}
    </CarrotProvider>
  )

}
