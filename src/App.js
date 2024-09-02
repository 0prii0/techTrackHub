import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import  Products  from "./Product";
import  About  from "./About";
import  Cart  from "./Cart";
import  Contact  from "./Contact";
import  SingleProduct  from  "./SingleProduct";
import  ErrorPage  from "./ErrorPage";

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/single-product/:id" element={<SingleProduct/>} />
      <Route path="*" element= {<ErrorPage/>} />
    </Routes>
  </Router>
  )
};

export default App;
