// src/components/Header.js
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../pages/cart/CartDetails';
import "./Navbar.css";

export const Header = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav2">
        <div 
          className='menu2' 
          onClick={() => {
            setSideOpen(!sideOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={sideOpen ? "open" : ""}>
          <li>
            <NavLink to='/sneakers'>Sneakers <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/converse'>Converse <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/officials'>Officials Shoes <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/heels'>Heels <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/sandals'>Sandals <i className='bx bx-chevron-right'></i></NavLink>
            <NavLink to='/kids'>Kids Shoes <i className='bx bx-chevron-right'></i></NavLink>
          </li>
        </ul>
        <div className={cartOpen ? "open" : ""}>
          <div className="carticon">
            <NavLink 
              to="/cart"
              onClick={() => {
                setCartOpen(!cartOpen);
              }}
            >
              <i className='bx bx-cart-add'></i>
              <span className='cartSpan'>{cart.length}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
