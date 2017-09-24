var mysql = require("mysql");
var orm = require("../config/orm.js");

function Burger(){
	if(!(this instanceof Burger)){
		return new Burger();
	}
};

//Retrieves Burger list.  Status = devoured = burger_devoured = 1; Satus = available = burger_devoured = 0; Satus = all = get all burgers
Burger.prototype.getBurgers = function(status, connection, nextFunc){

};

//Updates Burger to burger_devoured = 1
Burger.prototype.eatBurger = function(burgerId, connection, nextFunc){

};

//Export Burger
modules.export = Burger;