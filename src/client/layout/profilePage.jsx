import React from 'react'
import { useGetProfileQuery } from '../store/userEventsSlice';
import UserEvents from './UserEvents';

function ProfilePage() {
    const {data, isError, isLoading, refetch} = useGetProfileQuery();

    function refresh(){
        refetch()
    }

    // handle the case where the data is still loading
    if (isLoading){
        return (<p>Loading . . .</p>)
    }

    // handle the case where there's an error in the API call
    if (isError){
        return (<p>Error . . .</p>)
    }
    //TODO add a method that checks for data and returns a string if the array is empty
if(data.length > 0){
    return (
        <main>
            <section>
            <h2>Your Events</h2>
            </section>
            <section>
            <div className="events-grid-container">
            {data?.map((e,i) => (
                <UserEvents eventId={e.id} eventsName={e.name} eventsDescription={e.description} key={`${e}-${i}`} refresh={refresh}/>
                ))}
            </div>
            </section>
        </main>
    )
} else {
    return(
        <>
        <section>
            <h3>Return to the homepage and click on your city to add events.</h3>
        </section>
        </>
    )
  }
}

export default ProfilePage;