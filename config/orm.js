var mysql = require("mysql");
var connection = require("./connection.js");

var objToQuery = function(obj){
	var queryString = "";
	for (var name in obj){
		queryString += name + ' = "' + obj[name] + '" ';
	};
	return queryString;
}

var orm = {
	getAll: function(table, order, cb){
		var query = "SELECT * FROM " + table + " ORDER BY + " + order;
		connection.query(query, cb);
	},

	updateById: function(table, id, data, cb){
		var query = "UPDATE " + table + " SET ";
		query += objToQuery(data);
		query += " WHERE id = " + id;
		connection.query(query, cb);
	},

	add: function(table, data, cb){
		var query = "INSERT INTO " + table + " (";
		var params = "";
		var values = "";
		for(var name in data){
			if(params != ""){
				params += ", ";
			}
			if(values != ""){
				values += ", ";
			}
			params += name;
			values += "'" + data[name] + "'";
		}
		query += params + ") VALUES (" + values + ")";
		connection.query(query, cb);
	}

};

//Export ORM
module.exports = orm;