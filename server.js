'use strict'
var express = require('express');
var app = express();
var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var parseString = require('xml2js').parseString;
// var requestify = require('requestify');
// var http = require('http');
// var Promise = require('bluebird');
// var request = require('request');
// var util = require('util');

app.use(express.static('public'));
mongoose.connect('mongodb://127.0.0.1:27017/test');
// app.use(bodyParser.json());

// Enables CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




// sets the server to listen at port 3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
