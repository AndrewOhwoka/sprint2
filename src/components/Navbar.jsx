import React from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        return (
          <div className="container sticky">
            <nav className="sticky">
              <div className="logo-btn">
                <Link to="/"><img src={logo} alt="logo" /><span className="bags">Signage</span>Craft
                </Link>
                <div className="cart hide">
                  < i className="fas fa-shopping-cart"> </i>0</div>
                <div className="btn">
                  < i className="fas fa-bars"></i>

                </div>
              </div>
              <div className="dra">
                <div className="drawers">
                  <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                  </ul>

                  <Cart />

                </div>

                <span className="carta"><i className="fas fa-shopping-cart"></i>0</span>
              </div>


            </nav>
          </div>
        )
      }}
    </ProductConsumer>
  )
}
