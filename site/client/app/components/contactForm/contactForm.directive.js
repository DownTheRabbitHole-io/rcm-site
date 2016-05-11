import angular from 'angular';
import $ from 'jquery';
import remodal from 'remodal';
import http from 'http';


import './contactForm.scss';

function contactForm() {
  return {
    restrict: 'E',
    scope: {
      options: '=',
      data: '='
    },
    link: link,
    template: require("./contactForm.html"),
    controller: ['$scope', '$http', contactFormCtrl]
  }

  function contactFormCtrl($scope, $http) {

    $scope.contact = {};
    $scope.sent = false;
    //console.log('data', $scope.contact);

    $scope.processForm = function() {
      //console.log('submit', $scope.contact);
      var method = 'POST';
      var url = "/contact.php";
      $http({
          method: method,
          url: url,
          data: $.param($scope.contact),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).
      success(function(data, status) {
        $scope.sent = true;
      }).
      error(function(data, status) {});
    };

  }



  function link(scope, element) {
    var inst = $(element).find('#modal').remodal();




    /* send email */

/*
    $send: function(api_user, api_key, to, toname, subject, text, from) {
          var method = 'GET';
          var url = "https://api.sendgrid.com/api/mail.send.json?";
          $http({
              method: method,
              url: url + "api_user=" + api_user +
                  "&api_key=" + api_key +
                  "&to=" + to +
                  "&subject=" + subject +
                  "&text=" + text +
                  "&from=" + from
          }).
          success(function(data, status) {}).
          error(function(data, status) {});
      }

*/

  }

}

export default angular.module('directives.contactForm', [])
  .directive('contactForm', contactForm)
  .name;
