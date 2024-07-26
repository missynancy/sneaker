import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import converse from '../products-pages/converse/allstar.json';
import { CartContext } from '../cart/CartDetails';
import { Header } from '../../components/Header';
 // Assuming you have styles in this file

export const ConverseDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(null); // State to keep track of main image
  const { addToCart } = useContext(CartContext);
  const product = converse.find(p => p.id === parseInt(id));

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
