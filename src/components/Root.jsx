import React, {useEffect} from 'react';
import { Outlet, useNavigate  } from 'react-router-dom';
import TripOptions from "./TripOptions";
import Home from './home';
import Nav from "./Nav";
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/flights');
  },[])
  return (
    <div className='root'>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Root