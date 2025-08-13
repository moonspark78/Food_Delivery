import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {

  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt={name}/>
            {!itemCount
              ? <img src={assets.add_icon_white} onClick={} className='add'  alt="" />
            }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
          </div>
          <p className='food-items-desc'>{description}</p>
          <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem