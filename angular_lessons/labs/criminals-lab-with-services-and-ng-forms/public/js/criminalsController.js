angular.module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

<<<<<<< HEAD

CriminalsController.$inject = ['CriminalsService'];

=======
CriminalsController.$inject = ['CriminalsService'];

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
function CriminalsController(CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

<<<<<<< HEAD
  self.getCriminals();
  function getCriminals() {
  CriminalsService.getCriminals().then(function(criminalsData) {
    self.all = criminalsData;
  });
}


  function addCriminal(){
      CriminalsService.addCriminal(self.newCriminal).then(function(){
        self.getCriminals();
        self.newCriminal = {};
    });

  }

  function deleteCriminal(criminal){
      CriminalsService.deleteCriminal(criminal)
=======
  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }
}


