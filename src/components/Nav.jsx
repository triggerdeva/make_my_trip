import React, {useContext} from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import {context} from "../App";
import logoutIcon from "../assets/box-arrow-right.svg";
import header from "./header";

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
            <button onClick={() => handleNavigate("/flights")}>
            Flights
            <img src="/src/assets/plane.png" id="flight"></img>
            </button>

            <button onClick={() => handleNavigate("/hotels") }>
            Stays
            <img src="/src/assets/stays.png" id="stays"></img>
            </button>

            <button onClick={() => handleNavigate("/trains") }>
            Trains
            <img src="/src/assets/vandebharat.png" id="train"></img>
            </button>

            <button onClick={() => handleNavigate("/trains") }>
            Bus
            <img src="/src/assets/bus.png" id="bus"></img>
            </button>

            <button onClick={() => handleNavigate("/trains") }>
            Cabs
            <img src="/src/assets/taxi.png" id="cab"></img>
            </button>

            <button onClick={() => handleNavigate("/trains") }>
            Chater Flight
            <img src="/src/assets/charter flight.png" id="chaterflt"></img>
            </button>

            { currentUser ? <button>Hello, { currentUser.email.substring(0, currentUser.email.indexOf('@'))}</button> : <button onClick={() => navigate("loginSignup","replace")}>Login / Signup</button>}
            { currentUser && <img onClick={logout} src={logoutIcon} alt="logout" />}
        </ul>
    </div>
  )
}

export default Nav