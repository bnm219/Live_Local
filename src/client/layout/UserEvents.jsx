import React from 'react';
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import './App.css';
import { useCancelRsvpMutation } from '../store/userEventsSlice';

function UserEvents({eventId, eventsName, eventsDescription, refresh}) {
  // use the hooks to create the mutation functions we'll use
  const [cancelRsvp] = useCancelRsvpMutation();  

  const token = useSelector(selectToken);


  const cancel = async() => {
    if(token){
        await cancelRsvp(eventId);
        refresh();
    }
}
    return (
        <>
        <section>
            <div className="eventName">
                <h3><u>Name</u>: {eventsName}</h3> <button type="button" className="deleteRSVP" onClick={cancel}>Delete</button>
            </div>
            <div className="eventDescription">
                <h3><u>Description</u>: {eventsDescription}</h3>
            </div>
        </section>
        </>
    )
}

export default UserEvents;