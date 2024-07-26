import React, { useContext, useState , useEffect } from 'react';

import { useParams } from 'react-router-dom';
import sneaker from './Products.json'
import sandals from './sandalshop.json'
import sandalshop from '../products-pages/scandals/sandals.json'
import kids from './kidsShop.json'
import heels from './heelshop.json'
import converse from './converseshop.json'
import formal from './Shopofficial.json'
import latest from '../Latest/latest.json'
import newitem from '../new.json'
import { CartContext } from '../cart/CartDetails';
import { Header } from '../../components/Header';
 // Assuming you have styles in this file

export const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id, brand } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const productId = Number(id); // Convert id to a number for comparison

  let product;
  switch (brand) {
    case 'sneaker':
      product = sneaker.find(item => item.id === productId);
      break;
    case 'converse':
      product = converse.find(item => item.id === productId);
      break;
    case 'formal':
      product = formal.find(item => item.id === productId);
      break;
    case 'heels':
      product = heels.find(item => item.id === productId);
      break;
    case 'sandals':
      product = sandals.find(item => item.id === productId);
      break;
      case 'sandalshop':
      product = sandalshop.find(item => item.id === productId);
      break;
      case 'kids':
      product = kids.find(item => item.id === productId);
      break;
      case 'latest':
      product = latest.find(item => item.id === productId);
      break;
      case 'newitem':
      product = newitem.find(item => item.id === productId);
      break;
    
    default:
      product = null;
      break;
  }

  useEffect(() => {
    if (product) {
      setMainImage(product.image); // Initialize main image with product image
    }
  }, [product]);

  if (!product) {
    return <div>Sneaker not found</div>;
  }

  console.log('Product:', product);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize, image: mainImage });
    } else {
      alert('Please select a size.');
    }
  };

  return (
    <>
      <Header />
      <div className='product-details'>
        <div className="product-img">
          <div className="main-img">
            <img src={mainImage} alt={product.name} />
          </div>
          <div className="thumbnail-container">
            {[product.image, product.image2, product.image3, product.image4].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        <div className="product-cont">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>Product details go here...</p>
          <div className="size">
            <h4>Sizes</h4>
            {product.sizes.map(size => (
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
    </>
  );
};
