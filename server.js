// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express'),
    path = require('path');

var app = express();
// Make sure to include the JSX transpiler
//require("node-jsx").install();

var port = 4444;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

// Set up Routes for the application. Set API routes before this.
require('./app/routes/serverRoute.js')(app);

app.listen(port);

console.log('Server is Up and Running at Port : ' + port);
