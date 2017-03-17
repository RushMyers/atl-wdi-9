var express = require('express');
var bodyParser = require('body-parser');
var handleBars = require('hbs');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function(req, res) {
  res.send('whattup pirate');
});

var piratesController = require(__dirname + '/controllers/pirates.js');

app.use('/pirates', piratesController);


app.listen(port, function() {
  console.info('servin it up', port, "//", new Date());
});
