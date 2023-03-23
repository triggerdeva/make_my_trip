import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "./Nav";
import TripOptions from "./TripOptions";
const Root = () => {
  return (
    <div className='root'>
        <Nav/>
        <TripOptions/>
        <Outlet/>
    </div>
  )
}

export default Root