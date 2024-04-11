import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "./Context";

export default function Details() {
  const { id } = useParams();
  const { data } = useContext(ProductContext);
  const result = data.find(item => item.id === parseInt(id));

  return (
    result && (
      <div className="det">
        <div className="inside-container">
          <h2>Product details</h2>
          <div className="det-center">
            <div className="det-img">
              <img src={`/${result.img}`}alt=" " />
            </div>
            <div className="det-info">
              <h3>{result.title}</h3>
              <p>{result.details}</p>
              <h4>price:<span>${result.price}</span></h4>
              <div className="but-options">
                <Link to="/products">
                  <button className="back-products">Back to Products</button>
                </Link>
                <button className="add-tocart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}