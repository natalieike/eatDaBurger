var mysql = require("mysql");
var orm = require("../config/orm.js");

function Burger(){
	if(!(this instanceof Burger)){
		return new Burger();
	}
};

//Export Burger
modules.export = Burger;