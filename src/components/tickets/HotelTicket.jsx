import React from 'react'
import {Link} from "react-router-dom";
const HotelTicket = ({data, tripType,reccomned}) => {
    const {
        city,
        hotel_name,
        check_in,
        check_out,
        guests,
        room_type,
        price_per_night
    } = data;
    return (
        <div className={reccomned ? "reccomneded ticket_card flight_ticket" : "ticket_card hotel_ticket"}>
            <div className="ticket_card_info_group">
                <p className="ticket_card_city">{city ? city : "missing data"}</p>
                <p className="ticket_card_hotel_name">{hotel_name ? hotel_name : "missing data"}</p>
            </div>
            <div className="ticket_card_info_group">
                <p className="ticket_card_check_in">{check_in ? check_in : "missing data"}</p>
                <p className="ticket_card_check_out">{check_out ? check_out : "missing data"}</p>
                <p className="ticket_card_guests">{guests ? guests : "missing data"}</p>
            </div>
            <div className="ticket_card_info_group">
                <p className="ticket_card_room_type">{room_type ? room_type : "missing data"}</p>
                <p className="ticket_card_price_per_night">{price_per_night ? price_per_night * guests : "missing data"}</p>
            </div>
            <Link className="bookTicketBtn" to={`/bookTicket/${price_per_night}?guests=${guests}`} state={{data, type: tripType }}>
                <button >book</button>
            </Link>
        </div>
    )
}

export default HotelTicket;