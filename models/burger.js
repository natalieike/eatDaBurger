var mysql = require("mysql");
var orm = require("../config/orm.js");

var burger = {

//Retrieves Burger list.  Status = devoured = burger_devoured = 1; Satus = available = burger_devoured = 0; Satus = all = get all burgers.  Calls nextFunc with data from database.
	getBurgers: function(status, cb){
		cb([{burger_id: "1", burger_name: "The Whopper", burger_devoured: "0", burger_date: "2017-09-23 20:40:27"}, {burger_id: "2", burger_name: "Big Mac", burger_devoured: "1", burger_date: "2017-09-23 20:40:27"}]);
	},

//Updates Burger to burger_devoured = 1
	eatBurger: function(burgerId, cb){

	},

//Add a new Burger to the database
	addBurger: function(burgerName, cb){

	},

//Updates the name of an existing burger
	updateBurger: function(burgerId, newName, cb){

	}
};

//Export Burger
module.exports = burger;