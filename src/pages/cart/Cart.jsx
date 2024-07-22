// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartDetails';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className='cart'>
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <div className="link">
            <p>Your cart is empty</p>
            <Link to='/shop'> Back to Shop</Link>
          </div>
        ) : (
          <div className='cart-container'>
            {cart.map((item, index) => (
              <div key={index} className='cart-item'>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>Size: {item.size}</p>
                <p className='item-q'>Quantity: {item.quantity}</p>
                <button className='quantity' onClick={() => increaseQuantity(item.id)}>+</button>
                <button className='quantity' onClick={() => decreaseQuantity(item.id)}>-</button>
                <button className='remove' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <hr />
            <div className="cart-checkout">
                <h1>Items</h1>
                <hr className='hr'/>
                <div className='check-price'>
                    <h2>Total:</h2> 
                    <h2>{getTotalPrice()}</h2>
                </div>
                <hr className='hr'/>
                <button onClick={() => alert('Checkout functionality to be implemented')}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
