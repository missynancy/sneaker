import React from 'react'

import { Link } from 'react-router-dom'
import latest from './latest.json'

export const Latest = () => {
    return (
        <>
        
        <div className='shop shop-p' >
          {/* <ul className='shoe-link'>
            <li><a href="#nike">Zara</a></li>
            <li><a href="#puma">Chunky</a></li>
            <li><a href="#newbalance">New Balance</a></li>
            <li><a href="#adidas">Adidas</a></li>
            
          </ul> */}
        
          <div className="shop-sneaker latest-2 margin" id="converse">
          <div className="shop-content ">
            {
              latest && latest.length ?
              latest.map(product => {
                return(
                  <div key={product.id} className='shop-product'>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                    <Link to={`/productdetails/latest/${product.id}`}>
                      <button>View product</button>
                    </Link>
                </div>
                )
              }) : null
            }
          </div>
        </div>
          
          <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        </div>
        </>
      )
}
