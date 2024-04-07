import logo from './img/logo.png';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Details from './components/Details';
import Payment from './components/Payment';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>



    <Navbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details/:id" element={<Details />} />
    </Routes>
    


    </React.Fragment>
   
  );
}

export default App;
