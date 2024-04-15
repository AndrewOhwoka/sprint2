import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductContext } from './Context';
import Details from './Details';

describe('Details component', () => {
  const mockContext = {
    data: [
      { id: 1, title: 'Product 1', price: 10, details: 'Details for Product 1', img: 'product1.jpg' },
      { id: 2, title: 'Product 2', price: 20, details: 'Details for Product 2', img: 'product2.jpg' },
    ],
    addToCart: jest.fn(),
  };

  test('should display the correct product details', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ProductContext.Provider value={mockContext}>
          <Details />
        </ProductContext.Provider>
      </Router>,
      { route: '/details/1' }
    );

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Details for Product 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByAltText(' ')).toHaveAttribute('src', '/product1.jpg');
  });

  test('should call addToCart when "Add To Cart" button is clicked', () => {
    const { getByText } = render(
      <Router>
        <ProductContext.Provider value={mockContext}>
          <Details />
        </ProductContext.Provider>
      </Router>,
      { route: '/details/1' }
    );

    fireEvent.click(getByText('Add To Cart'));
    expect(mockContext.addToCart).toHaveBeenCalledWith(mockContext.data[0]);
  });
});