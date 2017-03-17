var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({}));

var override = require('method-override');
app.use(override('_method'));

var todontController = require ('./controllers/todont.js');
app.use('/', todontController);











app.listen(3000, () => {
    console.log("Listening to port 3000!!!!");
});
