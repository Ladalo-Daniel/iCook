import { createContext, useContext, useState } from "react";

const CarrotContext = createContext()

const CarrotProvider = ({ children }) => {
    const [carrotItems, setCarrotItems] = useState([])

    const addTOCart = (carrot) => {
        setCarrotItems(prevItems => [...prevItems, carrot])
    }

    const removeFromCart = (carrotId) => {
        setCarrotItems(prevItems => prevItems.filter( carrot => carrot.id !== carrotId))
    }

    const getCartItemCount = () => {
        return carrotItems.length;
    }

    return(
        <CarrotContext.Provider value={{ carrotItems, addTOCart, getCartItemCount, removeFromCart}}>
            {children}
        </CarrotContext.Provider>
    )

    console.log(carrotItems)
}



const useCarrot = () => {
    return useContext(CarrotContext)
}

console.log(useCarrot)

export { CarrotProvider, useCarrot }