import React from 'react'
import {Link} from "react-router-dom";
const FlightTicket = ({data, tripType}) => {
    const {
        from,
        to,
        departure:{
            departureTime,
            departureDate
        },
        return:{
            returnTime,
            returnDate
        },
        airlineName,
        via:{0 : departure},
        price,
        duration
    } = data;
    return (
        <div className="ticket_card flight_ticket">
            <p className="FlightTicket_from_location">flight loaction: {from ? from : "missing data"}</p>
            <p className="FlightTicket_to_location">destination: {to ? to : "missing data"}</p>
            <p className="FlightTicket_departureTime">departure time: {departureTime ? departureTime : "missing data"}</p>
            <p className="FlightTicket_departureDate">departure date: {departureDate ? departureDate : "missing data"}</p>
            <p className="FlightTicket_returnTime">return time: {returnTime ? returnTime : "missing data"}</p>
            <p className="FlightTicket_returnDate">return date: {returnDate ? returnDate : "missing data"}</p>
            <p className="FlightTicket_airlineName">arline name: {airlineName ? airlineName : "missing data"}</p>
            <p className="FlightTicket_departure">departure : {departure ? departure : "missing data"}</p>
            <p className="FlightTicket_price">Price : {price ? price : "missing data"}</p>
            <p className="FlightTicket_duration">duration : {duration ? duration : "missing data"}</p>
            <Link className="bookTicketBtn" to={`/bookTicket/${price}`}>
                <button >book</button>
            </Link>
        </div>
    )
}

export default FlightTicket