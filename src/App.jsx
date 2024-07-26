import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact.jsx'
import { Service } from './pages/Blog.jsx';
import { Shop } from './pages/shop/Shop.jsx';
import { Home } from './pages/Home.jsx';
import { Sneakers } from './pages/products-pages/sneaker/Sneakers.jsx';
import { Converse } from './pages/products-pages/converse/Converse.jsx';
import { Officials } from './pages/products-pages/official/Official.jsx';
import { Heels } from './pages/products-pages/heels/Heels.jsx';
import { Sandals } from './pages/products-pages/scandals/Scandals.jsx';
import { Kids } from './pages/products-pages/kids/Kids.jsx';
import SneakerDetails from './pages/productdetails/SneakerDetails.jsx';
import { PumaDetails } from './pages/products-pages/sneaker/PumaDetails.jsx';
import {ConverseDetails} from './pages/productdetails/ConverceDetails.jsx'
import { OfficialsDetails } from './pages/productdetails/OfficialDetails.jsx';
import { HeelsDetails } from './pages/productdetails/HeelsDetails.jsx';
import { SandalsDetails } from './pages/productdetails/SandalDetails.jsx';
import { KidsDetails } from './pages/productdetails/KidsDetails.jsx';
import { ProductDetails } from './pages/shop/ProductDetails.jsx';
import Payment from './pages/cart/Payment.jsx';

import Cart from './pages/cart/Cart.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/converse' element={<Converse />} />
        <Route path='/officials' element={<Officials />} />
        <Route path='/heels' element={<Heels />} />
        <Route path='/sandals' element={<Sandals />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/sneakerdetails/:brand/:id' element={<SneakerDetails />} />
        <Route path='/pumadetails/:id' element={<PumaDetails />} />
        <Route path='/conversedetails/:id' element={<ConverseDetails />} />
        <Route path='/officialdetails/:id' element={<OfficialsDetails />} />
        <Route path='/heelsdetails/:id' element={<HeelsDetails />} />
        <Route path='/sandalsdetails/:id' element={<SandalsDetails />} />
        <Route path='/kidsdetails/:id' element={<KidsDetails />} />
        <Route path='/productdetails/:brand/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
