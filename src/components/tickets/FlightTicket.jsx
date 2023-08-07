import React from "react";
import { Link } from "react-router-dom";
const FlightTicket = ({ data, tripType, reccomned }) => {
  const {
    from,
    to,
    departure: { departureTime, departureDate },
    return: { returnDate },
    airlineName,
    via: { 0: departure },
    price,
    duration,
  } = data;
  let returnTime = data?.returnTime;
  if (!returnTime) returnTime = "not provided";

  let updatedDepartureDate;
  let updatedReturnDate;
  let departDay, departMonth, departYear;
  let returnDay, returnMonth, returnYear;
  const options = { day: "numeric", month: "long", year: "numeric" };
  if (departureDate) {
    updatedDepartureDate = new Date(departureDate);
    updatedDepartureDate = new Intl.DateTimeFormat("en-US", options).format(
      updatedDepartureDate
    );
    departDay = updatedDepartureDate.split(",")[0].split(" ")[1];
    departMonth = updatedDepartureDate.split(",")[0].split(" ")[0];
    departYear = updatedDepartureDate.split(",")[1];
    console.log(departDay, departMonth, departYear);
  }

  if (returnDate) {
    updatedReturnDate = new Date(returnDate);
    updatedReturnDate = updatedReturnDate.toLocaleDateString("en-US", options);
    returnDay = updatedReturnDate.split(",")[0].split(" ")[1];
    returnMonth = updatedReturnDate.split(",")[0].split(" ")[0];
    returnYear = updatedReturnDate.split(",")[1];
    console.log(returnDay, returnMonth, returnYear);
  }

  //   console.log(updatedReturnDate);
  //   console.log(updatedDepartureDate);
  return (
    <div
      className={
        reccomned
          ? "reccomneded ticket_card flight_ticket"
          : "ticket_card flight_ticket"
      }
    >
      <div className="ticket_card_info_group">
        <div className="label-of-data">
          <p className="label__subtitle">From:</p>
          <p className="FlightTicket_from_location label-subtitle__font">
            {from
              ? from.split("")[0].toUpperCase() +
                from.split("").slice(1).join("")
              : "missing data"}
          </p>
        </div>
        <div className="label-of-data">
          <p className="label__subtitle">To:</p>
          <p className="FlightTicket_to_location label-subtitle__font">
            {to
              ? to.split("")[0].toUpperCase() + to.split("").slice(1).join("")
              : "missing data"}
          </p>
        </div>
        <div className="label-of-data">
          <p className="label__subtitle">Airline:</p>
          <p className="FlightTicket_airlineName label-subtitle__font">
            {airlineName ? airlineName : "missing data"}
          </p>
        </div>
      </div>
      <div className="ticket_card_info_group">
        <div className="label-of-data">
          <p className="label__subtitle">Departure:</p>
          <p className="FlightTicket_departureDate label-subtitle__font">
            {updatedDepartureDate ? `${departDay}` : "missing data"}{" "}
            <span
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >{`${departMonth.slice(0, 3)}'${departYear}`}</span>
          </p>
          <p className="FlightTicket_departureTime label-subtitle__font">
            {departureTime ? departureTime : "missing data"}
          </p>
        </div>
        <div className="label-of-data">
          <p className="label__subtitle">Return:</p>
          <p className="FlightTicket_returnDate label-subtitle__font">
            {updatedReturnDate ? `${returnDay} ` : "missing data"}
            <span
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >{`${returnMonth.slice(0, 3)}'${returnYear}`}</span>
          </p>
          <p className="FlightTicket_returnTime label-subtitle__font">
            {returnTime ? returnTime : "missing data"}
          </p>
        </div>
      </div>
      <div className="ticket_card_info_group">
        <div className="label-of-data">
          <p className="label__subtitle">Price:</p>
          <p className="FlightTicket_price label-subtitle__font">
            {price ? `₹${price}` : "missing data"}
          </p>
        </div>
        <div className="label-of-data">
          <p className="label__subtitle">Duration:</p>
          <p className="FlightTicket_duration label-subtitle__font">
            {duration ? duration : "missing data"}
          </p>
        </div>
      </div>
      <Link
        className="bookTicketBtn"
        to={`/bookTicket/${price}`}
        state={{ data, type: tripType }}
      >
        <button>Book Now</button>
      </Link>
    </div>
  );
};

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
