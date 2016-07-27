var express = require('express');

var cubes = require('./controllers/CubesController');

var app = express();

// TODO: apiVersion and port should be configurable by options params
var apiVersion = "";
var port = 8080;

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Call routes
app.use('/cubes', cubes);
app.listen(port);
