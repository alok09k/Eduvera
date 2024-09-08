import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better eduaction for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower student with the knowledge, skills, and
                experiences needed to excel in the dynamic field of eduaction
            </p>
            <button className='btn'> Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero