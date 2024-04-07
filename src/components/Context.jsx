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

// Open and close nav
handleNav=()=>{
  this.setState({navOpen:!this.state.navOpen})
}

// Cart is open and want to close it
closeNavCart=()=>{
 if (this.state.navOpen===true) {this.setState({navOpen:false})
}}

  render() {
    return (
      <ProductContext.Provider value={{

        ...this.state,
        handleNav:this.handleNav,
        closeNavCart:this.closeNavCart,

        
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
