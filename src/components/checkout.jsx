import React, {useEffect,useContext, useState, useRef} from 'react'
import {useParams, useLocation} from "react-router-dom";
import airplane from "../assets/airplane.png";
import hotelImage from "../assets/5-stars.png";
import trainImage from "../assets/rail.png";
import city from "../assets/city.png";
import barcode from "../assets/barcode.jpeg"
import { context } from '../App';
import ReactToPrint from 'react-to-print';
const HotelTicketPreview = ({data}) => {
    const {currentUser} = useContext(context);
    const ticket = useRef(null);
    console.log("is hotesl ticket preview running");
    const {
        city,
        hotel_name,
        check_in,
        check_out,
        room_type,
        price_per_night,
        guests,
        rating
    } = data;
    console.log(data);
    return (
        <>
            <div className="planeTicket_preview_wrapper">
            <div ref={ticket} className='planeTicket_preview'>
                <div className="planeTicket_preview_img hotel_img">
                    <p>{data.from}</p>
                    <img className="airplane_icon" src={hotelImage} alt="" />
                    <p>{data.to}</p>
                </div>
                <div className="details">
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>Hotel</p>
                        <p className='planeTicket_preview_text_secondary'>{hotel_name}</p>
                    </div>
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>Guest name</p>
                        <p className='planeTicket_preview_text_secondary'>{currentUser.email.substring(0, currentUser.email.indexOf('@')) ||"Michelle doe"}</p>
                    </div>
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>Room Type</p>
                        <p className='planeTicket_preview_text_secondary'>{room_type}</p>
                    </div>
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>City</p>
                        <p className='planeTicket_preview_text_secondary'>{city}</p>
                    </div>
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>CheckIn</p>
                        <p className='planeTicket_preview_text_secondary'>{check_in} to {check_out}</p>
                    </div>
                    <div className="detail">
                        <img className='barcode_image' src={barcode} alt="" />
                    </div>
                </div>
                <div className="disclamer">
                    <p>Disclamer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo est sequi quaerat minus eum sed id cum sint impedit nostrum voluptate.</p>
                </div>
            </div>
            </div>
            <ReactToPrint className="print_button"
                trigger={() => <button style={{backgroundColor: "transparent"}} className="print_button">Print this out!</button>}
                content={() => ticket.current}
            />
        </>
    )
}
const PlaneTicketPreview = ({data}) => {
    const ticket = useRef(null);
    return (
        <>
            <div className="planeTicket_preview_wrapper">
            <div ref={ticket} className='planeTicket_preview'>
                <div className="planeTicket_preview_img">
                    <p>{data.from}</p>
                    <img className="airplane_icon" src={airplane} alt="" />
                    <p>{data.to}</p>
                </div>
                <div className="details">
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>Airline</p>
                        <p className='planeTicket_preview_text_secondary'>{data.airlineName}</p>
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
                        <img className='barcode_image' src={barcode} alt="" />
                    </div>
                </div>
                <div className="disclamer">
                    <p>Disclamer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo est sequi quaerat minus eum sed id cum sint impedit nostrum voluptate.</p>
                </div>
            </div>
            </div>
            <ReactToPrint className="print_button"
                trigger={() => <button style={{backgroundColor: "transparent"}} className="print_button">Print this out!</button>}
                content={() => ticket.current}
            />
        </>
    )
}
const TrainTicketPreview = ({data}) => {
    const ticket = useRef(null);
    
    console.log("is the train ticket preview running")
    return (
        <>
            <div className="planeTicket_preview_wrapper">
            <div ref={ticket} className='planeTicket_preview'>
                <div className="planeTicket_preview_img">
                    <p>{data.from}</p>
                    <img className="airplane_icon" src={airplane} alt="" />
                    <p>{data.to}</p>
                </div>
                <div className="details">
                    <div className="detail">
                        <p className='planeTicket_preview_text_primary'>Airline</p>
                        <p className='planeTicket_preview_text_secondary'>{data.airlineName}</p>
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
                        <img className='barcode_image' src={barcode} alt="" />
                    </div>
                </div>
                <div className="disclamer">
                    <p>Disclamer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nemo est sequi quaerat minus eum sed id cum sint impedit nostrum voluptate.</p>
                </div>
            </div>
            </div>
            <ReactToPrint className="print_button"
                trigger={() => <button style={{backgroundColor: "transparent"}} className="print_button">Print this out!</button>}
                content={() => ticket.current}
            />
        </>
    )
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
    console.log("is being paid working? and the current type is", type)
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