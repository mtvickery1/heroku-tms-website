import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../gomaps.css';
import { Router, Link } from 'react-router-dom';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Mapeando extends Component {
  static defaultProps = {
    center: {
      lat: 30.4903508,
      lng: -97.6840255
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={30.4903508}
            lng={-97.6840255}
            text="TMS HQ"
          />
        </GoogleMapReact>
        <div className="carousel-content">
              <p><button type="button" className="btn btn-info"><Link to="/contactus">Contact us</Link></button></p>
            </div>
      </div>
    );
  }
}
export default Mapeando;
