const angular = require('angular');
require('angular-ui-router');

<<<<<<< HEAD

angular
  .module('criminals', ['ui.router'])
  .config(uiRouterSetup)

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
  function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      })
      .state('about', {
        url: '/about',
        template: '<about></about>'
      })
      .state('criminals', {
        url: '/criminals',
        template: '<criminals></criminals>'
      })
      .state('newCriminal', {
        url: '/criminals/new',
        template: '<new-criminal></new-criminal>'
      })
      .state('criminalsShow', {
        url: '/criminals/:criminalId',
        template: '<criminals-show></criminals-show>'
      });
    $urlRouterProvider.otherwise('/');
  }
=======
angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	$urlRouterProvider.otherwise('/');
}
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
