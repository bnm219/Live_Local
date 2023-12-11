import React from 'react'
import './App.css'


function Event({cityName, eventsName, eventsDescription}) {


  return (
    <>
      <section>
          <div className="eventName">
            <h3><u>Name</u>: {eventsName}</h3>
          </div>
          <div className="eventDescription">
            <h3><u>Description</u>: {eventsDescription}</h3>
          </div>
      </section>
    </>
  )
}

export default Event