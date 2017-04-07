angular.module('criminalsApp').service('BusinessCardsService', BusinessCardsService);

function BusinessCardsService ($http) {
  var self = this;

  self.getBusinessCards = function() {
    console.log('ok cool');
    return $http.get('/criminals')
  }
}
BusinessCardsService.$inject = ['$http'];
