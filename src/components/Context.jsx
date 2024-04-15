import React, { Component, createContext } from "react";
import { Data } from "./Data";

export const ProductContext = createContext();

export class ProductProvider extends Component {
  state = {
    navOpen: false,
    cartOpen: false,
    data: Data,
    cart: [],
    shipping: 10,
    total: 0,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item is already in cart, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      this.setState({ cart: updatedCart }, this.updateTotal);
    } else {
      // If item is not in cart, add it with quantity 1
      const newItem = { ...product, quantity: 1 };
      this.setState({ cart: [...cart, newItem], cartOpen: true }, this.updateTotal);
    }
  };

  removeFromCart = (productId) => {
    const updatedCart = this.state.cart.filter((item) => item.id !== productId);
    this.setState({ cart: updatedCart }, this.updateTotal);
  };

  backToProducts = () => {
    
  }
  

  updateTotal = () => {
    const { cart } = this.state;
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.setState({ total });
  };
  increaseItem = () => {
   
  }
  decreaseItem = () => {
    
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          increaseItem: this.increaseItem,
          decreaseItem: this.decreaseItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}