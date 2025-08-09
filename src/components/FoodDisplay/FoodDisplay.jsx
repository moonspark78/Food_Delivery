import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext);


  return (
    <div className='food-display' id='food-display'>
        <h2>Meilleurs Plats près de chez vous</h2>
    </div>
  )
}

export default FoodDisplay