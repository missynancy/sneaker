import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../cart/CartDetails';// Ensure this path is correct
import nike from '../products-pages/sneaker/nike.json';
import puma from '../products-pages/sneaker/puma.json';
import sneakers from '../products-pages/sneaker/sneakers.json';
import addidas from '../products-pages/sneaker/addidas.json';

export const SneakerDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { id, brand } = useParams();
  let product;
  const productId = Number(id);  // Convert id to a number for comparison

  switch (brand) {
    case 'nike':
      product = nike.find(item => item.id === productId);
      break;
    case 'puma':
      product = puma.find(item => item.id === productId);
      break;
    case 'newbalance':
      product = sneakers.find(item => item.id === productId);
      break;
    case 'adidas':
      product = addidas.find(item => item.id === productId);
      break;
    default:
      product = null;
      break;
  }

  if (!product) {
    return <div>Sneaker not found</div>;
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
    } else {
      alert('Please select a size.');
    }
  };

  return (
    <div className='product-details'>
      <div className="product-img">
        <img src="{product.image}" alt={product.name} />
      </div>
      <div className="product-cont">
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
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
        <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
