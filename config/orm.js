var mysql = require("mysql");
var connection = require("./connection.js");

function Orm(){
	if(!(this instanceof Orm)){
		return new Orm();
	}
};

//Export ORM
module.exports = Orm;