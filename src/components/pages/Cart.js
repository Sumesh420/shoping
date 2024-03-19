import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
        </div>
      )}
      <h3>Available Items</h3>
      <button onClick={() => addToCart({ name: 'Item 1', price: 10 })}>Add Item 1</button>
      <button onClick={() => addToCart({ name: 'Item 2', price: 20 })}>Add Item 2</button>
      <button onClick={() => addToCart({ name: 'Item 3', price: 30 })}>Add Item 3</button>
    </div>
  );
};

export default Cart;
