import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      {/* Offer left */}
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      {/* Offer right */}
      <div className="offers-right">
        <img src={exclusive_image} alt="offer banner image" />
      </div>
    </div>
  )
}

export default Offers