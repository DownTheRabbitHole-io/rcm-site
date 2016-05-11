// Import Style
import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import fullpage from 'fullpage.js'

// Import base modules
import config from './app.config';
import routes from './app.routes';
import run from './app.run';
import appConstants from 'appConstants';

// Import internal modules
import home from './features/home';

export default angular.module('rcm', [
  uirouter,
  home
])
  .config(config)
  .config(routes)
  .constant("AppConstants", appConstants)
  .run(run)
  .name;
