import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductContext } from './Context';
import Cart from './Cart';

describe('Cart component', () => {
  const mockContext = {
    cart: [
      { id: 1, title: 'Product 1', price: 10, quantity: 2 },
      { id: 2, title: 'Product 2', price: 20, quantity: 1 },
    ],
    total: 40,
    shipping: 5,
    closeNavCart: jest.fn(),
    removeFromCart: jest.fn(),
  };

  test('should display the correct cart items', () => {
    const { getByText, getAllByText } = render(
      <Router>
        <ProductContext.Provider value={mockContext}>
          <Cart />
        </ProductContext.Provider>
      </Router>
    );

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getAllByText('$10')[0]).toBeInTheDocument();
    expect(getAllByText('$20')[0]).toBeInTheDocument();
  });

  test('should display the correct total and shipping costs', () => {
    const { getByText } = render(
      <Router>
        <ProductContext.Provider value={mockContext}>
          <Cart />
        </ProductContext.Provider>
      </Router>
    );

    expect(getByText('$40')).toBeInTheDocument();
    expect(getByText('$5')).toBeInTheDocument();
    expect(getByText('$45')).toBeInTheDocument();
  });

  test('should call removeFromCart when "Remove" button is clicked', () => {
    const { getByText } = render(
      <Router>
        <ProductContext.Provider value={mockContext}>
          <Cart />
        </ProductContext.Provider>
      </Router>
    );

    fireEvent.click(getByText('Remove'));
    expect(mockContext.removeFromCart).toHaveBeenCalledWith(1);
  });
});