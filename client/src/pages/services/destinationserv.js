import React, { Component } from 'react';
import { useEffect } from 'react'


import '../../css/mainserv.css';
// import Footer from '../../components/Footer/footer.js/index.js';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import pic2 from '../../images/tms6.png';
import home from '../../images/home_3.jpg';
import pic5 from '../../images/servrez.jpg'
import home1 from '../../images/latam.png'


function MainServ() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>

      {/* Container */}
      <div className='container-fluid navspace'>

        {/* Row */}
        <div className="row">
          <div className="col-lg-5 col-h-centered text-center">
            <a href="#">
              <img id='dest-img' className="img-fluid rounded mb-3 mb-md-0 text-right" src={pic2} alt="" />
            </a>
          </div>

          {/* Destination Services */}
          <div className="col-lg-7">
            <p className="font-italic blue-text"><h2>Destination Services</h2></p>
            <p className="font-italic"><h3><small>We manage every aspect of the customs clearance process, which can often be tedious and troublesome.  Lack of proper documentation can lead to stuck merchandise, which can be costly to resolve. Our import management solution reduces supply chain inventory and improves order to delivery time, resulting in subsequent reduction in brokerage and transportation costs.
          </small></h3></p>
            <br />

            <p className="font-italic"><h3><small>We achieve success by managing secure, regulatory-compliant, transportation and warehousing service providers.</small></h3></p>
            <br />
            <p className="font-italic"><h3><small>Products are in good hands with TMS. We bring only the best quality and peace of mind while providing the savings and benefits that come with a full service, one source provider.</small></h3></p>

          </div>
        </div>

        <br />
        <br />

        <div className='row'>


          <div className="col-lg-7">
          <p className="font-italic blue-text"><h3>Customs Import Process</h3></p>
            <p className="font-italic"><h3><small> Prior to import, all goods must be classified to determine their duty obligations at importation and applicable export controls. Failure to exercise reasonable care when classifying goods can result in shipment delays, increased duties, fines and seizure of merchandise. TMS is involved in every aspect of the customs clearance process. We ensure products are cleared for the next step until reaching its final destination.</small></h3></p>
            <br />

            <p className="font-italic blue-text"><h3>In Country Warehousing and Distribution</h3></p>
            <p className="font-italic"><h3><small>Through its key partnerships and alliances, TMS can provide full warehousing and distribution services with on-line inventory management and visibility.</small></h3></p>

          </div>

          <div className="col-lg-5">

            {/* Card */}
            <p>
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
            </p>
          </div>




        </div>



        <br />






        {/* Row */}
        {/* <div className="row">
          <div className="col">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={home1} alt="" width="100%" />
            </a>

          </div>
        </div> */}

        <br />

        {/* Row */}
        <div className="row pb-3">
          <div className="col">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src={home} alt="" width="100%" />
            </a>
          </div>
        </div>

      </div>

    </>
  );
}

export default MainServ;