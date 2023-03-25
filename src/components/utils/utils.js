export const getObjOfType = (formData) => {
    if(formData.type === "flights"){
        const {
            from,
            to,
            departure,
            returnDate,
            flightType 
        } = formData;
        return {
            "from":from,
            "to":to,
            "departure":{
                "departureTime":"06:00PM",
                "departureDate":departure
            },
            "return":{
                "returnTime":"10:00PM",
                "returnDate":returnDate
            },
            "airlineName":"Vistara",
            "via":[departure],
            "price":"5500",
            "duration":"2hr 15min"
        }
    }
    if(formData.type === "trains"){
        const {
            from,
            to,
            departure
        } = formData;
        return {
            "from":from,
            "to":to,
            "departure": {
                "departureTime":"05:00PM",
                "departureDate":departure
            },
            "duration":"15h 40m",
            "kilometers":"1384",
            "price":"1000",
            "train_number":"1089531"
        }
    }
    const {
        city,
        checkIn,
        checkOut,
        guest,
        roomType
    } = formData;
    return {
        "city":city,
        "hotel_name":"Boshan Hotels",
        "check_in":checkIn,
        "check_out":checkOut,
        "room_type":roomType,
        "price_per_night":"4000",
        "guests":guest,
        "rating":"4.4"
    }
}
