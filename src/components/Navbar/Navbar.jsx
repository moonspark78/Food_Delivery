import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Navbar