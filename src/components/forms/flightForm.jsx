import React, {useContext, useRef,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {context} from "../../App";
const flightForm = ({options,optionLabel,type}) => {
    const {formData, setFormData} = useContext(context);
    const [currentFlightType, setCurrentFlightType] = useState("oneWay")
    const fromInputRef = useRef();
    const toInputRef = useRef();
    const departureInputRef = useRef();
    const returnInputRef = useRef();
    const flightTypeRef = useRef();
    const handleSubmit = (event) => {
        console.log("is submit function running")
        event.preventDefault();
        setFormData({
            from : fromInputRef.current.value,
            to : toInputRef.current.value,
            departure : departureInputRef.current.value,
            returnDate : returnInputRef?.current?.value || "not provided",
            type : type,
            flightType : flightTypeRef.current.value
        })
        fromInputRef.current.value = "";
        toInputRef.current.value = "";
        flightTypeRef.current.value = "";
        if(currentFlightType !== "oneWay"){
            returnInputRef.current.value = "";
        }
    }
    const handleSelectChange = (e) => {
        e.preventDefault();
        setCurrentFlightType(e.target.value)
        console.log(e.target.value)
    } 
    return (
        <form className='trip-options' onSubmit={handleSubmit}>
        {/* trip type : dropdown */}
        <div className="input-group">
            <label htmlFor="tripType">{optionLabel}</label>
            <select value={currentFlightType} onChange={handleSelectChange} ref={flightTypeRef} className="trip-options-input" id="tripType">
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
        {/* Departure : data */}
        <div className="input-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input ref={departureInputRef} required className="trip-options-input" id="departureDate" type="date" />
        </div>
        {
            currentFlightType === "twoWay" && (
                <div className="input-group">
                    <label htmlFor="returnDate">return Date</label>
                    <input ref={returnInputRef} className="trip-options-input" id="returnDate" type="date" />
                </div>
            )
        }
        {/* Search : submit */}
        <div className="input-group">
            <input id='submit-trip-options' type="submit" value="Search" />
        </div>
    </form>
    )
}

export default flightForm