import React, { Component } from 'react';
import { useEffect } from 'react'


// import Footer from '../../components/Footer/footer.js/index.js';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import pic1 from '../../images/gruint.png';
import principal from '../../images/tms1.png';

function Imagen() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      <div className='container-fluid navspace'>

        {/* ---------- Title ---------- */}
        <div className="row">
          <div className="col-md-12 text-center blue-text">
            <h1>Group Infrastructure</h1>
          </div>
        </div>

        {/* BREAK */}
        <br />

        <div className="text-center">
          <img className='img-fluid' src={pic1} />
        </div>

        <br></br>
        <div>
          {/* <Footer /> */}
        </div>
        <p></p>

      </div>

    </React.Fragment>


  );
}
export default Imagen;
