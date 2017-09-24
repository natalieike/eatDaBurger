var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Set up parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));



//export Router
modules.export = router;