var window = this;
const express = require("express")
var mysql = require('mysql');
const app = express();
const bodyParser  = require("body-parser");
const nodemon = require("nodemon")
const unirest = require('unirest')
let responseData;



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

function weatherBoy(cityID){
    var key = '1cab01ad337737f6d48504c6a2b7d50e';
    fetch('api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key)
    //convert data to JSON
    .then(function(resp) { return resp.json() })
    .then(function(data){
        let responseData = JSON.parse(data);
        console.log(responseData);
    })
    .catch(function(){
        alert('That city may only exsist in your mind.')
    });
}



window.onload = function() {
    weatherBoy(4180531);
}


app.listen(7878, function(){
    console.log("Server running on 7878!");
});