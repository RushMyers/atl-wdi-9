// var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
//  HELLO WORLD!
// app.get('/home', function(req, res) {
//   res.send('Hello World!')
// })
//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2]);
