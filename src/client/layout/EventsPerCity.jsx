
import React from 'react'
import { useGetCityQuery } from '../store/evenentsPerCitiesSlice'
import { useParams, Link } from 'react-router-dom';

export default function listOfEvents() {
    let { city } = useParams();
    console.log(city);
    const {data, isError, isLoading} = useGetCityQuery(city);
    console.log(data);

    // handle the case where the data is still loading
    if (isLoading){
      return (<p>Loading . . .</p>)
    }
  
    // handle the case where there's an error in the API call
    if (isError){
      return (<p>Error . . .</p>)
    }

    return (
        <div>
            {data?.map((i) => (
                <div>Name: {i.name} Description: {i.description}</div>
          ))}
        </div>
    )
}