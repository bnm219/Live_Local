import React from 'react';
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import './App.css';
import { useDeleteRsvpMutation } from '../store/userEventsSlice';

function UserEvents({eventId, eventsName, eventsDescription}) {
  // use the hooks to create the mutation functions we'll use
  const [deleteRsvp] = useDeleteRsvpMutation();  

  const token = useSelector(selectToken);


  const cancelRsvp = async() => {
    if(token){
    await deleteRsvp(eventId); //TODO this is not deleting the event
  }
}

  return (
    <>
      <section>
          <div className="eventName">
            <h3><u>Name</u>: {eventsName}</h3> <button type="button" className="deleteRSVP" onClick={cancelRsvp}>Delete</button>
          </div>
          <div className="eventDescription">
            <h3><u>Description</u>: {eventsDescription}</h3>
          </div>
      </section>
    </>
  )
}

export default UserEvents