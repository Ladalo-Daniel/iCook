import React from "react";
import { useCarrot } from "../Context/CarrotContext";

export default function CartCount(){
    //const {getCartItemCount} = useCarrot()

    return(
        <>
           <i className="fa fa-shopping-cart icon"></i><span className="added_notification">1</span> 
            <span>Cart</span> 
        </>
    )
}