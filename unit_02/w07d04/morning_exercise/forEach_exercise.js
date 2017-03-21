// var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
// var arrUpper = [];
// words.forEach(function(item) {
//      var newWord = item.toUpperCase();
//      arrUpper.push(newWord);
// });
// console.log(arrUpper);

// var squareMe = [0, 1, 10, 24, 595];
// var newArr = [];
// squareMe.forEach(function(item) {
//   var itemSq = item * item;
//   newArr.push(itemSq);
// })
// console.log(newArr);

// var numbers = [5, 7, 9, 12, 20];
// sum = 0;
// numbers.forEach(function (num) {
//     sum +=num;
// });
// console.log(sum/numbers.length);

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

// var priceOf = [];
// products.forEach(function (prod) {
//     priceOf.push(prod.price);
// })
// console.log(priceOf);

discProducts = [];
products.forEach(function(prod) {
    discPrice = prod.price/2;
    prod.discount = discPrice;
});
console.log(products);



















