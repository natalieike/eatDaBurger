//Dependencies
var express = require("express");
var Burger = require("../models/burger.js");
var bodyParser = require("body-parser");
var brouter = express();
var handlebars = require("express-handlebars");
var path = require("path");

//Set up burger model
var burger = new Burger();

//Set up parsing
brouter.use(bodyParser.json());
brouter.use(bodyParser.urlencoded({ extended: true }));
brouter.use(bodyParser.text());
brouter.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Establish handlebars engine
brouter.engine("handlebars", handlebars({ defaultLayout: "main" }));
brouter.set("view engine", "handlebars");

//Route for CSS
brouter.get("/style", function(req, res){
	res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
});

//Get all of the Burgers, sort by Eaten or Available, and render index
brouter.get("/", function(req, res){
	burger.getBurgers("all", function(data){
		var available = [];
		var eaten = [];
		for(var i = 0; i < data.length; i++){
			if(data[i].burger_devoured == 1){
				eaten.push(data[i]);
			}else{
				available.push(data[i]);
			}
		}
		res.render("index", {burgerAvailable: available, burgerEaten: eaten});
	});
});

//Add a new burger, re-direct to get to re-render page
brouter.post("/", function(req, res){
	burger.addBurger(req.body.burgerName, function(){
		res.redirect("/");
	});
});

//Update an existing burger, re-direct to get to re-render page
brouter.put("/", function(req, res){
	burger.updateBurger(req.body.burger_id, req.body.burgerName, function(){
		res.redirect("/");
	});
});

//Update a burger to Eaten, re-direct to get to re-render page
brouter.put("/:id", function(req, res){
	burger.eatBurger(req.body.burger_id, function(){
		res.redirect("/");
	});
});

//export Router
module.exports = brouter;