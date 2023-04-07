import React from 'react'
import {Link} from "react-router-dom"
const TrainTicket = ({data, tripType,reccomned}) => {
    const {
        from,
        to,
        departure:{
            departureTime,
            departureDate
        },
        kilometers,
        train_number,
        price,
        duration
    } = data;
return (
    <div className={reccomned ? "reccomneded ticket_card flight_ticket" : "ticket_card train_ticket"}>
        <div className="ticket_card_info_group">
            <p className="train_ticket_from">{from ? from : "missing data"}</p>
            <p className="train_ticket_to">{to ? to : "missing data"}</p>
            <p className="trin_ticket_departureTime">{departureTime ? departureTime : "missing data"}</p>
        </div>
        <div className="ticket_card_info_group">
            <p className="trin_ticket_departureDate">{departureDate ? departureDate : "missing data"}</p>
            <p className="trin_ticket_kilometers">{kilometers ? kilometers : "missing data"}</p>
        </div>
        <div className="ticket_card_info_group">
            <p className="trin_ticket_train_number">{train_number ? train_number : "missing data"}</p>
            <p className="trin_ticket_price">{price ? price : "missing data"}</p>
            <p className="trin_ticket_duration">{duration ? duration : "missing data"}</p>
        </div>
        <Link className="bookTicketBtn" to={`/bookTicket/${price}`} state={{data, type: tripType }} >
            <button >book</button>
        </Link>
    </div>
)
}

export default TrainTicket