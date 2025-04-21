import {render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../pages/Cart';
import { CartProvider } from '../context/CartContext';

test('should interact and assert component interactions', () => {
    const { getByText, getByRole } = render(
        <CartProvider>
            <Cart />
        </CartProvider>
    );
    const buttonElement = getByRole('button', { name: /checkout/i });
    fireEvent.click(buttonElement);
    
    const messageElement = getByText('Your cart is empty');
    expect(messageElement).toBeInTheDocument();
});






