//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var earthCirc = 24901;
  var totalGallons = 24901/milesPerGallon;
  return fuelPrice * totalGallons;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var costcoJuice = a * b;
  var kirklandsJuice = c * d;
  var totalDrink = d + b;
  var totalJuice = costcoJuice + kirklandsJuice;
  return totalDrink/totalJuice;
};

calcFruitJuice(3, 20, 2, 55) => 0.34
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
