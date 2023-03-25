import {useState, useEffect, useContext, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {context} from "../App";
import FlightForm from "./forms/flightForm";
import HotelForm from "./forms/hotelForm";
import TrainForm from "./forms/trainForm";
const TripOptions = ({options,optionLabel,type}) => {
  const tripeType = {
    "flights" : <FlightForm options={options} optionLabel={optionLabel} type={type} />,
    "trains" : <TrainForm options={options} optionLabel={optionLabel} type={type} />,
    "hotels" : <HotelForm options={options} optionLabel={optionLabel} type={type} />,
  }
  
  return (
    <>
        {tripeType[type]}
    </>
  )
}

export default TripOptions