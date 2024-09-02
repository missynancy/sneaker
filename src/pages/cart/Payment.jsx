import React, { useContext, useState } from 'react';
import { CartContext } from './CartDetails';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    mpesaNumber: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateCardDetails = () => {
    const { cardNumber, expiryDate, cvv, cardName } = formData;
    return (
      cardNumber.length >= 16 &&
      expiryDate.length === 5 && 
      cvv.length === 3 && 
      cardName.trim() !== ''
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (paymentMethod === 'card') {
      if (!validateCardDetails()) {
        alert('Please provide valid card details.');
        return;
      }
      alert('Card payment successful!');
      navigate('/'); // Navigate to home or order confirmation page after payment
    } else if (paymentMethod === 'mpesa') {
      try {
        const response = await axios.post('http://localhost:3001/mpesa', {
          phoneNumber: formData.mpesaNumber,
          amount: getTotalPrice()
        });
        if (response.data.ResponseCode === '0') {
          alert('M-Pesa payment successful!');
          navigate('/'); // Navigate to home or order confirmation page after payment
        } else {
          alert('M-Pesa payment failed. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred during M-Pesa payment. Please try again.');
      }
    }
  };

  return (
    <>
      <Header />
      <div className='payment-page'>
        <h1>Payment</h1>
        <div className='payment-container'>
          <div className='order-summary'>
            <h2>Order Summary</h2>
            {cart.map((item, index) => (
              <div key={index} className='summary-item'>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
            <div className='total'>
              <h3>Total Price: {getTotalPrice()}</h3>
            </div>
          </div>
          <div className='payment-form'>
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={handlePaymentMethodChange}
                  />
                  Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={paymentMethod === 'mpesa'}
                    onChange={handlePaymentMethodChange}
                  />
                  M-Pesa
                </label>
              </div>
              {paymentMethod === 'card' && (
                <>
                  <label>
                    Card Number:
                    <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                  </label>
                  <label>
                    Expiry Date (MM/YY):
                    <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                  </label>
                  <label>
                    CVV:
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
                  </label>
                  <label>
                    Cardholder Name:
                    <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required />
                  </label>
                </>
              )}
              {paymentMethod === 'mpesa' && (
                <label>
                  M-Pesa Number:
                  <input type="text" name="mpesaNumber" value={formData.mpesaNumber} onChange={handleChange} required />
                </label>
              )}
              <button type="submit">Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
