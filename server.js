var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var connection = require("/config/connection.js");

//SQL Connection
connection.connect(function(err){
	if(err){
		connection.end();
		return console.log(err);
	}
	startApp(connection);
});

var startApp = function(connection){

};