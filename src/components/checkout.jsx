import React, {useEffect, useState, useRef} from 'react'
import {useParams, useLocation} from "react-router-dom";

const HotelTicketPreview = ({data}) => {
    return <p>HotelTicketPreview</p>
}
const PlaneTicketPreview = ({data}) => {
    return (
        <div className='planeTicket_preview'>
            <div className="planeTicket_preview_img" style={{backgroundImage : "url(https://thumbs.dreamstime.com/b/airport-runway-to-horizon-picturesque-cirrus-clouds-blue-sky-125314025.jpg)"}}>
                <p>AMS</p>
                <img src="" alt="" />
                <p>JFK</p>
            </div>
            <div className="details">
                <div className="detail">
                    <p className='planeTicket_preview_text_primary'>Passenger</p>
                    <p className='planeTicket_preview_text_secondary'>Michelle doe</p>
                </div>
                <div className="detail">
                    <p className='planeTicket_preview_text_primary'>Passenger</p>
                    <p className='planeTicket_preview_text_secondary'>Michelle doe</p>
                </div>
                <div className="detail">
                    <p className='planeTicket_preview_text_primary'>Flight</p>
                    <p className='planeTicket_preview_text_secondary'>NY341</p>
                </div>
                <div className="detail">
                    <p className='planeTicket_preview_text_primary'>SEAT</p>
                    <p className='planeTicket_preview_text_secondary'>14A</p>
                </div>
                <div className="detail">
                    <p className='planeTicket_preview_text_primary'>Jun-28-2017 AT 08:30AM</p>
                </div>
                <div className="detail">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
const TrainTicketPreview = ({data}) => {
    return <p>TrainTicketPreview</p>
}

const Checkout = () => {
  const {ticketPrice} = useParams()
  const {state} = useLocation()
  const {data, type} = state;
  const [paid, setPaid] = useState(false);
  const [couponCode, setCouponCode] = useState(null);
  const couponInputRef = useRef(null);
  const tickets = {
    "trains" : <TrainTicketPreview data={data} />,
    "hotels" : <HotelTicketPreview data={data} />,
    "flights" : <PlaneTicketPreview data={data} />
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setPaid(true);
  }
  const couponAction = (event, action) => {
    if(action === "apply"){
        setCouponCode(couponInputRef.current.value);
        return null;
    }
    setCouponCode(null);
  }
  return (
    <div className='checkout_page'>
        <div className="checkout_container">
            <div className="price_display">
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
                    <p>Total</p>
                    <p>{Number(ticketPrice) + 1000}</p>
                </div>
                <div className="price_display_group">
                    <p>apply coupon</p>
                    <div className="coupon_input">
                        <div className="inp_grp">
                            <input ref={couponInputRef} type="text" placeholder='enter coupon code' />
                            <button onClick={(e) => couponAction(e,"apply")}>apply</button>
                            <button onClick ={(e) => couponAction(e, "remove")}>remove</button>
                        </div>
                    </div>
                </div>
                {
                    couponCode && (
                        <div className="price_display_group">
                            <p>Coupon Applied: ({couponCode})</p>
                            <p>-100rs</p>        
                        </div>
                    )
                }
                <div className="price_display_group">
                    <p>Total amout</p>        
                    <div className="coupon_total">{couponCode === null ? Number(ticketPrice) + 1000 : Number(ticketPrice) + 1000 - 100}</div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="payment_method">
                <h2>Payment Method</h2>
                <input required name='name' type="text" placeholder='Name on card' />
                <input required name='cardNumber' type="text" placeholder='Card Number' />
                <input required name='exp' type="text" placeholder='Expiry Date' />
                <input required name='cvv' type="text" placeholder='CVV' />
                <button>Pay</button>
            </form>
        </div>
        {paid && tickets[type]}
    </div>
  )
}

export default Checkout