import React from 'react'
import { useGetCityQuery } from '../store/eventsPerCitiesSlice'
import { useParams } from 'react-router-dom';
import citySkyline from '../../img/citySkyline.png';
import Events from './Events'

export default function EventsPerCity() {
    let { city } = useParams();
    const {data, isError, isLoading, refetch} = useGetCityQuery(city);

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
    function upperCaseName(names){
      let words = names.split(" ");
      let wordsArr = [];
      wordsArr = words.map(w =>{
        const firstLetter= w.charAt(0).toUpperCase();
        const rest = w.slice(1).toLowerCase();
        return firstLetter + rest;
      });
      return wordsArr.join(" ");
    }
    function upperCaseDescription(descriptions){
      let words = descriptions.split(".");
      let wordsArr = [];
      wordsArr = words.map(w =>{
        const firstLetter= w.charAt(0).toUpperCase();
        const rest = w.slice(1).toLowerCase();
        return firstLetter + rest;
      });
      return wordsArr.join(" ");
    }

    return (
        <div>
          <section>
            <img src={citySkyline} alt="City Skyline"></img>
            <h2>Events in {city}</h2>
          </section>
            {data?.map((e,i) => <Events eventId={e.id} eventsName={upperCaseName(e.name)} eventsDescription={upperCaseDescription(e.description)} key={`${e}-${i}`} refresh={refresh}/>)}                      
        </div>
    )
}