const express = require("express");
//set the express module as a dependancy
//Express provides a thin layer of fundamental web application features

const bodyParser = require("body-parser");
//middleware. Parse incoming request bodies in a middleware before your handlers

const app = express(); //Creates an Express application
const port = 8089; // set the port number 

app.use(bodyParser.urlencoded({ extended: true }));
// tell the system whether to use a simple algorithm for shallow parsing (false) 
// or complex algorithm for deep parsing to deal with nested objects (true)

const expressSanitizer = require('express-sanitizer');
//package for middleware that can mitigate XSS risks

//const { check, validationResult } = require('express-validator');

// this module to manipulate a MySQL database
const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smartdevices"
});
// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database");
});
global.db = db;


require("./routes/main")(app);
// look for the main.js file in the routes folder to handle requests

app.use(express.static(__dirname + '/')); //attaches a middleware function
// if the path changed to /path, then the static file server will serve static files from that path instead.

app.use(expressSanitizer());
//use sanitizer


app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); //set the view engine to be EJS
app.engine("html", require("ejs").renderFile);// render html files using ejs
app.listen(port, () => console.log(`App listening on port ${port}!`));


