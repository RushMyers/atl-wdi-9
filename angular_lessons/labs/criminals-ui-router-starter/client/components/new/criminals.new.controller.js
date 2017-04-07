NewCriminalController.$inject = ['$stateParams', '$location', 'CriminalsService'];

function NewCriminalController($stateParams, $location, CriminalsService) {
  const vm = this;

  vm.newCriminal = {};
  vm.createNewCriminal = createNewCriminal;

  activate();

  function activate() {};

  function createNewCriminal(newCriminal) {
    CriminalsService.makeCriminal(newCriminal)
    .then(function toCriminals() {
      $location.url('/criminals')
    });
  }
}

module.exports = NewCriminalController;
