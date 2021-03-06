angular
  .module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];

function PresidentsController($http){

  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.deletePresident = deletePresident;

  activate();
  function activate(){
    loadAllPresidents();
  }


  function deletePresident(president) {
    $http
    .delete('/presidents/' + president._id)
    .then(activate())

    //functional way

    //vm.all = vm.all.filter(function(currentlyIteratedPresident) {
      //return president._id !== currentlyIteratedPresident._id;
    //});

    //object-oriented way

    //var index = vm.all.indexOf(president)
    //vm.all.splice(index,1);
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }

  function loadAllPresidents() {
    $http
        .get('/presidents')
        .then(function setAll(response) {
          console.log(response);
          vm.all = response.data.presidents;
          vm.loadingAll = false;
        });
    }
}

