import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const state = useContext(ProductContext);
  const cart = state.data || [];
  const deleteItem = state.deleteItem;
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
                <img src={product.img} alt="img" />
                <div className="item-cart">
                  <p>{product.title}</p>
                </div>
                <div className="inc-dec-cart">
                  <button>-</button>
                  {product.count}
                  <button>+</button>
                </div>
                <div className="price-cart">
                  {" "}
                  <p>${product.price * product.count}</p>
                </div>
                <div className="del-item">
                  <i className="fas fa-trash-alt"></i>
                </div>
              </div>
            </div>
          );
        })}
        <div className="extra-info">
          <h3>
            <span>Amount:</span>${total}
          </h3>

          <div className="shipping">
            <h3>
              <span>Shipping:</span>
              {total > 80 ? "free" : `+${shipping}`}
            </h3>
          </div>
        </div>
        <h3>
          <span>Total amount:</span>${total > 80 ? total : total + shipping}
        </h3>
        <div className="payment" onClick={closeNavCart}>
          <Link to="/payment">Payment</Link>
        </div>
      </div>
    </div>
  );
}
