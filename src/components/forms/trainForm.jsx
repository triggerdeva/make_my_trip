import React, {useContext, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {context} from "../../App";
import dateCompare from '../utils/dateCompare';

const trainForm = ({options,optionLabel,type}) => {
  const {formData, setFormData} = useContext(context);
  const fromInputRef = useRef();
  const toInputRef = useRef();
  const travelDateInputRef = useRef();
  const classInputRef = useRef();
  const handleSubmit = (event) => {
      console.log("is submit function running")
      if(fromInputRef.current.value === toInputRef.current.value){
        alert("please fill the correct location name in 'From' and 'To' input fields")
        return 
    }
      event.preventDefault();
      setFormData({
          from : fromInputRef.current.value,
          to : toInputRef.current.value,
          departure : travelDateInputRef.current.value,
          class : classInputRef.current.value,
          type : type
      })
      fromInputRef.current.value = "";
      toInputRef.current.value = "";
      travelDateInputRef.current.value = "";
      classInputRef.current.value = "";
  }
  return (
    <form className='trip-options' onSubmit={handleSubmit}>
        {/* trip type : dropdown */}
        <div className="input-group">
            <label htmlFor="tripType">{optionLabel}</label>
            <select required className="trip-options-input" id="tripType">
                {
                    options.map(option => {
                        return <option key={uuidv4()} value={option.value}>{option.text}</option>
                    })
                }
            </select>
        </div>
        {/* From : text */}
        <div className="input-group">
            <label htmlFor="from">From</label>
            <input ref={fromInputRef} required className="trip-options-input" id="from" type="text" placeholder='From destination..' />
        </div>
        {/* To : text */}
        <div className="input-group">
            <label htmlFor="to">To</label>
            <input ref={toInputRef} required className="trip-options-input" id="to" type="text" placeholder='To destination..' />
        </div>
        {/* Travel date */}
        <div className="input-group">
            <label htmlFor="travelDate">Travel Date</label>
            <input ref={travelDateInputRef} required className="trip-options-input" id="travelDate" type="date" />
        </div>
        <div className="input-group">
            <label htmlFor="classType">Class</label>
            <select ref={classInputRef} required className="trip-options-input" id="classType">
                <option value="first_class">First class</option>
                <option value="second_class">Second class</option>
                <option value="sleeper_class">sleeper class</option>
            </select>
        </div>
        {/* Search : submit */}
        <div className="input-group">
            <input id='submit-trip-options' type="submit" value="Search" />
        </div>
    </form>
  )
}

export default trainForm