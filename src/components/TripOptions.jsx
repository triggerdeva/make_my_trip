import {useState, useEffect} from 'react'

const TripOptions = () => {
  return (
    <form className='trip-options'>
        {/* trip type : dropdown */}
        <div className="input-group">
            <label htmlFor="tripType">Trip type</label>
            <select required className="trip-options-input" id="tripType">
                <option value="flight">Flight</option>
                <option value="train">Train</option>
                <option value="stay">Stay</option>
            </select>
        </div>
        {/* From : text */}
        <div className="input-group">
            <label htmlFor="from">From</label>
            <input required className="trip-options-input" id="from" type="text" placeholder='From destination..' />
        </div>
        {/* To : text */}
        <div className="input-group">
            <label htmlFor="to">To</label>
            <input required className="trip-options-input" id="to" type="text" placeholder='To destination..' />
        </div>
        {/* Departure : data */}
        <div className="input-group">
            <label htmlFor="departureDate">Departure Date</label>
            <input required className="trip-options-input" id="departureDate" type="date" />
        </div>
        {/* Return : data */}
        <div className="input-group">
            <label htmlFor="returnDate">return Date</label>
            <input required className="trip-options-input" id="returnDate" type="date" />
        </div>
        {/* Search : submit */}
        <div className="input-group">
            <input required id='submit-trip-options' type="submit" value="Search" />
        </div>
    </form>
  )
}

export default TripOptions