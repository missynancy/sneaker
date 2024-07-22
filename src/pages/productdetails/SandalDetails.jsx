// src/pages/ProductDetail.js
import React, { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import sandals from '../products-pages/scandals/sandals.json'
import { CartContext } from '../cart/CartDetails';
import { Header } from '../../components/Header';

export const SandalsDetails = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useContext(CartContext); // Use CartContext to get addToCart function
    const product = sandals.find(p => p.id === parseInt(id));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const handleSizeSelect = (size) => {
      setSelectedSize(size);
    };
  
    const AddToCart = () => {
      if (selectedSize) {
        addToCart({ ...product, size: selectedSize });
      } else {
        alert('Please select a size.');
      }
    };

  return (
    <>
      <Header />
      
      <div className='product-details'>
        <div className="product-img">
            <img src={product.image} alt={product.name} />
        </div>
            <div className="product-cont">
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>Product details go here...</p>
            <div className="size">
            <h4>Sizes</h4>
            {[36, 38, 40, 42, 44].map(size => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={selectedSize === size ? 'selected' : ''}
              >
                {size}
              </button>
            ))}
          </div>
            <button className='btn' onClick={AddToCart}>Add to Cart</button>
        </div>
      </div>
      
    </>
  );
};
