import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-contact">
                <Link to='/'>Logo</Link>
                <p>Contacts</p>
                <Link>
                    <i className='bx bx-phone'></i><p>(+254)7 00 000 000</p>
                </Link>
                <Link to='/contacts'>
                    <i className='bx bx-envelope' ></i><p>sneaker@example.com</p>
                </Link>
                <Link>
                    <i className='bx bxl-instagram'></i><p>@_sneakers</p>
                </Link>
                <Link>
                    <i className='bx bxl-facebook-circle' ></i> <p>Shoe_stores</p>
                </Link>
                <Link>
                    <i className='bx bxl-tiktok' ></i> <p>@shoe_store</p>
                </Link>
            </div>
            <div className="footer-pages">
                <h3>Pages</h3>
                <Link to='/shop'>Shop</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/sneakers'>Sneakers</Link>
                <Link to='/converse'>Converse</Link>
                <Link to='/officials'>Officials</Link>
                <Link to='/heels'>Heels</Link>
                <Link to='/sandals'>Sandals</Link>
                <Link to='/kids'>Kids</Link>
            </div>
            <div className="footer-features">
                <h3>Features</h3>
                <Link to='.//deliveries'>Deliveries</Link>
                <Link to=''>Online Orders</Link>
                <Link to=''>Offers</Link>
                <Link to=''>Customer Surport</Link>
                
            </div>
        </div>
    </div>
  )
}
