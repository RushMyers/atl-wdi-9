var express = require('express');
var router = express.Router({mergeParams:true});
var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdeas = require("../models/project_idea");

router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('project_ideas/index', {
        idea: users.project_ideas
        //not sure about this
      });
    });
});

module.exports = router;
