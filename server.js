const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');


// ?? Maybe this goes in the routes folder along with app.use('/', router)
var router = express.Router();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);



// Initialize
app.use(cors())
// app.options('*', cors());
app.use(express.json())



// ?? Maybe this goes in the routes folder along with var router = express.Router();
app.use('/', router)


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
