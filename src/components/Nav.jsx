import React, {useContext} from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import {context} from "../App";
import logoutIcon from "../assets/box-arrow-right.svg";
const Nav = () => {
  const {setData,currentUser,setCurrentUser} = useContext(context);
  const navigate = useNavigate();
  const handleNavigate = (to) => {
    navigate(to)
    setData(null);
  }
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/flights");
  }
  return (
    <div className='navbar'>
        <img onClick={() => navigate("/")} src={logo} id="logo" />
        <ul className='nav-items'>
            <button onClick={() => handleNavigate("/flights") }>Flights</button>
            <button onClick={() => handleNavigate("/hotels") }>Stays</button>
            <button onClick={() => handleNavigate("/trains") }>Trains</button>
            { currentUser ? <button>Hello, { currentUser.email.substring(0, currentUser.email.indexOf('@'))}</button> : <button onClick={() => navigate("loginSignup","replace")}>Login / Signup</button>}
            { currentUser && <img onClick={logout} src={logoutIcon} alt="logout" />}
        </ul>
    </div>
  )
}

export default Nav