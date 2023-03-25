import React from 'react'

const HotelTicket = ({data, tripType}) => {
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
        <div className="ticket_card hotel_ticket">
            <p className="ticket_card_city">{city ? city : "missing data"}</p>
            <p className="ticket_card_hotel_name">{hotel_name ? hotel_name : "missing data"}</p>
            <p className="ticket_card_check_in">{check_in ? check_in : "missing data"}</p>
            <p className="ticket_card_check_out">{check_out ? check_out : "missing data"}</p>
            <p className="ticket_card_guests">{guests ? guests : "missing data"}</p>
            <p className="ticket_card_room_type">{room_type ? room_type : "missing data"}</p>
            <p className="ticket_card_price_per_night">{price_per_night ? price_per_night : "missing data"}</p>
        </div>
    )
}

export default HotelTicket;