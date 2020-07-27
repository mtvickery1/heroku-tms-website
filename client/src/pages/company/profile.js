import React, { Component } from 'react';
import { useEffect } from 'react'


import imag1 from "../../images/trdm4.jpg";
import '../../css/mainserv.css';
import { Link } from 'react-router-dom';
import logo4 from '../../images/tms2.png';
// import Footer from '../../components/Footer/footer.js/index.js';
import mission from '../../images/ourmission.png';
import contactus from '../../images/contactus.png';
import hector from '../../images/hector.png';
import alex from '../../images/alex.png';
import alejandro from '../../images/alejandro.png';
import principal from '../../images/tms1.png'
import logo1 from "../../images/grupo_escalante_logo.png";
import logo2 from "../../images/qhelogo2.jpg";
import logo3 from "../../images/provalogo2.png";
import home from '../../images/air.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import './company.css'

function MainServ() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (


    <React.Fragment>

      {/*==================== TMS Profile ====================*/}
      <div className='container navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center blue-text underline">
            <h1>Trade Management Solutions</h1>
          </div>
        </div>

        <br />

        {/* ---------- Body ----------*/}
        <div className="row">

          <div className="col-md-2">
            {/* Filler */}
          </div>
          <div className="col-md-8 profile-body">
            Trade Management Solutions (TMS) is a leading international supply chain provider specializing in import/export, customs brokerage, all modes of transportation, warehousing and distribution.
            <br /><br />
            Founded in 2005, TMS offers an end-to-end solution ensuring a supply chain’s efficiency, security, visibility and compliance. The company provides a full range of services while acting as a single point of contact for its clients.
              <br /><br />
              Headquartered in Round Rock, Texas, and with various locations throughout the U.S. and Mexico, TMS has an expansive footprint throughout the Caribbean,  Central America and South America while serving the global needs of its clients.
            </div>

          <div className="col-md-2">
            {/* Filler */}
          </div>

        </div>

      </div>

      <br /><br />

      {/* ==================== Leader Container ==================== */}
      <div className='container-fluid'>


        {/* ========== Hector ========== */}
        <div className="row hector">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img className="img-fluid rounded rounded-circle" src={hector} alt="" width="300" />
              </div>
              <div className="col-md-8">
                {/* Name */}
                <h2 className='text-center text-md-left'><strong>Hector Quintanar</strong></h2>
                {/* Title */}
                <h3 className='text-center text-md-left blue-text'>President</h3>
                <br />
                Hector Quintanar has over 25 years of experience in both domestic and international High Tech markets within along with diverse experience in quality, manufacturing, supply chain management, and project management.
                <br /><br />
                Quintanar began his career in the Xerox Corporation and held positions in Quality Assurance and Operations Management. His responsibility included ISO 9002 certifaction, Business Process Improvement, Corporate strategies and Manufacturing Operations. Within his years of experience, one of his key roles was establishing the Dell Direct Model of products supply from USA factories to Latin-America market customers, and leading of Dell Brazil Manufacturing Center start up.

              </div>
            </div>

            <br />

            <div className="row">

              {/* Filler */}
              <div className="col-md-12">
                Quintanar holds a bachelor’s degree in Electrical Engineering from Instituto Politecnico in Mexico City, Mexico. He is also trained in Manufacturing Incorporated Strategies from Harvard University in Boston Massachusetts. Mr. Quintanar is also a founding partner of QHE Logistics - a world wide transportation service, a partner of GES Returns - an asset recovery business, and partner of Trade Management Solutions - LP.
                <br /><br />

                Quintanar previously served in a number of senior management roles for Dell Inc. his responsibilities were in Manufacturing and Supply Chain related positions; Mexico Re-configuration Plant Manager, Operations Manager, International Logistics Manager and Project Leader for Latin America facilities start up.
                <br /><br />


                During his assignment to the Brazil project, the team established the first RECOF approval (in-plant bonded warehouse with tax deferral capability) for any foreign company with operations in Brazil.
                <br /><br />

                In his career in XEROX Corporation, Quintanar held multiple positions to key executive levels. During his 10 years at Dell, he played key roles in the international growth of the company.
                <br /><br />


              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>

        {/* ========== Alejandro ========== */}
        <div className="row alejandro">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img id='alejandro-img' className="img-fluid rounded rounded-circle" src={alejandro} alt="" width="300" />
              </div>
              <div className="col-md-8 text-center text-md-left ">
                {/* Name */}
                <h2><strong>Alejandro Llorente</strong></h2>
                {/* Title */}
                <h3 className='blue-text text-center text-md-left '>Vice President</h3>
                <br />
                Alejandro Llorente has over 25 years of experience working for transnational companies within the retail, logistics and finacial sectors. His areas of expertise include: Logistics, Finance, Project Management, Planning, Warehousing, financial services, HR, IT, Finance Modeling, Quality, Business development and Coaching. Mr.Llorente has led TMS as the General Manager for the past 8 years, and has held management senior positions such as Chief Financial Officer of Red Bull Mexico, Chief Financial Officer for Covidien, Regional Process Improvement Director for American Express, as well as business consultant for Price Waterhouse Coopers. Mr.Llorente holds a Bachelor Degree in Business Administration and a Masters Degree in Finance.
              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>

        {/* ========== Alex ========== */}
        <div className="row alex">

          {/* Filler */}
          <div className="col-md-1"></div>

          {/* {/* ---------- Content ---------- */}
          <div className="col-md-10 profile-body">
            <div className='row'>
              {/* Photo */}
              <div className="col-md-4 text-center col-v-centered">
                <img id='alex-img' className="img-fluid rounded rounded-circle" src={alex} alt="" width="300" />
              </div>
              <div className="col-md-8 text-center text-md-left ">
                {/* Name */}
                <h2><strong>Alex Quintanar</strong></h2>
                {/* Title */}
                <h3 className='blue-text text-center text-md-left '>Chief Operations Officer</h3>
                <br />

                Alex Quintanar has over 10 years of experience working in the logistics sector. His areas of expertise include: International Commerce, Custom Brokerage, Project Management, Warehousing, Ocean/Air traffic, Business Development and Finance. Alex leads TMS traffic and Operations department as the Chief Operations Officer for the past 8 years, Alex holds a Bachelor Degree in Financial Management and has been certified and holds a License as Customer Broker.
                <br />

                One of his key roles has been to develop a new line of business at the Miami warehouse from FTZ Capabilities to Second Touch Services for computing equipment.

              </div>
            </div>

          </div>

          {/* Filler */}
          <div className="col-md-1"></div>
        </div>

      </div>

    </React.Fragment>

  );
}

export default MainServ;