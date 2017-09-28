var mysql = require("mysql");
var orm = require("../config/orm.js");

var burger = {

//Retrieves Burger list.  Status = devoured = burger_devoured = 1; Satus = available = burger_devoured = 0; Satus = all = get all burgers.  Calls nextFunc with data from database.
	getAllBurgers: function(cb){
		orm.getAll("burger", "id", cb);
	},

//Updates Burger to burger_devoured = 1
	eatBurger: function(burgerId, cb){
		var data = {
			"burger_devoured": 1
		}
		orm.updateById("burger", burgerId, data, cb);
	},

//Add a new Burger to the database
	addBurger: function(burgerName, cb){
		var data = {
			"burger_name": burgerName,
			"burger_devoured": 0
		};
		orm.add("burger", data, cb);
	},

//Updates the name of an existing burger
	updateBurger: function(burgerId, newName, cb){
		var data = {
			"burger_name": newName
		};
		orm.updateById("burger", burgerId, data, cb);
	}
};

//Export Burger
module.exports = burger;