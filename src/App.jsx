import React from "react";
import Header from "./components/header";
import Home from "./components/Home";
import ContactHeader from "./components/ContactHeader";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Pizza, { loader as pizzaLoader } from "./components/Recipes/Pizza";
import Tomato, { loader as tomatoLoader } from "./components/Recipes/Tomato";
import Login from "./components/Login";
import Cart from "./components/Recipes/Cart";
  
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element= {<Layout />}>
     <Route index element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/pizza" element={<Pizza />} loader={pizzaLoader} />
     <Route path="/tomato" element={<Tomato />} loader={tomatoLoader} />
  </Route>
))


export default function App() {
  return(
   <RouterProvider router={router} />
  )
}


/*

Header
SideNav
HomePage
Footer

Recipes
   Carrots
     carrot data

   Pizza
   etc

*/