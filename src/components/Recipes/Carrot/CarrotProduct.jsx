import React from "react";
import { useCarrot } from "../Context/CarrotContext";

export default function CarrotProduct( {carrot} ) {
    const { addTOCart } = useCarrot()

    return(
        <div>
            {/* <h5>{carrot.title}</h5>
            <button onClick={() => addTOCart(carrot)}>ADD</button> */}
        </div>
    )

}