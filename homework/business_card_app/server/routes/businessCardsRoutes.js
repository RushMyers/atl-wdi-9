var express = require('express');
var router = express.Router();

var seeds = [
{
  _id: 8387593030238494,
  name: 'sweet card',
  shape: 'rectangle'
},
{
  _id: 09283738923908234,
  name: 'other card',
  shape: 'square'
}
];

router.get('/', function(req, res){
  res.json({businessCards:seeds});
});

module.exports = router;
