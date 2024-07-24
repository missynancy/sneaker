import React from 'react';
import nike from './nike.json';
import puma from './puma.json';
import sneakers from './sneakers.json';
import addidas from './addidas.json';
import oxford from './oxford.json'
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header';

export const Sneakers = () => {
  return (
    <>
      <Header />
      <div className='shop'>
        <ul className='shoe-link'>
          <li><a href="#nike">Nike</a></li>
          <li><a href="#puma">Puma</a></li>
          <li><a href="#newbalance">New Balance</a></li>
          <li><a href="#adidas">Adidas</a></li>
          <li><a href="#oxford">Oxford</a></li>
        </ul>
        <div className="shop-sneakers" id='nike'>
          <h1>Nike</h1>
          <div className="shop-content">
            {nike && nike.length ? nike.map(item => (
              <div className='shop-product' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`/sneakerdetails/nike/${item.id}`}>
                  <button>View item</button>
                </Link>
              </div>
            )) : null}
          </div>
        </div>
        <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        <div className="shop-sneakers margin" id='puma'>
          <h1>Puma</h1>
          <div className="shop-content">
            {puma && puma.length ? puma.map(item => (
              <div className='shop-product' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`/sneakerdetails/puma/${item.id}`}>
                  <button>View item</button>
                </Link>
              </div>
            )) : null}
          </div>
        </div>
        <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        <div className="shop-sneakers margin" id='newbalance'>
          <h1>New Balance</h1>
          <div className="shop-content">
            {sneakers && sneakers.length ? sneakers.map(item => (
              <div className='shop-product' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`/sneakerdetails/newbalance/${item.id}`}>
                  <button>View item</button>
                </Link>
              </div>
            )) : null}
          </div>
        </div>
        <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        <div className="shop-sneakers margin" id='adidas'>
          <h1>Addidas</h1>
          <div className="shop-content">
            {addidas && addidas.length ? addidas.map(item => (
              <div className='shop-product' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`/sneakerdetails/adidas/${item.id}`}>
                  <button>View item</button>
                </Link>
              </div>
            )) : null}
          </div>
        </div>
        <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
        <div className="shop-sneakers margin" id='oxford'>
          <h1>Oxford</h1>
          <div className="shop-content">
            {oxford && oxford.length ? oxford.map(item => (
              <div className='shop-product' key={item.id}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                <Link to={`/sneakerdetails/oxford/${item.id}`}>
                  <button>View item</button>
                </Link>
              </div>
            )) : null}
          </div>
        </div>
        <a className='back-top' href="#nav1">Back to top <i className='bx bx-up-arrow-alt'></i></a>
      </div>
    </>
  );
}
