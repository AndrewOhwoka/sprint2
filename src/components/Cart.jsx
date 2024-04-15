import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, total, closeNavCart, shipping, removeFromCart,} = useContext(ProductContext); // Include removeFromCart in destructuring

  return (
    <div>
      <div className="cartItem">
        <span className="inside-btn" onClick={closeNavCart}></span>

        {cart.map((product) => (
          <div className="cart-center" key={product.id}>
            <div className="img-cart">
              <img src={product.img} alt="img" />
              <div className="item-cart">
                <p>{product.title}</p>
              </div>
              <div className="inc-dec-cart">
                {/* Include buttons to increase/decrease item quantity */}
                {/* <button onClick={() => decreaseItem(product.id)}>-</button> */}
                {/* {product.quantity} */}
                {/* <button onClick={() => increaseItem(product.id)} >+</button> */}
              </div>
              <div className="price-cart">
                <p>${product.price * product.quantity}</p>
              </div>
              <div className="del-item">
                {/* Button to remove item from cart */}
                
                <button  onClick={() => removeFromCart(product.id)}>Remove</button>
                <div className="btn-options">
              <Link to="/products">   
              <button className="back-products"> Back to Products</button></Link>
            </div>
              </div>
              <div className="btn-options">
              
            </div>
            </div>
          </div>
        )
        
        )}
      
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

        <div className="payment">
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
        <div className="btn-options">
              <Link to="/products">   
              <button className="back-products"> Back to Products</button></Link>
            </div>
      </div>
    </div>
  );
}
