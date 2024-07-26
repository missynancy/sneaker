import React from 'react'
import newitem from './new.json'
import { Link } from 'react-router-dom'


export const New = () => {
    return (
        <>
        
        <div className='new'>
          {/* <ul className='shoe-link'>
            <li><a href="#new">new</a></li>
            <li><a href="#puma">Puma</a></li>
            <li><a href="#newbalance">New Balance</a></li>
            <li><a href="#adidas">Adidas</a></li>
            
          </ul> */}
        <div className="new-sneakers" id='new'>
          
          <div className="new-content">
            
            {
              newitem && newitem.length ?
              newitem.map(item => {
                return(
                  <div className='new-product'>
                    <img src={item.image} />
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <Link to={`/productdetails/newitem/${item.id}`}>
                        <button  >View product</button>
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
