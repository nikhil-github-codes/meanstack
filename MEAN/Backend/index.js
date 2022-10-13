// require express and bodyParser,Cors
const  express = require("express");
const cors = require("cors");
const  bodyParser = require("body-parser");

// create express app
const  app = express();
app.use (cors());



// define port to run express app
const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());





// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

//Import DB Connection
require("./config/db");
//Import Api routes
var routes = require('./api/routes/contactRoutes');//import route
routes (app);

// Listen to server
app.listen(port, () => {

console.log(`Server running at :${port}`);
});