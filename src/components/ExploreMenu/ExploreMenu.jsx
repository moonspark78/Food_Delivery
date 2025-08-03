import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explorez notre menu</h1>
        <p className='explore-menu-text'>Choisissez parmi un menu diversifié avec une délicieuse gamme de plats.
            Notre mission est de satisfaire vos envies et d'élever votre expérience culinaire,
            un délicieux repas à la fois.
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return(
                    <div>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu