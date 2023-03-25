import React, {useEffect} from 'react'
import {useParams, useLocation} from "react-router-dom";

const HotelTicketPreview = ({data}) => {
    return <p>HotelTicketPreview</p>
}
const PlaneTicketPreview = ({data}) => {
    return <p>PlaneTicketPreview</p>
}
const TrainTicketPreview = ({data}) => {
    return <p>TrainTicketPreview</p>
}

const Checkout = () => {
  const {ticketPrice} = useParams()
  let {state} = useLocation()
  let {data, type} = state;
  const tickets = {
    "trains" : <TrainTicketPreview data={data} />,
    "hotels" : <HotelTicketPreview data={data} />,
    "flights" : <HotelTicketPreview data={data} />
  }
  return (
    <div className='checkout_page'>
        <div className="checkout_container">
            <div className="pric_display">
                <h2>Fare Summary</h2>
                <div className="price_display_group">
                    <p>Base Fare</p>
                    <p>{ticketPrice}</p>
                </div>
                <div className="price_display_group">
                    <p>Fee & Surcharges</p>
                    <p>1000</p>
                </div>
                <div className="price_display_group">
                    <p>Total amout</p>
                    <p>{Number(ticketPrice) + 1000}</p>
                </div>
            </div>
            <div className="payment_method">
                <h2>Payment Method</h2>
                <input type="text" placeholder='Name on card' />
                <input type="text" placeholder='Card Number' />
                <input type="text" placeholder='Expiry Date' />
                <input type="text" placeholder='CVV' />
                <button>Pay</button>
            </div>
        </div>
        {tickets[type]}
    </div>
  )
}

export default Checkout