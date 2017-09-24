var app = require("express");
var burger = require("../models/burger.js");

//Set up parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

function Router(){
	if(!(this instanceof Router)){
		return new Router();
	}
};

//export Router
modules.export = Router;