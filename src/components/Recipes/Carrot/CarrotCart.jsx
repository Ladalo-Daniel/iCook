import React from "react";
import { useCarrot } from "../Context/CarrotContext";

export default function CarrotCart() {
    const { carrotItems, removeFromCart, getCartItemCount } = useCarrot()

    return(
        <div>
            <h1>Cart Item</h1>
            <p>Items in Cart: {getCartItemCount()}</p>
            <ul>
                {carrotItems.map((item) => (
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    )

}