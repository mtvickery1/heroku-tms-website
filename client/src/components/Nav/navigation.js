import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';

// CSS
import "./nav.css";

// Media
import tmslogo from "../../images/logos/tms.png";
// import tmslogo from "../../images/logos/tms-white.png";


class navigation extends Component {

  // Finding the height of the Navbar
  componentDidMount() {
    var clientHeight = document.getElementById('navbar').offsetHeight;
    console.log('clientHeight:', clientHeight)
  }


  render() {
    return (


      <React.Fragment>

        <Navbar id='navbar' fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="mb-0 p-0">
          <Container id='navbar-container'>
            {/* Brand Logo */}
            <Navbar.Brand><Nav.Link href='/' componentclass={Link} > <Link to="/">
              <img id='logo' src={tmslogo} width="80" height="50" alt="" className="d-inline-block align-top" />
              <div id='white-square'></div>
            </Link></Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            {/* Links */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">

                {/* Home */}
                <Nav.Link href='/' componentclass={Link} > <Link to="/">Home</Link></Nav.Link>


                {/* Our Company */}
                <NavDropdown title="Our Company" id="basic-nav-dropdown">
                  <NavDropdown.Item href='/profile' componentclass={Link} > <Link to="/profile">About TMS</Link></NavDropdown.Item>
                  <NavDropdown.Item href='/partnership' componentclass={Link} > <Link to="/partnership">Our Strategic Partnerships</Link></NavDropdown.Item>
                  <NavDropdown.Item href='/gi' componentclass={Link} > <Link to="/gi">Group Infrastructure</Link></NavDropdown.Item>
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/exleader">Execute Leadership</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/globalser">Global Reach</Link></NavDropdown.Item> */}
                  <NavDropdown.Divider />
                </NavDropdown>


                {/* Services */}
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href='/services' componentclass={Link} > <Link to="/services">Our Services </Link></NavDropdown.Item>

                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/destination">Destination Services</Link></NavDropdown.Item> */}


                  {/* TEMPORARILY REMOVED FOR DEMO */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/ftruck">Full Truckload</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/lttruck">Less-than-Truckload</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/globalf">Global Forwarding</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/lmile">Last Mile</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/vals">Vals</Link></NavDropdown.Item> */}
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/warehose">Warehouse</Link></NavDropdown.Item> */}


                  <NavDropdown.Item href='/cfi' componentclass={Link} > <Link to="/cfi">Computer Deployment Services</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>


                {/* Warehouse */}
                <Nav.Link href='/warehouse' componentclass={Link} > <Link to="/warehouse">Warehouse</Link></Nav.Link>

                {/* Tracking */}
                <Nav.Link target='_blank' href="http://apps.tms-lp.com/ORTrack/Tracking"><span id='tracking'>Tracking</span></Nav.Link>

                {/* Resources */}
                <NavDropdown title="Resources" id="basic-nav-dropdown">
                  <NavDropdown.Item href='/icote' componentclass={Link} > <Link to="/icote">Incoterms</Link></NavDropdown.Item>
                  {/* <NavDropdown.Item componentclass={Link} > <Link to="/termcond">Terms and Conditions</Link></NavDropdown.Item> */}
                  <NavDropdown.Item href='/docs' componentclass={Link} > <Link to="/docs">Documents</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href='/contactus' componentclass={Link} > <Link to="/contactus">Contact Us</Link></Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

      </React.Fragment>

    );
  }
}

export default navigation;