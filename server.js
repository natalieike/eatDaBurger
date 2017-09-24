var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");

var port = process.env.PORT || 8080;

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + '/public'))
app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port 3000...')
})


