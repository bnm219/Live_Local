import React from 'react';
import { useSelector } from "react-redux";
import { selectToken } from "../features/auth/authSlice";
import './App.css';
import { useAddRsvpMutation } from '../store/eventsPerCitiesSlice';

function Event({eventId, eventsName, eventsDescription, refresh}) {
  // use the hooks to create the mutation functions we'll use
  const [addRsvp] = useAddRsvpMutation();  

  const token = useSelector(selectToken);

  const rsvp = async() => {
    if(token){
    await addRsvp(eventId);
    refresh();
    alert(`You have added ${eventsName} to your  profile.`);
    } else {
      alert('Please log in to add this event to your profile.')
    }
  }

  return (
    <>
      <section>
          <div className="eventName">
            <h3><u>Name</u>: {eventsName}</h3> <button type="button" className="addRSVP" onClick={rsvp}>Save</button>
          </div>
          <div className="eventDescription">
            <h3><u>Description</u>: {eventsDescription}</h3>
          </div>
      </section>
    </>
  )
}

export default Event