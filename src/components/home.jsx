import React from 'react'
import { Outlet, useNavigate  } from 'react-router-dom';
import TripOptions from "./TripOptions";
import Tickets from "./Tickets";
const Home = ({tripType}) => {
  return (
    <div>
        <TripOptions options={tripType.options} optionLabel={tripType.lable} type={tripType.type}/>
        <Tickets tripType={tripType.type}/>
    </div>
  )
}

export default Home;