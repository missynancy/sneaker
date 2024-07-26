import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Header } from '../components/Header';
// Assuming you have some CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <div className="contact-page">
        <h2>Contact Information</h2>
        <div className="contact-info">
        
            
          <a href="tel:+254700000000">
            <i className='bx bx-phone'></i>
            <p>(+254)7 00 000 000</p>
            
          </a>
          
            
          <a href="mailto:sneaker@example.com">
            <i className='bx bx-envelope'></i>
            <p>sneaker@example.com</p>
          </a>
          
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-tiktok'></i> <p>@shoe_store</p>
            </a>
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-facebook-circle'></i> <p>Shoe_stores</p>
            </a>
            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram'></i> <p>@_sneakers</p>
            </a>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
