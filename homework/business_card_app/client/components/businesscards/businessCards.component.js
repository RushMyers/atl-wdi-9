let businessCardsTemplate = require(__dirname + '/businessCards.html');
let businessCardsController = require(__dirname + '/businessCards.controller.js');

let BusinessCardsComponent = {
  template: businessCardsTemplate,
  controller: businessCardsController
};

angular.module('businessCardsApp').component('businessCards', BusinessCardsComponent)
