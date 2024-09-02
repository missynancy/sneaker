import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import data from '../assets/data/FeaturesData';
import { Background } from '../components/hero/Background';
// import { Latest } from '../Latest/Latest';
import { Hero } from '../components/hero/Hero';
import { Latest } from './Latest/Latest';
import { New } from './New';
import image1 from "/homeimages/Double_Monk_Strap1-removebg-preview.png"
import image2 from '/homeimages/Channel_two-tone_slingbacks_4-removebg-preview.png'
import image3 from "/homeimages/Unisex_LED_Luminous_Toller_Shoe_1-removebg-preview.png";
import image4 from '/homeimages/sandals-removebg-preview.png'
import image5 from '/homeimages/Converse_Run_Star_Hike_Hi_166799c_Unisex_White_Black_Canvas_Sneaker_Shoes_Nr6211__8___Adult_Unisex-removebg-preview.png'
import image6 from '/homeimages/sneaker-removebg-preview.png'


export const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleSelection = (id) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };
   let heroData = [
     {text: "Sneakers",},
     {text: "Converce"},
     {text: "Officials"},
     {text: "Heels"},
    {text: "Sandals"},
    {text: "Kids Coner"},
   ]

   const [heroCount, setHeroCount] = useState(0);
  //  const[latestPlay, setLatest] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 5 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <div className="landing-page">
      <div className="home">
        <>
        <div className="backcircle"></div>
        <Background heroCount={heroCount}/> 
        <Hero 
         heroData = {heroData[heroCount]}
         heroCount = {heroCount} 
         setHeroCount = {setHeroCount}
         
          />
        </>
        
        
      </div>
      <div className='features'>
        <h1>Features</h1>
        <div className='features-container'>
          {
            data && data.length > 0 ? 
            data.map(dataItem => (
              <div key={dataItem.id} className='items'>
                <div id='deliveries'
                  style={{
                    fontSize: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 20px',
                  }}
                  onClick={() => handleSelection(dataItem.id)}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h3>{dataItem.icon}</h3>
                    <i className='bx bx-chevron-right'></i>
                  </div>
                </div>
                {
                  selectedFeature === dataItem.id ? 
                  <div>{dataItem.content}</div>
                  : null
                }
              </div>
            ))
            : (<div>No data present</div>)
          }
        </div>
      </div>
      <div className="home-links">
        <div className="links-1">
          <div className="links-1-2">
            <div className="links-1-2-1">
              <img src={image4} />
              <div className="link-1-content">
                  <h3>Sandals</h3>
                  <Link to='/sandals'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-1">
              <img src={image5} />
              <div className="link-1-content">
                  <h3>Converse</h3>
                  <Link to='/converse'>Shop more</Link>
              </div>
            </div>
          </div>
          <div className="links-1-1">
            <img src={image6} />
            <div className="link-1-content">
                <h3>Sneakers</h3>
                <Link to='/sneakers'>Shop more</Link>
            </div>
          </div>
        </div>
        <div className="links-1">
          <div className="links-1-1">
            <img src={image1} />
            <div className="link-1-content">
                <h3 to='/officials'>Officials</h3>
                <Link>Shop more</Link>
            </div>
          </div>
          <div className="links-1-2">
            <div className="links-1-2-1">
              <img src={image2} />
              <div className="link-1-content">
                  <h3>Heels</h3>
                  <Link to='/heels'>Shop more</Link>
              </div>
            </div>
            <div className="links-1-2-1">
              <img src={image3} />
              <div className="link-1-content">
                  <h3>kids</h3>
                  <Link to='/kids'>Shop more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-latest">
      <h1>New Arrivals</h1>
      <div className="latest">
        <div className="latest-1">
          < New />
        </div>
        <div className="latest-2">
         <Latest />
        </div>
      </div>
      </div>
      </div>
      
    </>
  );
};
