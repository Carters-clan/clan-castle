import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="arow-icon" /> Shop <img src={arrow_icon} alt="arow-icon"/> {product.category} <img src={arrow_icon} alt="arow-icon"/> {product.name}
    </div>
  )
}

export default Breadcrum