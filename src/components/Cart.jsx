import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const state = useContext(ProductContext);
  const cart = state.data || [];
  const total = state.total;
  const value = props.value || {};
  const { cartOpen, closeNavCart, handleCartNav, shipping } = value;

  return (
    <div>
      <div className="cartItem">
        <span className="inside-btn" onClick={handleCartNav}></span>

        {cart.map((product) => {
          return (
            <div className="cart-center" key={product.id}>
              <div className="img-cart">
                <img src={product.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
