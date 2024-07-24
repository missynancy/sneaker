import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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

  if (!product) {
    return <div>Product not found</div>;
  }

  if (!mainImage) {
    setMainImage(product.image); // Initialize main image if not set
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
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
          <div className="main-img">
            <img  src={mainImage} alt={product.name} />
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
          <Link to='/cart' onClick={AddToCart}>Add to Cart</Link>
        </div>
      </div>
    </>
  );
};
