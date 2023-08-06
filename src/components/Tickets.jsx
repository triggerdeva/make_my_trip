import React, {useContext} from 'react'
import {context} from "../App";
import { v4 as uuidv4 } from 'uuid';
import TicketCard from "./TicketCard";
import FlightTicket from "./tickets/FlightTicket";
import HotelTicket from "./tickets/HotelTicket";
import TrainTicket from "./tickets/TrainTicket";
import './Tickets.css'

const Tickets = ({tripType}) => {
  const ticketCompType = (ticketData,index) => {
    let reccomned = false
    if(index === 0){
      reccomned = true;
    }
    console.log("look here",tripType)
    let options =  {
      "flights" : <FlightTicket reccomned={reccomned} tripType={tripType} key={uuidv4()} data={ticketData} />,
      "trains" : <TrainTicket reccomned={reccomned} tripType={tripType} key={uuidv4()} data={ticketData} />,
      "hotels" : <HotelTicket reccomned={reccomned} tripType={tripType} key={uuidv4()} data={ticketData} />,
    }
    return options[tripType];
  }
  const {data} = useContext(context);
  return (
    <div className="tickets-container">
        <h2>Available Tickets</h2>
        { data &&
          data.map((ticketData,index) => ticketCompType(ticketData,index))
        }


        <div className="offers">
        <div className="flight-offers">
          <h3>Flight Offers</h3>
          <p>Get 50% off on domestic flights. Use code: MMTFLIGHT50</p>
          <p>Flat 20% discount on international flights. Use code: MMTINT20</p>
          <p>Book now and earn 1000 reward points on your first flight booking.</p>
        </div>

        <div className="hotel-offers">
          <h3>Hotel Offers</h3>
          <p>Flat 30% discount on hotel bookings. Use code: MMTSTAY30</p>
          <p>Book a 3-night stay and get the 4th night free at select hotels.</p>
          <p>Get an extra 15% cashback on hotel bookings using the MMT wallet.</p>
        </div>
      </div>

    </div>
  )
}

export default Tickets