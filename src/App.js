import logo from "./img/logo.png";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";


function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </React.Fragment>
  );
}

export default App;
