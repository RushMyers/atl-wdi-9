const controller = require('./criminals_show.controller.js');
const template = require('./criminals_show.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('criminalsShow', component);
