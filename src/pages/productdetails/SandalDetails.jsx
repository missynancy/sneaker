import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import sandals from '../products-pages/scandals/sandals.json';
import { CartContext } from '../cart/CartDetails';
import { Header } from '../../components/Header';

export const SandalsDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const { addToCart } = useContext(CartContext);
  const product = sandals.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      setMainImage(product.image || ''); // Initialize main image if product exists
    }
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
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

  // Ensure that properties are defined
  const sizes = product.sizes || [];
  const images = [product.image, product.image2, product.image3, product.image4].filter(Boolean);

  return (
    <>
      <Header />
      <div className='product-details'>
        <div className="product-img">
          <div className="main-img">
            <img src={mainImage} alt={product.name} />
          </div>
          <div className="thumbnail-container">
            {images.map((image, index) => (
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
            {sizes.length ? sizes.map(size => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={selectedSize === size ? 'selected' : ''}
              >
                {size}
              </button>
            )) : <p>No sizes available</p>}
          </div>
          <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
