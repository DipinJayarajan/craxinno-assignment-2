import React from 'react'
import './Navbar.css'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" className="logo" />
    </div>
  )
}

export default Navbar