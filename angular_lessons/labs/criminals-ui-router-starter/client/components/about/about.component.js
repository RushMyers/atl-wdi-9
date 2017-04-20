<<<<<<< HEAD
const template = require('./about.html');

const AboutComponent = {
  template: template,
};

angular
  .module('criminals')
  .component('about', AboutComponent);
=======
const controller = require('./about.controller.js');
const template = require('./about.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', component);
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
