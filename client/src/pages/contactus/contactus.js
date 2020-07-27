import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import axios from 'axios'
// const axios = require('axios');

import "./contact.css"

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formError: false,
      opacity: 0
    }
  }


  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    console.log('winScroll:', winScroll)


    const height =
      document.documentElement.scrollHeight -
      1000
    console.log('scrollHeight:', document.documentElement.scrollHeight)
    console.log('clientHeight:', document.documentElement.clientHeight)

    let scrolled = winScroll / height
    console.log('scrolled:', scrolled)

    // Doesn't fade past set opacity
    if (winScroll >= 960) {
      scrolled = .79
    }

    this.setState({
      opacity: scrolled,
    }, () => console.log(this.state.opacity))
  }



  // Background Darken on Scroll
  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = (event) => {
  //   console.log('event:', event)
  //   let scrollTop = event.srcElement.body.scrollTop,


  //     itemTranslate = Math.min(0, scrollTop / 3 - 60);
  //   console.log('scrollTop:', scrollTop)

  //   this.setState({
  //     opacity: itemTranslate
  //   });
  // }

  // FadeInSection = (props) => {
  //   const [isVisible, setVisible] = React.useState(false);
  //   const domRef = React.useRef();
  //   React.useEffect(() => {
  //     const observer = new IntersectionObserver(entries => {
  //       entries.forEach(entry => setVisible(entry.isIntersecting));
  //     });
  //     observer.observe(domRef.current);
  //   }, []);
  //   return (
  //     <div
  //       className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
  //       ref={domRef}
  //     >
  //       {props.children}
  //     </div>
  //   );
  // }

  // -------------------------------------------------------------------
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

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

      var newCharacter = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };




      axios.post('/send', newCharacter)
        .then(function (response) {
          console.log(response);
          alert("sent email!");
        })
        .catch(function (error) {
          console.log(error);
        });





    }

  }

  render() {
    return (


      <React.Fragment>

        <div className='container-fluid p-0'>

          {/* <div id='team' className='row m-0'>
            <div className='col-12'>
             
            </div>
          </div> */}

          {/* Row */}
          <div id='team' className='row m-0'>

            {/* Black Overlay */}
            {/* <div className='col-12 black-overlay'>
            </div> */}

            {/* Col */}
            <div className='col-12 black-overlay' style={{ backgroundColor: `rgb(0, 115, 189, ${this.state.opacity})` }}>

              {/* Form */}
              {/* <MDBContainer id='contact-form-container' fluid>
                <MDBRow className='justify-content-md-center' >

                  <MDBCol lg="6" className='p-0'>

                    <div id='form-bg' className='pl-3 pr-3 shadow-lg'>

                      <div id='form-bg2' className='pl-5 pr-5 pt-5 pb-5 shadow-lg'>
                        <form id='contact-form'>
                          <p className="h5 text-center mb-4">Write to us</p>
                          <div className="grey-text">
                            <MDBInput
                              label="Your name"
                              icon="user"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              label="Your email"
                              icon="envelope"
                              group
                              type="email"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              label="Subject"
                              icon="tag"
                              group
                              type="text"
                              validate
                              error="wrong"
                              success="right"
                            />
                            <MDBInput
                              type="textarea"
                              rows="2"
                              label="Your message"
                              icon="pencil"
                            />
                          </div>
                          <div className="text-center">
                            <MDBBtn outline color="secondary">
                              Send <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                          </div>
                        </form>
                      </div>
                    </div>
                  </MDBCol>

                </MDBRow>
              </MDBContainer> */}

            </div>

          </div>





          {/* Form */}
          <div id='contact-form' className='container-fluid'>
            <form>


              <div className="row justify-content-md-center">

                <div className="col-md-4">
                  <div className="md-form mb-0">
                    <input type="text" name="name" placeholder="Your name here please" onChange={this.getName} className="form-control" />
                    <label for="name" className=""></label>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="md-form mb-0">
                    <input type="email" name="email" placeholder="Email address" onChange={this.getEmail} className="form-control" />
                    <label for="email" className=""></label>
                  </div>
                </div>

              </div>


              <div className="row justify-content-md-center">

                <div className="col-md-8">

                  <div className="md-form">
                    <textarea onChange={this.getDescription} maxLength="450" type="text" id="message" name="message" placeholder="What can we do for you?" rows="2" className="form-control md-textarea"></textarea>
                    <label for="message"></label>
                  </div>

                </div>
              </div>

              <div className="text-center text-md-right">
                <button className="btn btn-info" type="submit" name="submit" value="Send" onClick={this.submitForm} >Send</button>
              </div>

            </form>
          </div>


          {/* Map */}
          <div id='map' className="row">
            <div className='col-12 p-0'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13752.339157663093!2d-97.6818368!3d30.4903508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf71f0fa32e63bcb5!2sTrade%20Management%20Solutions%20LP!5e0!3m2!1sen!2sus!4v1570720937326!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
            </div>
          </div>



        </div>

      </React.Fragment>

    );
  }
}
export default Contactus;