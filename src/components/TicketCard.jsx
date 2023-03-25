import React from 'react'

const TicketCard = ({data, tripType}) => {
  console.log("trip type is",tripType);
  return (
    <div className="ticket_card">
        <p>TicketCard</p>
        <p>trip type : {tripType}</p>
        <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default TicketCard;