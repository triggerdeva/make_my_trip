import React, {useEffect} from 'react';
import { Outlet, useNavigate  } from 'react-router-dom';
import TripOptions from "./TripOptions";
import Home from './home';
import Nav from "./Nav";
import Footer from './footer';
const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/flights');
  },[])
  return (
    <div className='root'>
        <Nav/>
        <Outlet/> 
        <Footer />
    </div>
  )
}

export default Root