import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setOpenMenu] = useState(false);
    // const [sideOpen, setSideOpen] = useState(false);
    // const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav>
        <div className="nav1" id='nav1'>
            <NavLink to="/" className='title'>Shoe Store</NavLink>
            <div 
                className='menu' 
                onClick={() => {
                setOpenMenu(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contact</NavLink>
                </li>
            </ul>
        </div>
        {/* <div className="nav2">
            <div 
                className='menu2' 
                onClick={() => {
                setSideOpen(!sideOpen);
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={sideOpen ? "open" : ""}>
                <li>
                    <NavLink to='/sneakers'>Sneakers <i className='bx bx-chevron-right'></i></NavLink>
                    <NavLink to='/converse'>Converce <i className='bx bx-chevron-right'></i></NavLink>
                    <NavLink to='/officials'>Officials Shoes <i className='bx bx-chevron-right'></i></NavLink>
                    <NavLink to='/heels'>Heels <i className='bx bx-chevron-right'></i></NavLink>
                    <NavLink to='/scandals'>Scandals <i className='bx bx-chevron-right'></i></NavLink>
                    <NavLink to='/kids'>Kids Shoes <i className='bx bx-chevron-right'></i></NavLink>
                </li>
            </ul>
            <div className={cartOpen ? "open" : ""}>
                <div className="carticon">
                    <NavLink to="cart"
                        onClick={() => {
                            setCartOpen(!cartOpen);
                            }}
                        ><i className='bx bx-cart-add'></i>
                        <span className='cartSpan'>0</span>
                    </NavLink>
                    
                </div>
            </div>
        </div> */}
       
    </nav>
  )
}
