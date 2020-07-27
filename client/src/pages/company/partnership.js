import React, { Component } from 'react';
import { useEffect } from 'react'


import imag1 from "../../images/trdm4.jpg";
import '../../css/mainserv.css';
import { Link } from 'react-router-dom';
import principal from '../../images/TMSMAIN.png';
// import Footer from '../../components/Footer/footer.js/index.js';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/logos/qhe.png";
import logo3 from "../../images/provalogo2.png";
import dell from "../../images/dell-emc.svg";
import ges from "../../images/ges.png";
import ocean from "../../images/ocean.jpg";
import partner from "../../images/partnership.png";



function MainServ() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      {/* ==================== Partners Container ==================== */}
      <div className='container-fluid navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center blue-text">
            <h1>Our Strategic Partnerships</h1>
          </div>
        </div>

        <br />

        {/* ---------- Body ----------*/}
        <div className="row">

          <div className="col-md-2">
            {/* Filler */}
          </div>
          <div className="col-md-8 profile-body">
            Our strategic partnerships with some of the top leaders in the logistics and transportation industries places us among the most influential supply chain services providers in North America & Latin America, offering a larger area of coverage and services for customers.
            <br /><br />
            With our team of dedicated global account managers, TMS offers the most innovative and effective Dock-to-Customer processes strengthening supply chains and increasing customer profitability.
          </div>

          <div className="col-md-2">
            {/* Filler */}
          </div>

        </div>

        <br /><br />

        {/* ========== Partners Timeline ========== */}
        <ul className="timeline">

          {/* Dell */}
          {/* <li className="timeline-badge">
            <div className="timeline-badge blue-bg"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className="logo">
                      <img src={dell} className="logo" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="col">
                    <p className="font-italic"><h2 className="timeline-title"><strong>Dell EMC</strong></h2></p>
                    <div className="timeline-body">
                      <p className="font-italic"><h3><small>TMS and PROVA have partnered together to offer their clients more than 15,000 square meters of permanent/temporary warehousing at locations within Mexico City, Cancun, and Guadalajara. In conjunction with our warehousing capabilities, we can provide transportation and distribution centers throughout Mexico.</small></h3></p>
                      <br></br>
                      <p><a href>www.dell.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li> */}

          {/* QHE */}
          <li className="timeline-inverted">
            <div className="timeline-badge blue-bg"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className="logo text-center">
                      <img src={logo2} className="logo" width="70%" height="60%" />
                    </div>
                  </div>
                  <div className="col">
                    <p className="font-italic"><h2 className="timeline-title red-text"><strong>QHE Logistics</strong></h2></p>
                    <div className="timeline-body">
                      <p className="font-italic"><h3><small>
                        Via its in-house alliance, TMS and QHE Logistics optimize fulfillment processes for transit across the globe. Together we help clients better monitor, realize and manage their total logistics spend. </small></h3></p>
                      <br></br>
                      <p><a target='_blank' href='http://www.qhe-logistics.com/'>qhe-logistics.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>

          {/* Grupo Escalante */}
          <li className="timeline-badge">
            <div className="timeline-badge blue-bg"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className="logo">
                      <img src={logo1} className="logo" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="col">
                    <p className="font-italic"><h2 className="timeline-title red-text"><strong>Grupo Escalante</strong></h2></p>
                    <div className="timeline-body">
                      <p className="font-italic"><h3><small>Import/export customs brokerage firm, Grupo Escalante, and TMS have combined its industry experience and resources to create the most efficient and effective solution to managing a client’s supply chain to and from Mexico via a seamless border crossing process.</small></h3></p>
                      <br></br>
                      <p><a target='_blank' href='http://www.escalante.com.mx'>escalante.com.mx</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>

          {/* Prova */}
          <li className="timeline-inverted">
            <div className="timeline-badge blue-bg"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className="logo">
                      <img src={logo3} className="logo" width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="col">
                    <p className="font-italic"><h2 className="timeline-title red-text"><strong>PROVA Warehousing</strong></h2></p>
                    <div className="timeline-body">
                      <p className="font-italic"><h3><small>TMS and PROVA have partnered together to offer their clients more than 15,000 square meters of permanent/temporary warehousing at locations within Mexico City, Cancun, and Guadalajara. In conjunction with our warehousing capabilities, we can provide transportation and distribution centers throughout Mexico.</small></h3></p>
                      <br></br>
                      {/* <p><a href>www.provamexico.com</a></p> */}
                      <p><a target='_blank' href='http://www.provamexico.com'>provamexico.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>

          {/* GES */}
          <li className="timeline-badge">
            <div className="timeline-badge blue-bg"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <div className="row">
                  <div className="col col-lg-4">
                    <div className="logo text-center">
                      <img src={ges} className="logo" width="60%" height="60%" />
                    </div>
                  </div>
                  <div className="col">
                    <p className="font-italic"><h2 className="timeline-title red-text"><strong>GES Returns Mexico</strong></h2></p>
                    <div className="timeline-body">
                      <p className="font-italic"><h3><small>An efficient Asset Recovery Business (ARB) to help preserve valuable natural resources.</small></h3></p>
                      <br></br>
                      {/* <p><a href>www.escalante.com.mx</a></p> */}
                      <p><a target='_blank' href='http://www.ges-returns.com'>ges-returns.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>

        </ul>


      </div>

    </React.Fragment>


  );
}

export default MainServ;