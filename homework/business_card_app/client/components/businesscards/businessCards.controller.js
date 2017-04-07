function BusinessCardsController () {
  var vm = this;

  vm.businessCardList = [];

  BusinessCardsService.getBusinessCards()
    .then(function(response) {
      vm.businessCardList = response.data.businessCards;
    });

};
BusinessCardsController.$inject = ['BusinessCardsService'];
module.exports = BusinessCardsController;
