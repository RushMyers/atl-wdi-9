angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

  CriminalsController.$inject = ['$http'];

function CriminalsController($http) {

  var vm = this;
  vm.addCriminal = addCriminal;
  vm.all = [];
  vm.newCriminal = {};
  vm.getAllCriminals = getAllCriminals;
  vm.deleteCriminal = deleteCriminal;

  getAllCriminals();

  function getAllCriminals() {
    $http
      .get('/criminals')
      .then(function setAll(response) {
        vm.all = response.data.criminals;
      });
  }


  function addCriminal() {
    $http
      .post('/criminals', vm.newCriminal)
      .then(function newCrim(response) {
        console.log(response.data.criminal)
        vm.all.push(response.data.criminal);
        vm.newCriminal = {};
      })
  };
  //
  function deleteCriminal(criminal) {
    $http
      .delete('/criminals/' + criminal._id)
      .then(getAllCriminals());
  }
}



