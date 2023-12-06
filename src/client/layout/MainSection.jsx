import React from 'react';
import landingpageimg2 from '../../img/landingpageimg2.png'

function MainSection() {
  return (
    <main>
      <section>
        <img src={landingpageimg2} alt="Women on a bench in a field of flowers"></img>
        <h2>Find Events In Your City</h2>
      </section>
      <section>
      <div className="grid-container">
  <div>City</div>
  <div>City</div>
  <div>City</div>  
  <div>City</div>
  <div>City</div>
  <div>City</div>
  <div>City</div>
  <div>City</div>
</div>
      </section>
    </main>
  );
}

export default MainSection;
