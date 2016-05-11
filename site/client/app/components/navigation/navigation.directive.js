import angular from 'angular';
import './navigation.scss';

function navigation() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require("./navigation.html")
  }
}

export default angular.module('directives.navigation', [])
  .directive('navigation', navigation)
  .name;
