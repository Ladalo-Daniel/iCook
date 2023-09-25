import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Recipes/Cart";
import Login from "./Login";
import CartCount from "./Recipes/Carrot/CartCount";

export default function Account(){
    const [openModalAccount, setOpenModalAccount] = useState(false)
    const [openModalHelp, setOpenModalHelp] = useState(false)

    const handleButtonClickAccount = () => {
        setOpenModalAccount(true)
        setOpenModalHelp(false)
        //document.body.style.overflow = 'hidden'; // Prevent scrolling
        //document.body.className="overlay"
    }

    const handleButtonClickHelp = () => {
        setOpenModalHelp(true)
        setOpenModalAccount(false)
    }

    const closeModalAccount = () => {
        setOpenModalAccount(false)
        //document.body.style.overflow = 'auto'; // Prevent scrolling
    }
    const closeModalHelp = () => {
        setOpenModalHelp(false)
    }


    return(
    <div className="account_info_container">
        <button onClick={handleButtonClickAccount}  className="user_link help_user"  > 
            <i className="fa fa-user-o icon"></i> 
            <span>Account</span> 
            <i className="fa fa-caret-down caret"></i>
        </button>
        {openModalAccount && 
        (
           <div className="modal_container">
              <div className="modal" >
              <Link to="/login"  className="login_button">Login</Link>
             </div>
             <button className="cancel_X" onClick={closeModalAccount}>X</button>
           </div>
        )}

        <button onClick={handleButtonClickHelp } className="help_link help_user"> 
            <i className="fa fa-question icon"></i> 
            <span>Help</span> 
            <i className="fa fa-caret-down caret" ></i>
        </button>
        {openModalHelp && (
           <div className="model_container">
              <div className="model" >
                <h1>Hey Moday Help</h1>
                <p>I'm having some fun</p>
             </div>
             <button className="cancel_X" onClick={closeModalHelp}>X</button>
           </div>
        )}

        {/* <NavLink className="cart_link" to="/cart"> 
           <CartCount />
        </NavLink> */}
        <div className="cart_added_items_container">
        </div>
    </div>
    )
}