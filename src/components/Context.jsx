import React, { Component } from "react";
import { Data } from "./Data";

// const ProductContext = React.createContext();

// // Provider - provides data to the application.
// // Consumer - consumes data from the application.
// class ProductProvider extends Component {
//   state = {
//     navOpen: false,
//     cartOpen: false,
//     data: Data,
//     cartItems: Data,
//     shipping: 10,
//     total: 0,
//   };

//   // Open and close nav
//   handleNav = () => {
//     this.setState({ navOpen: !this.state.navOpen });
//   };

//   // Open and close cart
//   handleCartNav = () => {
//     if (this.state.navOpen === true) {
//       this.setState({ navOpen: false });
//     }
//     this.setState({ cartOpen: !this.state.cartOpen });
//   };

//   // Cart is open and want to close it
//   closeNavCart = () => {
//     if (this.state.navOpen === true) {
//       this.setState({ navOpen: false });
//     }
//   };

//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleNav: this.handleNav,
//           closeNavCart: this.closeNavCart,
//           handleCartNav: this.handleCartNav,
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

// const ProductConsumer = ProductContext.Consumer;

// export { ProductProvider, ProductConsumer };

export const ProductContext = React.createContext({
  navOpen: false,
  cartOpen: true,
  data: Data,
  cart: Data,
  shipping: 10,
  total: 0,

});

export default ProductContext;
