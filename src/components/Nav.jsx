import React, {useContext} from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import {context} from "../App";
const Nav = () => {
  const {setData} = useContext(context);
  const navigate = useNavigate();
  // const handleNavigate = (to) => {
  //   navigate(to)
  //   setData(null);
  // }
  return (
    <div className='navbar'>
        <img src={logo} id="logo" />
        <ul className='nav-items'>
            <button onClick={() => handleNavigate("/flights") }>Flights</button>
            <button onClick={() => handleNavigate("/hotels") }>Stays</button>
            <button onClick={() => handleNavigate("/trains") }>Trains</button>
            <button onClick={() => navigate("loginSignup","replace")}>Login / Signup</button>
        </ul>
    </div>
  )
}

export default Nav