import React from "react";
import Slider from "./Slider";
import img5 from "/src/assets/img/img8.jpg"
import img6 from "/src/assets/img/img6.jpg"
import img7 from "/src/assets/img/img7.jpg"
import Carrot from "./Recipes/Carrot";
import Typewriter from "./Typewriter";
import CarrotApp from "./Recipes/Carrot/CarrotApp";





export default function Home() {
    return (
        <div>
          <div className="home_1_container">
            <Slider />
            <div className="other_container">
                <div><img src={img5}/></div>
                <div><img src={img6} /></div>
            </div>
           </div>
           <Carrot />
           {/* <div className="typewriter_container">
              <CarrotApp />
           </div> */}
           <div className="typewriter_container">
            <img src={img7} />
            <div className="typewriter">
            <Typewriter text="Welcome to BacciCook, a delightful world of food recipes! We are passionate about sharing our culinary expertise and bringing you the most tantalizing dishes from around the globe. Our team of experienced chefs and food enthusiasts is dedicated to curating a diverse collection of mouthwatering recipes that are sure to satisfy every palate.

            From comforting classics to innovative creations, our extensive repertoire covers a wide range of cuisines, cooking styles, and dietary preferences. Whether you're a seasoned home cook or just starting your culinary journey, our user-friendly recipes will guide you through each step, ensuring success in the kitchen.

            We believe that food is more than just nourishment; it's an art form that connects people and cultures. Our content reflects this philosophy, celebrating the rich tapestry of flavors, techniques, and ingredients found in different culinary traditions. We take pride in presenting recipes that are not only delicious but also showcase the stories behind them, making your cooking experience a truly immersive and educational one.

            Our commitment to quality extends beyond the recipes themselves. We prioritize using fresh, wholesome ingredients and emphasize sustainable and ethical food practices whenever possible. We also understand the importance of accommodating various dietary needs, so you'll find a wide selection of vegetarian, vegan, gluten-free, and allergen-friendly recipes in our repertoire.

            Join us on this delectable journey and unlock the secrets of exceptional cuisine." />  </div>
            </div>
        </div>
    )
}