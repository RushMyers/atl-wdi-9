//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
router.post('/', (req, res) => {
  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
    };
  pirates.push(newPirate);
  res.redirect('/pirates');
});

//==============================

//==============================
// UPDATE
//==============================
router.get('/edit/:id', (req, res) => {
  res.render('pirates/update.hbs');
});
router.post('/pirates', (req, res) => {
  var editedPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  };
  pirates[req.params.id] = editedPirate;
  res.redirect('/pirates');
});

//==============================
// DESTROY
//==============================

router.delete('/:id', (req, res) => {
  pirates.splice(req.params.id, 1);
  res.redirect('/pirates');
});
//==============================
// EXPORTS
//==============================

module.exports = router;
