import React, { Component } from "react";
import { Data } from  "./Data";

const ProductContext = React.createContext();
// Provider - provides data to the application.
// Consumer - consumes data from the application.
class ProductProvider extends Component { state = { 
  navOpen:false,
  cartOpen:false,
  data:Data,
  cartItems:[],
  shipping:10,
  total:0,
}
  render() {
    return (
      <ProductContext.Provider value={{

        ...this.state

        
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
