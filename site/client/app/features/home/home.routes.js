
import controller from './home.controller'

/**
 * Routing function for sample
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("home", {
    url: "/",
    template: require("./home.html"),
    controller: controller.UID,
    controllerAs: "home"
  });
}
