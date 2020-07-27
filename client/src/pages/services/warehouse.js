import React, { Component } from 'react';
import { useEffect } from 'react'


import '../../css/mainserv.css';
// import Footer from '../../components/Footer/footer.js/index.js';
import { Link, Route } from 'react-router-dom';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import imag1 from '../../images/laptops.jpeg';
import imag2 from '../../images/laplaser.jpeg';
import imag3 from '../../images/tmsw4.jpg';
import wh2 from '../../images/new/cfi-3.png';
import wh3 from '../../images/new/wh-3.png';
import wh4 from '../../images/new/IMG_2598.jpg';
import wh5 from '../../images/tmsw5.jpg';
import wh1 from '../../images/team.jpg';
import wh6 from '../../images/warehousefork.jpg';
import home from '../../images/air.jpg';
import pic5 from '../../images/TMS-Warehousefull.jpg'
import home2 from "../../images/ftz.png"


function Warehouse() {

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <React.Fragment>

      <div id='wh-landing'>
        <img className="landing-space img-fluid m-x-auto d-block img-responsive"
          src={pic5} />
        <div id='wh-title'>Warehouse - Miami Facility</div>
      </div>

      {/* Container */}
      <div id='warehouse-container' className='container-fluid'>

        <div class='gallery'>
          <div class='gallery__item gallery__item--1'>
            <img src={wh1} class="gallery__img" alt="Image 1" />
          </div>
          <div class="gallery__item gallery__item--2">
            <img src={wh2} class="gallery__img" alt="Image 2" />
          </div>
          <div class="gallery__item gallery__item--3">
            <img src={wh3} class="gallery__img" alt="Image 3" />
          </div>
          <div class="gallery__item gallery__item--4">
            <img src={wh4} class="gallery__img" alt="Image 4" />
          </div>
          <div class="gallery__item gallery__item--5">
            <img src={wh5} class="gallery__img" alt="Image 5" />
          </div>
          <div class="gallery__item gallery__item--6">
            <img src={wh6} class="gallery__img" alt="Image 6" />
          </div>
        </div>

      </div>
      {/* <Footer /> */}

    </React.Fragment>

  );
}

export default Warehouse;