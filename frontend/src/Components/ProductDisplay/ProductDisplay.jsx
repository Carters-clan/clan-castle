import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    // Product display section
    <div className="productdisplay">
      {/* Product display left section */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product-image-1" />
          <img src={product.image} alt="product-image-2" />
          <img src={product.image} alt="product-image-3" />
          <img src={product.image} alt="product-image-4" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product-image-main"
          />
        </div>
      </div>
      {/* Product display right section */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_dull_icon} alt="star-dull-icon" />
          <p>122 reviews</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            <p>₹{product.old_price}</p>
          </div>
          <div className="productdisplay-right-price-new">
            <p>₹{product.new_price}</p>
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          blanditiis at deserunt accusantium, quisquam mollitia. Quia maiores
          consequatur molestiae commodi obcaecati beatae alias rerum a itaque,
          hic similique harum libero.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women , T-Shirt, Corp Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern , Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay