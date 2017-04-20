angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
<<<<<<< HEAD
  self.loadCurrent = loadCurrent;
  self.makeCriminal = makeCriminal;
=======
	self.loadCurrent = loadCurrent;
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}
<<<<<<< HEAD
  function loadCurrent(id) {
    return $http.get('/api/criminals/' + id);
  }
  function makeCriminal(newCriminal) {
    console.log(newCriminal)
    return $http.post('/api/criminals/', newCriminal)
  }
=======

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
}
