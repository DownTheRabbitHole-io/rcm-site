import angular from 'angular';
import uirouter from 'angular-ui-router';
import gsap from 'gsap';

// Import base modules
import config from './home.config';
import routes from './home.routes';
import controller from './home.controller';
import service from './home.service';

// Import internal modules
import logo from '../../components/logo/logo.directive';
import navigation from '../../components/navigation/navigation.directive';
import fullPageAngular from '../../components/fullPageAngular/fullPageAngular.directive';
import contactForm from '../../components/contactForm/contactForm.directive';

/*
var crystalball = require('file!./img/crystalball.png');
var screens = require('file!./img/screens.png');
var daynight = require('file!./img/daynight.png');
var dice = require('file!./img/dice.png');
var pig = require('file!./img/pig.png');
var prize = require('file!./img/prize.png');
var bars = require('file!./img/bars.png');
var sun = require('file!./img/sun.png');
*/

var crystalball = require('file!./img/crystalball-compressor.png');
var screens = require('file!./img/screens-compressor.png');
var daynight = require('file!./img/daynight-compressor.png');
var dice = require('file!./img/dice-compressor.png');
var pig = require('file!./img/pig-compressor.png');
var prize = require('file!./img/prize-compressor.png');
var bars = require('file!./img/bars-compressor.png');

var Blue = require('file!./img/RCM-Blue.png');
var neon = require('file!./img/RCM-NEON.png');
//var sun = require('file!./img/sun-compressor.png');

export default angular.module('rcm.home', [uirouter, navigation, logo, fullPageAngular, contactForm])
  .config(config)
  .config(routes)
  .controller(controller.UID, controller)
  .service(service.UID(), service)
  .name;
