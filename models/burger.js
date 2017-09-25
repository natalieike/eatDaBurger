var mysql = require("mysql");
var orm = require("../config/orm.js");

function Burger(){
	if(!(this instanceof Burger)){
		return new Burger();
	}
};

//Retrieves Burger list.  Status = devoured = burger_devoured = 1; Satus = available = burger_devoured = 0; Satus = all = get all burgers.  Calls nextFunc with data from database.
Burger.prototype.getBurgers = function(status, nextFunc){
	nextFunc([{burger_id: "1", burger_name: "The Whopper", burger_devoured: "0", burger_date: "2017-09-23 20:40:27"}, {burger_id: "2", burger_name: "Big Mac", burger_devoured: "1", burger_date: "2017-09-23 20:40:27"}]);
};

//Updates Burger to burger_devoured = 1
Burger.prototype.eatBurger = function(burgerId, nextFunc){

};

//Add a new Burger to the database
Burger.prototype.addBurger = function(burgerName, nextFunc){

};

//Updates the name of an existing burger
Burger.prototype.updateBurger = function(burgerId, newName, nextFunc){

};

//Export Burger
module.exports = Burger;