import angular from 'angular';
import './logo.scss';

function logo() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require("./logo.html")
  }
}

export default angular.module('directives.logo', [])
  .directive('logo', logo)
  .name;
