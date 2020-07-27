import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import pic1 from '../../images/servrez.jpg'


const headserv = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="img-fluid m-x-auto d-block img-responsive"
                src={ pic1 }
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
        <p></p>
      </MDBCarousel>
      
  );
}

export default headserv