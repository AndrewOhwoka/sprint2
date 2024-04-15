import React, { useContext } from "react";
import { ProductContext } from "./Context";
import Product from "./Product";

export default function Products() {
  const state = useContext(ProductContext);
  const data = state.data || [];
  const { closeNavCart } = state;

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-center">
        {data.map((product) => {
          return <Product key={product.id} data={product} 
          closeNavCart={closeNavCart} addToCart={() => state.addToCart(data.id)}/>;
        })}
      </div>
    </div>
  );
}

