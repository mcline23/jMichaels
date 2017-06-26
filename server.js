//express
var express = require('express');
var app = express();

//session
var session = require('express-session')
app.use(session({
    secret: "jMikes",
    resave: false,
    saveUninitialized: false

}))

//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

//static files
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(express.static(path.join(__dirname, "./client/node_modules")));

//mongoose
require('./server/config/mongoose.js');
var mongoose = require('mongoose');

//routes
var routes_setter = require('./server/config/routes.js')
routes_setter(app);
app.all('*', (req, res, next) =>{
    res.sendFile(path.resolve('./client/dist/index.html'))
})

//listen
app.listen(8000, function() {
    console.log("listening on port 8000");
})