import React from 'react'
import logo from "../assets/logo.png"
const Nav = () => {
  return (
    <div className='navbar'>
        <img src={logo} id="logo" />
        <ul className='nav-items'>
            <p>Flights</p>
            <p>Stays</p>
            <p>Trains</p>
            <p>Login / Signup</p>
        </ul>
    </div>
  )
}

export default Nav