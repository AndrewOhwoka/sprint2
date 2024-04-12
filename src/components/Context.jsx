import React, { Component } from "react";
import { Data } from "./Data";

export const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    navOpen: false,
    cartOpen: false,
    data: Data,
    cart: [],
    shipping: 10,
    total: 0,
  };

  handleCartNav = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  addToCart = (id) => {
    console.log(`item ${id} added to cart`);
    let check = this.state.cart.find((item) => item.id === id);
    if (!check) {
      const filterData = this.state.data.filter((item) => item.id === id);
      filterData.forEach((item) => (item.isInCart = true));
      this.setState({ cart: [...this.state.cart, ...filterData], cartOpen: true });
    }
  };
 // delete item from cart
  deleteItem = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
      item.isInCart = false;
    })
    this.setState({ cart: [...cart] });
  }

  handleNav = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  closeNavCart = () => {
    this.setState({ cartOpen: false });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleNav: this.handleNav,
          closeNavCart: this.closeNavCart,
          handleCartNav: this.handleCartNav,
          addToCart: this.addToCart,
          deleteItem: this.deleteItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export default ProductContext;

// import React, { Component } from "react";
// import { Data } from "./Data";

// export const ProductContext = React.createContext({
//   navOpen: false,
//   cartOpen: false,
//   data: Data,
//   cart: [],
//   shipping: 10,
//   total: 0,
// handleCartNav: () => {},
// });


// export default ProductContext;