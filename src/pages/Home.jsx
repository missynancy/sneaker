import React, { useEffect, useState } from 'react';
import './Home.css';

import data from '../assets/data/FeaturesData';
import { Background } from '../components/hero/Background';
// import { Latest } from '../Latest/Latest';
import { Hero } from '../components/hero/Hero';

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
      <div className="latest">
        {/* <Latest latestPlay={latestPlay} /> */}
      </div>
      
    </>
  );
};
