import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// CSS
import './Main.css'

// Media
import imag1 from "../../../images/services.jpg";
import imag2 from "../../../images/warehouseTMStruck.jpeg";
import imag3 from "../../../images/warehouseteam.jpg";
import imag4 from "../../../images/profile.jpg";
import imag5 from "../../../images/new/cfi-2.png";
import imag6 from "../../../images/logo2.png";
import imag7 from "../../../images/air.jpg";

function Main() {
  return (

    <div id='main-container' className='container-fluid'>

      <div id='spacer'>

        {/* First row of pictures */}
        <div className="row">

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <Link to="/profile">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag3} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  About TMS
                </div>
              </div>
            </Link>
          </div>

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <Link to="/services">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag1} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  Our Services
                </div>
              </div>
            </Link>
          </div>

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <Link to="/warehouse">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag2} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  Warehouse
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* Second row of pictures */}
        <div className="row">

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <a target='_blank' href="http://apps.tms-lp.com/ORTrack/Tracking">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag4} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  Tracking
                </div>
              </div>
            </a>
          </div>

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <Link to="/cfi">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag5} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  Computer Deployment Services
                </div>
              </div>
            </Link>
          </div>

          {/* Col */}
          <div class="hvrbox col px-0 frame">
            <Link to="/contactus">
              <img className="img-fluid m-x-auto d-block img-responsive blur" src={imag6} alt="" />

              <div class="hvrbox-layer_top">
                <div class="hvrbox-text">
                  Contact Us
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
export default Main;
