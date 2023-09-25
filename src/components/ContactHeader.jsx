import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/img/logo.jpg"


export default function ContactHeader() {
    return(
        <div className="contact_header_container">
           <NavLink className="off">UP TO 80% OFF</NavLink>
           <div className="free_delivery"><marquee>FREE DELIVERY</marquee></div>
           <div className="bacci_cook">BacciCook</div>
           <div className="live_now"><NavLink><marquee>LIVE NOW</marquee></NavLink></div>
           <NavLink className="call_to_order">CALL TO ORDER <br /> 090700000000</NavLink>
        </div>
    )
}