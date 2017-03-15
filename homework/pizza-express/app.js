var express = require('express');
var app = express();
var port = 3000;
var hbs = require('hbs');
app.set("view engine", "hbs");


app.get('/', function(req, res) {
  res.send("Welcome to Pizza Express")
});

var toppingsController = require(__dirname + '/controllers/toppings_Controller.js');
app.use('/toppings', toppingsController);


var order_Controller = require(__dirname + '/controllers/order_Controller.js');
app.use('/order', order_Controller);

app.get('/:err', function(req, res) {
  res.send("you must have done something wrong");
});

app.listen(port, function() {
  console.log("listening on port " + port);
});
