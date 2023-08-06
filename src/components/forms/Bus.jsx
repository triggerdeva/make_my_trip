import React, { useContext, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { context } from '../../App';
import dateCompare from '../utils/dateCompare';
import './BusForm.css';

const busForm = ({ options, optionLabel, type }) => {
  const { formData, setFormData } = useContext(context);
  const [currentBusType, setCurrentBusType] = useState('oneWay');
  const fromInputRef = useRef();
  const toInputRef = useRef();
  const departureInputRef = useRef();
  const returnInputRef = useRef();
  const busTypeRef = useRef();

  const handleDates = () => {
    // You can add date comparison logic here if required
    // console.log(departureInputRef.current.value,returnInputRef?.current?.value)
    // if(departureInputRef.current.value && returnInputRef?.current?.value){
    //     let result = dateCompare(departureInputRef.current.value,returnInputRef?.current?.value)
    // }
  };

  const handleSubmit = (event) => {
    if (departureInputRef.current.value && returnInputRef?.current?.value) {
      let result = dateCompare(departureInputRef.current.value, returnInputRef?.current?.value);
      if (!result) {
        alert("Please fill the correct dates in departure and return input fields");
        return;
      }
    }
    if (fromInputRef.current.value === toInputRef.current.value) {
      alert("Please fill the correct location name in 'From' and 'To' input fields");
      return;
    }

    console.log('is submit function running');
    event.preventDefault();
    setFormData({
      from: fromInputRef.current.value,
      to: toInputRef.current.value,
      departure: departureInputRef.current.value,
      returnDate: returnInputRef?.current?.value || 'not provided',
      type: type,
      busType: busTypeRef.current.value,
    });

    fromInputRef.current.value = '';
    toInputRef.current.value = '';
    busTypeRef.current.value = '';
    if (currentBusType !== 'oneWay') {
      returnInputRef.current.value = '';
    }
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setCurrentBusType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className="trip-options" onSubmit={handleSubmit}>
      {/* trip type : dropdown */}
      <div className="input-group">
        <label htmlFor="tripType">{optionLabel}</label>
        <select
          value={currentBusType}
          onChange={handleSelectChange}
          ref={busTypeRef}
          className="trip-options-input"
          id="tripType"
        >
          {options.map((option) => {
            return (
              <option key={uuidv4()} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
      {/* From : text */}
      <div className="input-group">
        <label htmlFor="from">From</label>
        <input
          ref={fromInputRef}
          required
          className="trip-options-input"
          id="from"
          type="text"
          placeholder="From destination.."
        />
      </div>
      {/* To : text */}
      <div className="input-group">
        <label htmlFor="to">To</label>
        <input
          ref={toInputRef}
          required
          className="trip-options-input"
          id="to"
          type="text"
          placeholder="To destination.."
        />
      </div>
      {/* Departure : data */}
      <div className="input-group">
        <label htmlFor="departureDate">Departure Date</label>
        <input
          onChange={handleDates}
          ref={departureInputRef}
          required
          className="trip-options-input"
          id="departureDate"
          type="date"
        />
      </div>
      {currentBusType === 'twoWay' && (
        <div className="input-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            onChange={handleDates}
            ref={returnInputRef}
            className="trip-options-input"
            id="returnDate"
            type="date"
          />
        </div>
      )}
      {/* Search : submit */}
      <div className="input-group">
        <input id="submit-trip-options" type="submit" value="Search" />
      </div>
    </form>
  );
};

export default busForm;
