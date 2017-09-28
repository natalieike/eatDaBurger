//Dependancies
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
	 connection = mysql.createConnection({
		host: "localhost",
		port: 8889,
		user: "root",
		password: "root",
		database: "burgers_db"
	});
}

//Start Connection
connection.connect(function(err){
	if(err){
		connection.end();
		return console.log(err);
	}
	console.log("Database connected");
});

//export connection
module.exports = connection;