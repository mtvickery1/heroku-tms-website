import React, { Component } from 'react';
// CSS
import './Intro.css'


function Intro() {
  return (

    <div id='intro-container' className='container-fluid text-center'>

      {/* Row */}
      <div className="row">

        {/* Col */}
        <div className="intro-col col-lg-12">
          <div id='intro-title'>Trade Management Solutions</div>
          <br/>
          <div id='intro-body'>Our philosophy is based upon an “Upstream Approach” that eliminates waste in the supply chain such as basic cost, handling, delays, and unnecessary expenses. TMS bases its success upon its proven Three-Point System.</div>

        </div>
      </div>



    </div>
  );
}
export default Intro;
