import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
// import './App.css';

// Pages
import Home from './pages/Home/home.js';

// Our Company
import Profile from "./pages/company/profile.js";
import Partnership from "./pages/company/partnership.js";
import Gi from "./pages/company/gi.js";

// Services
import Services from "./pages/services/services.js";
// import Destination from "./pages/services/destinationserv.js";
import Cfi from "./pages/services/cfi.js";

// Warehouse
import Ware from "./pages/services/warehouse.js";

// Resources
import Icote from "./pages/resources/incoterms.js";
import Docs from "./pages/resources/docs2.js";

// Contact
import Contactus from "./pages/contactus/contactus.js";


// import Gallery from "./pages/company/gallery.js";
// import Leader from "./pages/company/exleader.js";
// import Term from "./pages/resources/termcond.js";
// import Global from "./pages/company/globalser.js";


// Components
import Nav from "./components/Nav/navigation.js";
import Footer from "./components/Footer/footer";

function App() {

  return (

    // ********** From gh-pages version of tms-website **********
    // <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    //   <Nav />
    //   <Switch>

    // ********** Routes here **********

    //   </Switch>
    //   <Footer />
    // </BrowserRouter >
    // ********** From gh-pages version of tms-website **********



    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home}></Route>

          {/* Our Company */}
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/partnership" component={Partnership}></Route>
          <Route exact path="/gi" component={Gi}></Route>

          {/* Services */}
          <Route exact path="/services" component={Services}></Route>
          {/* <Route exact path="/destination" component={Destination}></Route> */}
          <Route exact path="/cfi" component={Cfi}></Route>

          {/* Warehouse */}
          <Route exact path="/warehouse" component={Ware}></Route>

          {/* Resources */}
          <Route exact path="/icote" component={Icote}></Route>
          <Route exact path="/docs" component={Docs}></Route>

          {/* Contact */}
          <Route exact path="/contactus" component={Contactus}></Route>


          {/* <Route exact path="/exleader" component={Leader}></Route> */}
          {/* <Route exact path="/globalser" component={Global}></Route> */}
        

          {/* Not linked */}
          {/* <Route exact path="/gallery" component={Gallery}></Route> */}

          {/* Catch All */}
          <Route component={Home}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
