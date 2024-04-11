import React from 'react';
// import backing from '../img/backing.jpg';
import Products from './Products';

export default function Home() {
  return (
    <React.Fragment> 
      <div className="header">
            <div className="header-info">

              <h1> <span className='header-bag'> Welcome to the best craft store.</span> </h1>
              <p>Check out our products and enjoy!</p>

            </div>
      </div>
      <div className="products-home">

        <Products />
      </div>



    </React.Fragment>
  )
}
