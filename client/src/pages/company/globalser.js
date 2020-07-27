import React, { Component } from 'react';
import imag1 from "../../images/trdm4.jpg";
import '../../css/mainserv.css';
import { Link } from 'react-router-dom';
import logo4 from '../../images/tms2.png';
// import Footer from '../../components/Footer/footer.js/index.js';
import global from '../../images/global.png';
import global2 from '../../images/globalre.png';
import principal from '../../images/global.png'
import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/qhelogo2.jpg";
import logo3 from "../../images/provalogo2.png";
import home from '../../images/air.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";

function Leadership() {
  return (

    <>

      <div className='container-fluid navspace'>


        <div className="page-header">
          <h1 id="timeline" className="text-primary"><strong>COMPANY PROFILE</strong></h1>
        </div>
        <div className="row">
          <div className="col-md-5">
            <p className="font-italic"><h2>Global Reach</h2></p>
            <p className="font-italic"><h3><small>

              Our import and export management solutions deliver a comprehensive program of services such as licensing permits, automated cargo location, and documentation.
      </small></h3></p>
            <br></br>

            <p className="font-italic"><h3><small>We enforce a strict protocol focused on process management, ensuring clients benefit from the efficiency of timely delivery and documented compliance.</small></h3></p>
            <br></br>
            <p className="font-italic"><h3><small>We have deep expertise within Latin America (LATAM), and set no boundaries on where to deliver. Wherever there is cargo, TMS is there to oversee its successful journey throughout the global supply chain.</small></h3></p>
            <br></br>
          </div>
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={global} alt="" width="800%" />
            </a>
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={global2} alt="" width="100%" />
            </a>

          </div>
        </div>
        <br></br>


      </div>

    </>

  );
}

export default Leadership;

