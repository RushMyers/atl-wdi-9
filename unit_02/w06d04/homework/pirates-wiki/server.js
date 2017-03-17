var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');

var morgan = require('morgan');

var port = process.env.PORT || 3000;
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({
    extended:true
}));


var piratesController = require(__dirname + '/controllers/pirates.js');

app.use('/', piratesController);


app.listen(port, function() {
  console.info('servin it up', port, "//", new Date());
});
