import React, { Component } from 'react';

// Components
import LandingVideo from "../../components/Home/LandingVideo/LandingVideo";
import Intro from "../../components/Home/Intro/Intro";
import Main from "../../components/Home/Main/main";

class Home extends Component {

  // Scroll to top on load
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (

      <React.Fragment>

        <LandingVideo />
        {/* <Intro /> */}
        <Main />

      </React.Fragment>

    );
  }
}
export default Home