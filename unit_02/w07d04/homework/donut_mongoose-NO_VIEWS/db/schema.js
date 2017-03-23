var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
  });

var DonutModel = mongoose.model("Donut", DonutSchema);

module.exports = {
  Donut: DonutModel
};
