import React from 'react';
import ReactDOM from 'react-dom';
import Gallerys from "react-photo-gallery";

// MDBootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// react-bootstrap - not sure if I need - YES - it affected the card colors and probably more. Find out how this is working; do I need the module with this? Is this bootstrap or react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// index.CSS
import './index.css';

import App from './App.js';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
