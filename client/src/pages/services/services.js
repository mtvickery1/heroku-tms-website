import React, { Component } from 'react';
import './services.css';
import HeaderServ from "./headerserv.js";
import Main from "./mainserv.js";
// import Footer from "./Footer/footer";
import Form from "../../components/form";

class services extends Component {
  render() {
    return (

      <React.Fragment>

        {/* <HeaderServ /> */}
        <Main id='services-overview' />
        {/* <Footer /> */}


      </React.Fragment>

    );
  }
}
export default services;