import React from 'react'
import { useParams } from 'react-router-dom';
import './App.css'
import { useAddRsvpMutation } from '../store/eventsPerCitiesSlice'

function Event({eventId, eventsName, eventsDescription}) {
  // use the hooks to create the mutation functions we'll use
  const [addRsvp] = useAddRsvpMutation();  

  const rsvp = async() => {
    await addRsvp(eventId)
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