import React, { Component } from 'react';
import { Button, legend, fieldset, ButtonToolbar, Col, ToggleButton, Row } from 'react-bootstrap';
import Gomapsapi from "./Gomapsapi.js";
// import bgcontact from "../images/contactus.png";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';



class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      formError: false
    }
  }

  getName = (e) => {
    let username = e.target.value;
    this.setState({
      name: username
    });
    console.log(this.state.name);
  }


  getEmail = (e) => {
    let userEmail = e.target.value;
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if (userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
      this.setState({
        email: userEmail
      });
    } else {
      this.setState({
        email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }

    console.log(this.state.email);
  }


  getDescription = (e) => {
    let userMessage = e.target.value;
    this.setState({
      message: userMessage
    });
    console.log(this.state.message);
  }
  //send the form
  submitForm = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
      this.setState({
        formError: true
      })
      return false;
    } else {
      this.setState({
        formError: false
      })
      console.log(`UserData: {
            Username: ${this.state.name},
            Email: ${this.state.email},
            Message: ${this.state.message}
        }`)


      console.log("form sent")

    }

  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 px-0'>
            <form>
              {/* <MDBRow> */}
                <p></p>

                  <Gomapsapi />


              {/* </MDBRow> */}
              <p></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
