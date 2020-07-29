import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// Icons
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';



// CSS
import "./footer.css";


class Footer extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (

      <React.Fragment>

        <div id='footer' className="container-fluid">

          {/* <!-- Scroll Up Button --> */}
          <div className='row darker'>
            <div className='col-lg-12'>
              <div id="circle-up-container" className="text-center">
                <i className="fas fa-chevron-circle-up fa-2x pt-2 pb-2" onClick={this.scrollToTop}></i>
              </div>
            </div>
          </div>

          {/* Row */}
          <div className='row pt-4'>

            {/* ---------------------- Links Col ---------------------- */}
            <div id='links' className="col-xl-3 col-lg-3 text-center my-auto">

              {/* Center div for text align left */}
              <div id='center' className="row">

                <h6 className="title font-weight-bold"><u>Company</u></h6>


                <Link exact to="/"><div><i className="fa fa-angle-double-right blue-text" /> Home</div></Link>
                <Link exact to="/profile"><div><i className="fa fa-angle-double-right blue-text" /> About TMS</div> </Link>
                <Link exact to="/services"><div><i className="fa fa-angle-double-right blue-text" /> Our Services</div> </Link>


                <Link exact to="/warehouse"><div><i className="fa fa-angle-double-right blue-text" /> Warehouse</div> </Link>
                <a target='_blank' href="http://apps.tms-lp.com/ORTrack/Tracking"><div><i className="fa fa-angle-double-right blue-text" /> Tracking</div> </a>
                <Link exact to="/contactus"><div><i className="fa fa-angle-double-right blue-text" /> Contact Us</div> </Link>


              </div>
            </div>

            {/* ---------------------- Address Col ---------------------- */}
            <div className="col-xl-6 col-lg-6  text-center">

              {/* TMS */}
              <div className="row">
                <div className="col-12 mt-3 mt-lg-0 text-center"><h6 className="title font-weight-bold"><u>Trade Management Solutions, LP</u></h6></div>
              </div>

              {/* Addresses */}
              <div className="row">

                {/* Round Rock */}
                <div className="col-md-6 text-center">
                  <div className='blue-text no-wrap'><u>Headquarters</u></div>
                  <div className='no-wrap'>1970 Rawhide Drive, Suite 316</div>
                  <div className='no-wrap'>Round Rock, TX 78681</div>
                  <div className='no-wrap'>Tel: (737) 717 3260</div>
                  <div className='no-wrap'>Fax: (512) 246-1913</div>
                </div>

                {/* Miami */}
                <div className="col-md-6 text-center">
                  <div className='blue-text'><u>Warehouse</u></div>
                  <div className='no-wrap'>2315 NW 107th Ave Unit A-30</div>
                  <div className='no-wrap'>Doral, FL 33172</div>
                  <div className='no-wrap'>Tel: (737) 717 3260</div>
                  <div className='no-wrap'>Fax: (512) 246-1913</div>
                </div>

              </div>

              {/* Email */}
              <div className="row mt-3 mt-lg-1">
                <div className="col-12 text-center">
                  <a href="mailto:customerservicetms@tms-lp.com"><span className="">e-mail:</span> <span className="">customerservicetms@tms-lp.com</span></a>
                </div>
              </div>




              {/* Social media icons */}
              <div className='row social pt-1 pb-1'>
                <div className='col-12'>

                  {/* <a href="https://www.linkedin.com/company/tms-lp/" target="blank"><i className="fa fa-linkedin pr-1"></i></a>
                  <a href="https://twitter.com/TMSolutionsLP" target="blank"><i className="fa fa-twitter"></i></a> */}

                  <a href="https://www.linkedin.com/company/tms-lp/" target="_blank"><span><FaLinkedinIn className="pr-1"/></span></a>
                  <a href="https://twitter.com/TMSolutionsLP" target="_blank"><span><FaTwitter /></span></a>

                  <a href="mailto:customerservicetms@tms-lp.com" target="blank"><i className="fa fa-envelope pl-1"></i></a>

                </div>
              </div>



            </div>

            {/* ---------------------- Col - Quote Button ---------------------- */}
            <div className='col-xl-3 col-lg-3 text-center my-auto'>
              <h6 className="title mt-3 mt-lg-0 font-weight-bold">Inquiry for a shipment quote?</h6>
              <Link to="/contactus">
                <button id='quote-btn' className='blue-btn rounded' variant="info" size="lg">Contact Us</button>
              </Link>
            </div>

          </div>

          <div className="row darker">
            <div className="col-12 mt-2 text-center">
              <p><u><a className='blue-text' href="javascript:void();">© Copyright 2013 tms-lp.com All rights reserved.</a></u></p>
            </div>
          </div>
        </div>


      </React.Fragment>

    );
  }
}

export default Footer;
