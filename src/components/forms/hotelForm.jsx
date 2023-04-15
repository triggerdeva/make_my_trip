import React, {useContext, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {context} from "../../App";
import dateCompare from '../utils/dateCompare';

const hotelForm = ({options,optionLabel,type}) => {
  const {formData, setFormData} = useContext(context);
  const cityInputRef = useRef();
  const checkInInputRef = useRef();
  const checkOutInputRef = useRef();
  const guestInputRef = useRef();
  const roomTypeInputRef = useRef();
  const handleSubmit = (event) => {
      console.log("is submit function running")
      if(checkInInputRef.current.value && checkOutInputRef?.current?.value){
            let result = dateCompare(checkInInputRef.current.value,checkOutInputRef?.current?.value)
            if(!result){
                alert("please fill the correct dates in check in and checkout input fields")
                return 
            }
        }
      event.preventDefault();
      setFormData({
          city : cityInputRef.current.value,
          checkIn : checkInInputRef.current.value,
          checkOut : checkOutInputRef.current.value,
          guest : guestInputRef.current.value,
          roomType : roomTypeInputRef.current.value,
          type : type
      })
      cityInputRef.current.value = "";
      checkInInputRef.current.value = "";
      checkOutInputRef.current.value = "";
      guestInputRef.current.value = "";
      roomTypeInputRef.current.value = "";
  }
  return (
    <form className='trip-options' onSubmit={handleSubmit}>
        {/* trip type : dropdown */}
        <div className="input-group">
            <label htmlFor="tripType">{optionLabel}</label>
            <select ref={roomTypeInputRef} required className="trip-options-input" id="tripType">
                {
                    options.map(option => {
                        return <option key={uuidv4()} value={option.value}>{option.text}</option>
                    })
                }
            </select>
        </div>
        {/* From : text */}
        <div className="input-group">
            <label htmlFor="city">City</label>
            <input ref={cityInputRef} required className="trip-options-input" id="city" type="text" placeholder='destination..' />
        </div>
        {/* Departure : data */}
        <div className="input-group">
            <label htmlFor="check_in">Check In</label>
            <input ref={checkInInputRef} required className="trip-options-input" id="check_in" type="date" />
        </div>
        {/* Return : data */}
        <div className="input-group">
            <label htmlFor="check_out">Check out</label>
            <input ref={checkOutInputRef} required className="trip-options-input" id="check_out" type="date" />
        </div>
        {/* From : text */}
        <div className="input-group">
            <label htmlFor="guest">Guest</label>
            <input ref={guestInputRef} required className="trip-options-input" id="guest" type="text" placeholder='no. of guest..' />
        </div>
        {/* Search : submit */}
        <div className="input-group">
            <input id='submit-trip-options' type="submit" value="Search" />
        </div>
    </form>
  )
}

export default hotelForm