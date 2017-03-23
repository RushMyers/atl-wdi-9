//======================
// REQUIREMENTS
//======================
//require express, mongoose, Donut schema, user

var mongoose = require("mongoose");
var Donut = require("../models/donuts.js");

mongoose.Promise = global.Promise;

Donut.remove({}, function(err){
  console.log(err);
});

  var sprinkles = new Donut({
          name: "Sprinkles",
          description: "A lotta sprinkles, a lotta yum.",
          img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
          price: 5,
          qty: 99
          });

  var plain = new Donut({
          name: "Plain Ole Donut",
          description: "Plain donut for plain people.",
          img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg",
          price: 25,
          qty: 15
          });
  var chocolate = new Donut({
          name: "Chocolate",
          description: "Chocolate Donut nom nom nom",
          img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg",
          price: 7000,
          qty: 1
          });
  var holes = new Donut({
          name: "Donut Holes",
          description: "For the snackers.",
          img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg",
          price: 10,
          qty: 23
    });
var donuts = [sprinkles, plain, chocolate, holes];

  // Donut.create(newProducts, function(err) {
  //       console.log("SEED: NEW PRODUCTS CREATED!");
  //       res.redirect('/');
  // });

// donuts.forEach(function(donut) {
//   donut.save(function(err) {
//     if(err) { console.log(err); }
//     console.log(donut);
//   });
// });
sprinkles.save(function(err) {
    if (err) console.log(err);
    console.log('donut created!');
});

//======================
// EXPORTS
//======================
