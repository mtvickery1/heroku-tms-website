import React, { Component } from 'react';
// CSS
import './LandingVideo.css'
// Media
import tmsvideo from "../../../images/tmsvideo.mov";


// NOT IN USE
// import ReactPlayer from 'react-player';


class LandingVideo extends Component {






  render() {
    return (

      <React.Fragment>

        {/* <ReactPlayer
          url={tmsvideo}
          className='react-player'
          playing
          width='100%'
          height='50'
          loop
          Autoplay
          muted
        /> */}


        <div className='bg-wrapper landing-space'>

          <video autoPlay muted loop id="myVideo">
            <source src={tmsvideo} type="video/mp4" />
            Your browser does not support HTML5 video.
           </video>

          <div id='fade'></div>

        </div>

      </React.Fragment>

    );
  }
}
export default LandingVideo;