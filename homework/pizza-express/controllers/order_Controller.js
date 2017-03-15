var express = require('express');
var router = express.Router();


router.get('/:amount/:size', function(req, res) {
  res.render('order', {
    number: req.params.amount,
    size: req.params.size
  });
});

module.exports = router;
