import React from 'react'

const TrainTicket = ({data, tripType}) => {
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
    <div className="ticket_card train_ticket">
        <p className="train_ticket_from">{from ? from : "missing data"}</p>
        <p className="train_ticket_to">{to ? to : "missing data"}</p>
        <p className="trin_ticket_departureTime">{departureTime ? departureTime : "missing data"}</p>
        <p className="trin_ticket_departureDate">{departureDate ? departureDate : "missing data"}</p>
        <p className="trin_ticket_kilometers">{kilometers ? kilometers : "missing data"}</p>
        <p className="trin_ticket_train_number">{train_number ? train_number : "missing data"}</p>
        <p className="trin_ticket_price">{price ? price : "missing data"}</p>
        <p className="trin_ticket_duration">{duration ? duration : "missing data"}</p>
    </div>
)
}

export default TrainTicket