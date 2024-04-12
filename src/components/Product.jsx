import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";

export default function Product({ data }) {
  const { id, img, title, price, isInCart } = data;
  const { closeNavCart, addTocart } = useContext(ProductContext);

  return (
    <div className="product">
      <Link to={`/details/${id}`} onClick={closeNavCart}>
        <div className="img-div">
          <img src={img} alt="" />
        </div>
      </Link>
      <div className="details">
        <h3>{title}</h3>
        <p>${price}</p>

        <div className="cartBtn">
          <button onClick={addTocart} className={isInCart ? "disabled" : ""}>
            {" "}
            <i className="fas fa-shopping-cart"></i>
            {isInCart ? "In Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
