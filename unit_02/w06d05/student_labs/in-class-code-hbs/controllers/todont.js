var express = require('express');
var router = express.Router();
var data = require('../todont_data.js');



router.get('/', (req, res) =>{
  res.render('todont/index', {
    todonts: data.seededToDonts
  });
});

router.delete('/:id', (req, res) =>{
    data.seededToDonts.splice(req.params.id, 1);
    res.redirect('/');
});

router.get('/new', (req, res) => {
    res.render('todont/new');
  });

router.post('/', (req, res) => {
    var newData = {
      description: req.body.description,
      urgent: req.body.urgent
    };
    data.seededToDonts.push(newData);
    res.redirect('/');
});

router.get('/:id', (req, res) =>{
    var todont = data.seededToDonts[req.params.id];
    res.retnder('todont/show', {
      chosenToDont: todont
    });
});

module.exports = router;
