import React from 'react'
import { Header } from '../../../components/Header'
import { Link } from 'react-router-dom'
import heels from './heels.json'

export const Heels = () => {
    return (
        <>
        <Header />
        <div className='shop'>
          <ul className='shoe-link'>
            <li><a href="#nike">Zara</a></li>
            <li><a href="#puma">Chunky</a></li>
            <li><a href="#newbalance">New Balance</a></li>
            <li><a href="#adidas">Adidas</a></li>
            
          </ul>
        
          <div className="shop-sneaker margin" id="converse">
          <h1>Heels</h1>
          <div className="shop-content">
            {
              heels && heels.length ?
              heels.map(product => {
                return(
                  <div key={product.id} className='shop-product'>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                    <Link to={`/heelsdetails/${product.id}`}>
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
