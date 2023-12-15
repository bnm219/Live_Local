import React from 'react';
import landingpageimg2 from '../../img/landingpageimg2.png';
import { useGetCitiesQuery } from '../store/citiesSlice';
import { Link } from "react-router-dom";

function MainSection() {
  const {data, isError, isLoading} = useGetCitiesQuery();

    // handle the case where the data is still loading
    if (isLoading){
      return (<p>Loading . . .</p>)
    }
  
    // handle the case where there's an error in the API call
    if (isError){
      return (<p>Error . . .</p>)
    }

  return (
    <main>
      <section>
        <img src={landingpageimg2} alt="Women sitting and talking on a bench in a field full of flowers"></img>
        <h2>Find Events In Your City</h2>
      </section>
      <section>
      <div className="grid-container">
        {data.map((e,i) => (
          <div key={`${e}-${i}`}><Link to = {`/city/${e.city}`} >{e.city} </Link></div>
          ))}
      </div>
      </section>
    </main>
  );
}

export default MainSection;