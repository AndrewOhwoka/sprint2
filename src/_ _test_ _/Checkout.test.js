import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductContext } from './Context';
import Checkout from './Checkout';

describe('Checkout component', () => {
  const mockContext = {
    cart: [
      { id: 1, title: 'Product 1', price: 10, quantity: 2 },
      { id: 2, title: 'Product 2', price: 20, quantity: 1 },
    ],
    total: 40,
    shipping: 5,
    clearCart: jest.fn(),
  };

  test('should display the total and shipping costs correctly', () => {
    const { getByText } = render(
      <ProductContext.Provider value={mockContext}>
        <Checkout />
      </ProductContext.Provider>
    );

    expect(getByText('Total: $40.00')).toBeInTheDocument();
    expect(getByText('Shipping: $5.00')).toBeInTheDocument();
    expect(getByText('Total Amount: $45.00')).toBeInTheDocument();
  });

  test('should clear the cart after successful payment', () => {
    const { getByText } = render(
      <ProductContext.Provider value={mockContext}>
        <Checkout />
      </ProductContext.Provider>
    );

    fireEvent.click(getByText('Place Order'));
    expect(mockContext.clearCart).toHaveBeenCalled();
  });
});