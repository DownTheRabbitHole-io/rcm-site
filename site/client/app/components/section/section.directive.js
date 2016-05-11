import angular from 'angular';
import './section.scss';

function section() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require("./section.html")
  }
}

export default angular.module('directives.section', [])
  .directive('section', section)
  .name;
