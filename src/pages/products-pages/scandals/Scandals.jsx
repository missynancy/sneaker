import React from 'react'
import { Header } from '../../../components/Header'
import sandals from './sandals.json'
import { Link } from 'react-router-dom'

export const Sandals = () => {
    return (
        <>
        <Header />
        <div className='shop'>
          {/* <ul className='shoe-link'>
            <li><a href="#nike">Zara</a></li>
            <li><a href="#puma">Puma</a></li>
            <li><a href="#newbalance">New Balance</a></li>
            <li><a href="#adidas">Adidas</a></li>
            
          </ul> */}
          <div className="shop-sneakers" id='sandals'>
            <h1>sandals</h1>
            <div className="shop-content">
              
              {
                sandals && sandals.length ?
                sandals.map(item => {
                  return(
                    <div className='shop-product'>
                      <img src={item.image} />
                      <h3>{item.name}</h3>
                      <h3>{item.price}</h3>
                      <Link to={`/sandalsdetails/${item.id}`}>
                          <button>View item</button>
                        </Link>
                    </div>
                  )
                }) : null
              }
            </div>
          </div>
          
        </div>
          
          <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        </>
      )
}
