import React, { Component } from 'react';
import imag1 from "../../images/trdm4.jpg";
import '../../css/mainserv.css';
import { Link } from 'react-router-dom';
import logo4 from '../../images/tms2.png';
// import Footer from '../../components/Footer/footer.js/index.js';
import mission from '../../images/ourmission.png';
import contactus from '../../images/contactus.png';
import principal from '../../images/tmstruckd.png'
import lastone from '../../images/tms1.png'
import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/qhelogo2.jpg";
import logo3 from "../../images/provalogo2.png";
import home from '../../images/air.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

function Leadership() {
  return (

    <>

      <div className='container-fluid navspace'>

        <div className="page-header">
          <h1 id="timeline" className="text-primary"><strong>GET TO KNOW OUR LEADERS</strong></h1>
        </div>
        <div className="row">
          <div className="col-md-5">
            <p className="font-italic"><h2>THE FACES OF TMS</h2></p>
            <p className="font-italic"><h3><small>
              Trade Management Solutions (TMS) is a leading international supply chain provider specializing in import/export, customs brokerage, all modes of transportation, warehousing and distribution.
      </small></h3></p>
            <br></br>

            <p className="font-italic"><h3><small>Founded in 2005, TMS offers an end-to-end solution ensuring a supply chain’s efficiency, security, visibility and compliance. The company provides a full range of services while acting as a single point of contact for its clients.</small></h3></p>
            <br></br>
            <p className="font-italic"><h3><small>Headquartered in Round Rock, Texas, and with various locations throughout the U.S. and Mexico, TMS has an expansive footprint throughout the Caribbean,  Central America and South America while serving the global needs of its clients.</small></h3></p>
            <br></br>
          </div>
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={mission} alt="" width="800%" />
            </a>
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-5">
            <div className="page-header">
              <h1 id="timeline" className="text-primary"><strong>EXECUTIVE LEADERSHIP</strong></h1>
            </div>

            <p className="font-italic"><h2>Hector Quintanar, President</h2><h3><small>has over 25 years of experience in both domestic and international High Tech markets within along with diverse experience in quality, manufacturing, supply chain management, and project management.
              
            <p>Mr.Quintanar began his career in the Xerox Corporation and held positions in Quality Assurance and Operations Management. His responsibility included ISO 9002 certifaction, Business Process Improvement, Corporate Strategies and Manufacturing Operations. Within his years of experience, one of his key roles was establishing the Dell Direct Model of products supply from USA factories to Latin-America market customers, and leading of Dell Brazil Manufacturing Center start up.
          </p>
              <b></b>
              <p>Mr. Quintanar previously served in a number of senior management roles for Dell Inc. his responsibilities were in Manufacturing and Supply Chain related positions; Mexico Re-configuration Plant Manager, Notebooks Division Operations Manager, International Logistics Manager and Project Leader for Latin America facilities start up.</p>
              <p>Mr.Quintanar holds a bachelors degree in Electrical Engineering from IPN(Instituto Politecnico Nacional)Mexico, with extended studies at Harvard Business School.</p></small></h3></p>

            <p className="font-italic"><h2>Alejandro Llorente, Vice President</h2><h3><small>has over 25 years of experience working for transnational companies within the retail, logistics and finacial sectors. His areas of expertise include: Logistics, Finance, Project Management, Planning, Warehousing, financial services, HR, IT, Finance Modeling, Quality, Business development and Coaching. Mr.Llorente has led TMS as the General Manager for the past 5 years, and has held management senior positions such as Chief Financial Officer of Red Bull Mexico, Chief Financial Officer for Covidien, Regional Process Improvement Director for American Express, as well as business consultant for Price Waterhouse Coopers. Mr.Llorente holds  a Bachelor Degree in Business Administration and a Masters Degree in Finance. </small></h3></p>
            <br></br>
            <p className="font-italic"><h2>Alex Quintanar, Chief Operations Officer</h2><h3><small>has over 10 years of experience working in the logistics sector. His areas of expertise include: International Commerce, Custom Brokerage, Project Management, Warehousing, Ocean/Air traffic, Business Development and Finance. Alex leads TMS traffic and Operations department as the Chief Operations Officer for the past 5 years, Alex holds a Bachelor Degree in Financial Management and has been certified and holds a License as Customer Broker.</small></h3></p>
            <br></br>
          </div>
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={contactus} alt="" width="800" />
            </a>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={lastone} alt="" width="100%" />
            </a>
          </div>
        </div>
        <br></br>

      </div>

    </>

  );
}

export default Leadership;

