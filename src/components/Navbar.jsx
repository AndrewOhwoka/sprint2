import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import Cart from "./Cart";

export default function Navbar() {
  const { cart, handleNav, handleCartNav, navOpen, closeNavCart } =
    useContext(ProductContext);
  return (
    <div className="container sticky">
      <nav className="sticky">
        <div className="logo-btn">
          <Link to="/" onClick={closeNavCart}>
            <img src={logo} alt="logo" />
            <span className="bags">Signage</span>Craft
          </Link>
          <div className="cart hide" onClick={closeNavCart}>
            <i className="fas fa-shopping-cart"> </i> <span>0</span>
          </div>
          <div className="btn" onClick={handleNav}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className="dra">
          <div className="drawers">
            {/* sliding effect home */}
            <ul
              className={navOpen ? "newLinks links " : "links"}
              onClick={closeNavCart}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>

          <span className="carta">
            <i className="fas fa-shopping-cart"></i>0
          </span>
        </div>
      </nav>
    </div>
  );
}
