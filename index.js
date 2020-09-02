const express = require("express")
var mysql = require('mysql');
const app = express();
const bodyParser  = require("body-parser");


// set up to read the ejs and stylesheet

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : '',
    password : ''
});

app.get("/", function(req, res){
    res.render("home");
});

app.listen(7878, function(){
    console.log("Server running on 7878!");
});