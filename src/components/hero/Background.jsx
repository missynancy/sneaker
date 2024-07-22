import React from 'react';
 import './hero.css';
import img1 from '../../assets/sneaker1-removebg-preview.png';
import img2 from '../../assets/all_stars_leather-removebg-preview.png';
import img3 from '../../assets/f3-removebg-preview.png';
import img4 from '../../assets/h2-removebg-preview.png';
import img5 from '../../assets/s1-removebg-preview.png';
import img6 from '../../assets/k1-removebg-preview.png';



export const Background = ({ heroCount }) => {
if(heroCount === 0){
    return <img src={img1} className='back' />
}
else if(heroCount === 1){
    return <img src={img2} className='back' />
}
else if(heroCount === 2){
    return <img src={img3} className='back' />
}
else if(heroCount === 3){
    return <img src={img4} className='back' />
}
else if(heroCount === 4){
    return <img src={img5} className='back' />
}
else if(heroCount === 5){
    return <img src={img6} className='back' />
}

  return (
    <div className="back" style={{ backImage: `url(${backImage})` }}>
      
    </div>
  );
};
