import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../cart/CartDetails'; // Ensure this path is correct
import nike from '../products-pages/sneaker/nike.json';
import puma from '../products-pages/sneaker/puma.json';
import sneakers from '../products-pages/sneaker/sneakers.json';
import addidas from '../products-pages/sneaker/addidas.json';
import oxford from '../products-pages/sneaker/oxford.json';
import { Header } from '../../components/Header';

const SneakerDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id, brand } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const productId = Number(id); // Convert id to a number for comparison

  let product;
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
    case 'oxford':
      product = oxford.find(item => item.id === productId);
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

export default SneakerDetails;
