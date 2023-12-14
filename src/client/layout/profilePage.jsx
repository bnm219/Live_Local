import React from 'react'
import { useGetProfileQuery } from '../store/userEventsSlice';
import UserEvents from './UserEvents';

function ProfilePage() {
    const {data, isError, isLoading} = useGetProfileQuery();
    console.log(data);

    // handle the case where the data is still loading
    if (isLoading){
        return (<p>Loading . . .</p>)
    }

    // handle the case where there's an error in the API call
    if (isError){
        return (<p>Error . . .</p>)
    }

    //TODO add a method that checks for data and returns a string if the array is empty

    return (
        <main>
            <section>
            <h2>Your Events</h2>
            </section>
            <section>
            <div className="events-grid-container">
            {data?.map((e,i) => (
                <UserEvents eventId={e.id} eventsName={e.name} eventsDescription={e.description} key={`${e}-${i}`}/>
                ))}
            </div>
            </section>
        </main>
    );
}

export default ProfilePage;