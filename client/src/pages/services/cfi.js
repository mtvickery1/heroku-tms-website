import React, { Component } from 'react';
import { useEffect } from 'react'


import imag1 from "../../images/trdm4.jpg";
import '../../css/mainserv.css';
// import Footer from '../../components/Footer/footer';
import { Link } from 'react-router-dom';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import pic1 from '../../images/cfi_image.png'
import pic2 from '../../images/servrez.jpg'
import home from '../../images/home_4.jpg'
import home1 from '../../images/projects.png';
import cfi1 from '../../images/new/cfi-1.png';
import cfi2 from '../../images/new/cfi-2.png';
import cfi4 from '../../images/new/cfi-4.png';
import cfi3 from '../../images/new/cfi-3.png';

function MainServ() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      {/* Container */}
      <div className='container-fluid navspace'>

        {/* Row */}
        <div className="row">

          {/* Col */}
          <div className="col-md-6">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={pic1} alt="" width="700" height="300" />
            </a>
          </div>

          {/* Col */}
          <div className="col-md-6">
            <p className="font-italic blue-text"><h2>Computer Deployment Services</h2></p>

            {/* Row */}
            <div className="row">

              {/* Col */}
              <div className="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header">
                    <h4 class="card-title"><strong>Fullfilment </strong></h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text"><h5>Deployment.</h5></p>
                    <p class="card-text"><h5>Consolidation.</h5></p>
                    <p class="card-text"><h5>Drop in box.</h5></p>
                    <p class="card-text"><h5>Custom packing slip and labeling.</h5></p>
                  </div>
                </div>
              </div>

              {/* Col */}
              <div className="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header"><h4 class="card-title"><strong>Rack Integration </strong></h4></div>
                  <div class="card-body">
                    <p class="card-text"><h5>Hardware installation.</h5></p>
                    <p class="card-text"><h5>PDU installation.</h5></p>
                    <p class="card-text"><h5>Over pack consolidation.</h5></p>
                    <p class="card-text"><h5>Cable management.</h5></p>
                    <p class="card-text"><h5>Custom labeling.</h5></p>
                  </div>
                </div>
              </div>

            </div>

            <p></p>

            {/* Row */}
            <div className="row">

              {/* Col */}
              <div className="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header"><h4 class="card-title"><strong>Integration </strong></h4></div>
                  <div class="card-body">
                    <p class="card-text"><h5>System integration.</h5></p>
                    <p class="card-text"><h5>Light assembly.</h5></p>
                    <p class="card-text"><h5>Imaging.</h5></p>
                    <p class="card-text"><h5>Hardware installation.</h5></p>
                    <p class="card-text"><h5>BIOS up/down grade.</h5></p>
                    <p class="card-text"><h5>Personnalization.</h5></p>
                    <p class="card-text"><h5>Laser engraving.</h5></p>
                    <p class="card-text"><h5>MAC address reporting.</h5></p>
                  </div>
                </div>
              </div>

              {/* Col */}
              <div className="col-md-6">
                <div class="card bg-light mb-3">
                  <div class="card-header"><h4 class="card-title"><strong>Rework & Repair </strong></h4></div>
                  <div class="card-body">
                    <p class="card-text"><h5>Test (power up/down).</h5></p>
                    <p class="card-text"><h5>Screen.</h5></p>
                    <p class="card-text"><h5>Visual sort.</h5></p>
                    <p class="card-text"><h5>Web based PPID tracking.</h5></p>
                    <p class="card-text"><h5>Revision control and reporting.</h5></p>
                  </div>
                </div>
              </div>

              <p></p>

            </div>
          </div>
        </div>

        <br></br>

        {/* Row */}
        <div className="row">
          <div className="col">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={home1} alt="" width="100%" />
            </a>
          </div>
        </div>

        <br></br>


        {/* Recreating above image */}
        {/* <div id='cfi-img' className="row text-center">

          <div id='cfi-bg' className='col-12'>
            <div className="row">
              <div className="col-2 offset-md-1">
                <div className="frame-skew">
                  <img id='cfi-img1' className="img-skew" src={cfi3} alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="frame-skew">
                  <img id='cfi-img2' className="img-skew" src={cfi4} alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="frame-skew">
                  <img id='cfi-img3' className="img-skew" src={cfi1} alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="frame-skew">
                  <img id='cfi-img4' className="img-skew" src={cfi2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <br />

      </div>


    </React.Fragment>

  );
}

export default MainServ;