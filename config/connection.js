//Dependancies
var mysql = require("mysql");

//Initialize Connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "burgers_db"
});

//export connection
modules.export = connection;