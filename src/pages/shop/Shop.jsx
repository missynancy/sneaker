import React from 'react'
import './Products.css'
import products from './Products.json'
import converse from './converseshop.json'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import official from './Shopofficial.json'
import heels from './heelshop.json'
import kids from './kidsShop.json'
import sandals from './sandalshop.json'



export const Shop = () => {
  
  return (
    <>
    
    <div className='shop shop-p'>
          <Header />
          <ul className='shoe-link'>
              <li><a href="#sneakers">Sneakers</a></li>
              <li><a href="#canva">Converse</a></li>
              <li><a href="#office">Officials</a></li>
              <li><a href="#heels">Heels</a></li>
              <li><a href="#sandals">Scandals</a></li>
              <li><a href="#kids">Kids</a></li>
              
          </ul>

          <div className="shop-sneaker product-background margin" id="sneakers">
            <h1>Sneakers</h1>
            <Link to='/sneakers'>View All</Link>
            <div className="shop-content">
              {
                products && products.length ?
                products.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/productdetails/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker product-background margin" id="canva">
            <h1>Converse</h1>
            <Link to='/converse'>View All</Link>
            <div className="shop-content">
              {
                converse && converse.length ?
                converse.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/conversedetails/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="heels" id='office'>
            <h1>Official</h1>
            <Link to='/heels'>View All</Link>
            <div className="shop-content">
              {
                official && official.length ?
                official.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/officialdetails/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="heels">
            <h1>Heels</h1>
            <Link to='/heels'>View All</Link>
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
          <div className="shop-sneaker margin" id="sandals">
            <h1>Sandals</h1>
            <Link to='/sandals'>View All</Link>
            <div className="shop-content">
              {
                sandals && sandals.length ?
                sandals.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/sandalsdetails/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="shop-sneaker margin" id="kids">
            <h1>Kids</h1>
            <Link to='/kids'>View All</Link>
            <div className="shop-content">
              {
                kids && kids.length ?
                kids.map(product => {
                  return(
                    <div key={product.id} className='shop-product'>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <h3>{product.price}</h3>
                      <Link to={`/kidsdetails/${product.id}`}>
                        <button>View product</button>
                      </Link>
                  </div>
                  )
                }) : null
              }
            </div>
          </div>
        
        
    </div>
  
    </>
  )
}
