import React from "react";
import logo from "/src/assets/img/logo.jpg"
import app from "/src/assets/img/app.png"
import google from "/src/assets/img/google.png"
import NewsletterSubscription from "./NewsLetter";

export default function Footer() {
    return(
        <div>
           <footer>
             <div className="mini_footer">
                <img src={logo} className="logo" />
                <NewsletterSubscription />
                <div className="google_app_container">
                    <h3>Get access to exclusive offer</h3>
                     <div className="google_app">
                     <img src={app} />
                     <img src={google} />
                     </div>
                </div>
             </div>
             <div className="main_footer"><center>Copywright C-2023-BacciCook</center></div>
             
           </footer>
        </div>
    )
}