import React, {useContext} from 'react'
import {context} from "../App";
import { v4 as uuidv4 } from 'uuid';

const Tickets = ({tripType}) => {
  const {data} = useContext(context);
  return (
    <div className="tickets-container">
        <h2>Available Tickets</h2>
        { data &&
          data.map(item => <p key={uuidv4()}>{JSON.stringify(item)}</p>)
        }
    </div>
  )
}

export default Tickets