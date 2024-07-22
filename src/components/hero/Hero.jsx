import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

export const Hero = ({heroData, heroCount, setHeroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text}</p>
        </div>
        <Link to='./shop'  className="hero-link">
            <p>Shop</p>
            <i className='bx bx-right-arrow-circle'></i>
        </Link>
        <div className="dots">
            <ul className='hero-dots'>
                <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot plain"}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot plain"}></li>
                <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot plain"}></li>
                <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot orange" : "hero-dot plain"}></li>
                <li onClick={() => setHeroCount(4)} className={heroCount === 4 ? "hero-dot orange" : "hero-dot plain"}></li>
                <li onClick={() => setHeroCount(5)} className={heroCount === 5 ? "hero-dot orange" : "hero-dot plain"}></li>
            </ul>
        </div>
    </div>
  )
}
