import React from 'react'
import { Header } from '../../../components/Header'
import kids from './kids.json'
import { Link } from 'react-router-dom'

export const Kids = () => {
    return (
        <>
        <Header />
        <div className='shop'>
          {/* <ul className='shoe-link'>
            <li><a href="#nike">Sneakers</a></li>
            <li><a href="#puma">Puma</a></li>
            <li><a href="#newbalance">New Balance</a></li>
            <li><a href="#adidas">Adidas</a></li>
            
          </ul> */}
          
          <div className="shop-sneakers" id='kids'>
            <h1>Kids</h1>
            <div className="shop-content">
              
              {
                kids && kids.length ?
                kids.map(item => {
                  return(
                    <div className='shop-product'>
                      <img src={item.image} />
                      <h3>{item.name}</h3>
                      <h3>{item.price}</h3>
                      <Link to={`/kidsdetails/${item.id}`}>
                          <button>View item</button>
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
