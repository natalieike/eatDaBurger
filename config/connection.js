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

//Start Connection
connection.connect(function(err){
	if(err){
		connection.end();
		return console.log(err);
	}
	console.log("Database connected");
});

//export connection
modules.export = connection;