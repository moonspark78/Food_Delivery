import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="herder-contents">
            <h2>Commandez votre nourriture préférée ici</h2>
            <p>Choisissez parmi un menu diversifié avec une délicieuse gamme de plats conçus avec les meilleurs ingrédients
et l'expertise culinaire. Notre mission est de satisfaire vos envies et d'élever votre expérience culinaire.
            </p>
            <button>Afficher le menu</button>
        </div>
    </div>
  )
}

export default Header