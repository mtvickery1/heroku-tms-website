import React, { Component } from 'react';
import { useEffect } from 'react'



import '../../css/mainserv.css';
import { Link } from 'react-router-dom';
import pic5 from '../../images/tms5.png';
import pic6 from '../../images/warehouseflow.png';
import pic1 from '../../images/tms3.png';
import pic2 from '../../images/image3.png';
import pic4 from '../../images/profile.jpg';
import home from '../../images/home_2.jpg';
import experts from '../../images/tms6.png';

function MainServ() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      {/* ==================== Services Container ==================== */}
      <div id='services-container' className='container-fluid navspace'>

        {/* ========== What we do? ========== */}
        <div className="row">

          <div className="col-md-10 col-xl-6 offset-md-1">
            <p className="font-italic blue-text"><h2>What we do?</h2></p>
            <p className="font-italic"><h3><small>Our philosophy is based upon an “Upstream Approach” that eliminates waste in the supply chain such as basic cost, handling, delays, and unnecessary expenses. TMS bases its success upon its proven Three-Point System.
            </small></h3></p>
            <br></br>

            <p className="font-italic"><h3><small>1. Offer a more cost-efficient service by utilizing an “Upstream Model” preventing customs process delays and ensuring timely delivery.</small></h3></p>
            <br></br>
            <p className="font-italic"><h3><small> 2. Provide faster cycle time to customers through optimization of Customs Clearance Time.</small></h3></p>
            <br></br>
            <p className="font-italic"><h3><small> 3. Maximize efficiency and savings on logistics programs by providing exemplary service in Origin and Destination countries.</small></h3></p>
          </div>


          {/* Global Knowledge Image */}

          <div className="col-xl-4 text-center col-v-centered">
            <a href="#">
              <img id='serv-1' className="img-fluid rounded mb-3 mb-md-0 text-right" src={pic2} alt="" />
            </a>
          </div>




        </div>

        {/* BREAK */}
        <br></br>

        {/* ========== Origin Services ========== */}
        <div className="row">

          {/* Col */}
          <div className="col-md-10 offset-md-1">
            <p className="font-italic blue-text"><h2>Origin Services</h2></p>
            <p className="font-italic"><h3><small>Our “Upstream Approach” to the delivery process allows us to eliminate disturbances within the supply chain before they happen. This prevents any unforeseen dilemmas or expenses and ensures a clean supply chain from start to finish.</small></h3></p>
            <br></br>
            <p className="font-italic"><h3><small>As an expert in utilizing the best practices of freight forwarding, TMS can identify the right mode of transportation for your product. Our philosophy for transportation is to measure Over the Road (OTR) in hours —not days and to measure Ocean transit in days —not weeks, resulting in a faster lead-time and a greater customer experience.</small></h3></p>

          </div>
        </div>

        <div className="row">
          {/* Transit */}
          <div className="col-md-5 offset-md-1">
            <div class="card bg-light mb-3">
              <div class="card-header"><h4 class="card-title"><strong>Freight Transportation</strong></h4></div>
              <div class="card-body">
                <p class="card-text"><h5>Freight Forwarding</h5></p>
                <p class="card-text"><h5>All Modes of Transportation</h5></p>
                <p class="card-text"><h5>FTL/LTL Options</h5></p>
                <p class="card-text"><h5>Oversize Loads</h5></p>
                <p class="card-text"><h5>Cargo Tracking Plataform</h5></p>
                {/* <p class="card-text"><h5>Electronic Freight Security Services</h5></p> */}
                <p class="card-text"><h5>Complete Project Logistics Management</h5></p>
                <p class="card-text"><h5>Heavy Haul Capabilities</h5></p>
                {/* <p class="card-text"><h5>Licenses & Permits</h5></p> */}
                {/* <p class="card-text"><h5>Multiple Modes of Transportation</h5></p> */}
                <p class="card-text"><h5>Consolidation</h5></p>
                <p class="card-text"><h5>Cross-Docking</h5></p>
                <p class="card-text"><h5>Secured Port Facilities</h5></p>
                {/* <p class="card-text"><h5>Commodity Issues</h5></p> */}
              </div>
            </div>
          </div>


          {/* Key Specialties */}
          <div className="col-md-5">
            <div class="card bg-light mb-3">
              <div class="card-header"><h4 class="card-title"><strong>Key Specialties</strong></h4></div>
              <div class="card-body">
                <p class="card-text"><h5>Commercial Documentation Validation</h5></p>
                <p class="card-text"><h5>Export Compliance</h5></p>
                <p class="card-text"><h5>Commodity Issues</h5></p>
                <p class="card-text"><h5>Licenses & Permits</h5></p>
                {/* <p class="card-text"><h5>Mode of Transit</h5></p> */}
                {/* <p class="card-text"><h5>Consolidation</h5></p> */}
                {/* <p class="card-text"><h5>Cross-Docking</h5></p> */}
                {/* <p class="card-text"><h5>Secured Port Facilities</h5></p> */}
                <p class="card-text"><h5>Warehousing & Distribution</h5></p>
                <p class="card-text"><h5>FTZ</h5></p>
                <p class="card-text"><h5>Bonded Warehouse</h5></p>
                <p class="card-text"><h5>License US Custom Broker</h5></p>
              </div>
            </div>
          </div>




        </div>





        {/* BREAK */}
        <br />


        {/* ========== Destination Services ========== */}

        <div className="row">
          <div className='col-md-10 offset-md-1 blue-text'>
            <h2>Destination Services</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-md-4 offset-md-1">
            {/* Key Specialties Card */}
            <div class="card bg-light mb-3">
              <div class="card-header"><h4 class="card-title"><strong>Key Specialties</strong></h4></div>
              <div class="card-body">
                <p class="card-text"><h5>Customs Brokerage.</h5></p>
                <p class="card-text"><h5>Proper Cargo Documentation.</h5></p>
                <p class="card-text"><h5>Days Sales Inventory Reduction (DSI).</h5></p>
                <p class="card-text"><h5>Expenses Reduction.</h5></p>
                <p class="card-text"><h5>Duties & Taxes.</h5></p>
                <p class="card-text"><h5>Importer of Record (IOR) Services.</h5></p>
              </div>
            </div>

          </div>

          {/* Destination Services Text */}
          <div className="col-md-6 font-italic">

            <h3>
              <small>We manage every aspect of the customs clearance process, which can often be tedious and troublesome.  Lack of proper documentation can lead to stuck merchandise, which can be costly to resolve. Our import management solution reduces supply chain inventory and improves order to delivery time, resulting in subsequent reduction in brokerage and transportation costs.</small>
            </h3>

            <br></br>

            <h3>
              <small>We manage every aspect of the customs clearance process, which can often be tedious and troublesome.  Lack of proper documentation can lead to stuck merchandise, which can be costly to resolve. Our import management solution reduces supply chain inventory and improves order to delivery time, resulting in subsequent reduction in brokerage and transportation costs. We achieve success by managing secure, regulatory-compliant, transportation and warehousing service providers.</small>
            </h3>

            <br></br>

            <h3>
              <small>Products are in good hands with TMS. We bring only the best quality and peace of mind while providing the savings and benefits that come with a full service, one source provider.</small>
            </h3>
          </div>
        </div>

        {/* Break */}
        <br />

        {/* Row */}
        <div className="row">

          {/* Custom Import */}
          <div className="col-md-10 col-lg-4 offset-md-1">

            <strong className="red-text"><h3>Customs Import Process</h3></strong>
            <h3>
              <small> Prior to import, all goods must be classified to determine their duty obligations at importation and applicable export controls. Failure to exercise reasonable care when classifying goods can result in shipment delays, increased duties, fines and seizure of merchandise. TMS is involved in every aspect of the customs clearance process. We ensure products are cleared for the next step until reaching its final destination.</small>
            </h3>

            <br></br>

            {/* Warehousing and Distribution */}
            <strong className="red-text"><h3>In Country Warehousing and Distribution</h3></strong>
            <h3>
              <small> Through its key partnerships and alliances, TMS can provide full warehousing and distribution services with on-line inventory management and visibility.</small>
            </h3>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <a href="#">
              <img id='dest-img' className="img-fluid rounded mb-3 mb-md-0 text-right" src={experts} alt="" />
            </a>
          </div>

        </div>

        <br></br>

        {/* ========== Warehousing Services ========== */}

        <div className="row">
          <div className='col-md-10 offset-md-1 blue-text'>
            <h2>Warehousing Services</h2>
          </div>
        </div>


        <div className="row">

          {/* Warehousing Services Card */}
          <div className="col-md-10 offset-md-1">
            <div class="card bg-light">
              <div class="card-header"><h4 class="card-title"><strong>Key Specialties</strong></h4></div>
              <div class="card-body">
                <p className="card-text"><h3><small>Warehousing</small></h3></p>
                <p className="card-text"><h3><small>Cross Docking</small></h3></p>
                <p className="card-text"><h3><small>FTL</small></h3></p>
              </div>
            </div>
          </div>

        </div>

        {/* BREAK */}
        <br />


      </div >

    </React.Fragment>

  );
}

export default MainServ;