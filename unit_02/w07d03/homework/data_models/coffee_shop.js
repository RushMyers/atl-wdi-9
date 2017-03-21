//Coffee Shops
var User = {
    id: Number,
    name: String,
    location: String,
    cart: [],
    pastOrders: []
}

var Cart = {
    id: Number,
    coffeeShop: String,
    drinks: [],
    orderTotal: Number
}

var Drinks = {
    id: Number,
    name: String,
    size: String,
    price: Number,
    description: String
}
//Relationships

var User = {
    id: Number,
    name: String,
    location: String,
    cart: [{
          id: Number,
          coffeeShop: String,
          drinks: [{
                  id: Number,
                  name: String,
                  size: String,
                  price: Number,
                  description: String
              }],
          orderTotal: Number
      }],
    pastOrders: []
}


