import React from 'react'
import {Link} from "react-router-dom";
const FlightTicket = ({data, tripType, reccomned}) => {
    const {
        from,
        to,
        departure:{
            departureTime,
            departureDate
        },
        return:{
            returnDate
        },
        airlineName,
        via:{0 : departure},
        price,
        duration
    } = data;
    let returnTime = data?.returnTime;
    if(!returnTime)
        returnTime = "not provided"
    return (
        <div className={reccomned ? "reccomneded ticket_card flight_ticket" : "ticket_card flight_ticket"}>
            <div className="ticket_card_info_group">
                <p className="FlightTicket_from_location">flight loaction: {from ? from : "missing data"}</p>
                <p className="FlightTicket_to_location">destination: {to ? to : "missing data"}</p>
                <p className="FlightTicket_airlineName">arline name: {airlineName ? airlineName : "missing data"}</p>
            </div>
            <div className="ticket_card_info_group">
                <p className="FlightTicket_departureTime">departure time: {departureTime ? departureTime : "missing data"}</p>
                <p className="FlightTicket_returnTime">return time: {returnTime ? returnTime : "missing data"}</p>
                <p className="FlightTicket_returnDate">return date: {returnDate ? returnDate : "missing data"}</p>
                <p className="FlightTicket_duration">duration : {duration ? duration : "missing data"}</p>
            </div>
            <div className="ticket_card_info_group">
                <p className="FlightTicket_price">Price : {price ? price : "missing data"}</p>
                <p className="FlightTicket_departureDate">departure date: {departureDate ? departureDate : "missing data"}</p>
                <p className="FlightTicket_departure">departure : {departure ? departure : "missing data"}</p>
            </div>
            <Link className="bookTicketBtn" to={`/bookTicket/${price}`} state={{data, type: tripType }}>
                <button >book</button>
            </Link>
        </div>
    )
}

export default FlightTicket;


/* 

    from
    to 
    airline name 

    departure
    price 
    duration

    price 
    via 
    duration

*/