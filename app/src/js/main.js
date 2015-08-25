import 'bootstrap/dist/css/bootstrap.css';
import '../sass/variables.scss';
import '../sass/mixins.scss';
import '../sass/bootstrap-override.scss';
import '../sass/style.scss';
import 'html5shiv/dist/html5shiv.js';
import 'jquery';
import 'bootstrap';
import 'is_js';
import {default as angular} from 'angular';
import {default as angularBootstrap} from './vendor/angular-bootstrap/ui-bootstrap-tpls.js';
import {default as uiRouter} from 'angular-ui-router'
import {default as angularAnimate} from 'angular-animate';
import {default as angularAria} from 'angular-aria';
import {default as angularCookies} from 'angular-cookies';
import {default as angularResource} from 'angular-resource';
import {default as angularTranslate} from 'angular-translate';
import {default as angularSanitize} from 'angular-sanitize';
import {default as appWireup} from './configurations/app-wireup.js';
import {default as servicesWireup} from './services/services';
import {default as routerConfig} from './configurations/router-config.js';
import {setupWindowConstants} from './configurations/application-constants.js';
//import {staticStringConfig} from './configurations/general-config.js';
import {default as setupModuleDefinitions} from './modules.js';

'use strict';
// Setup application wide module definitions
setupModuleDefinitions();

// This is the main application module
var mainModule = angular.module('myApp.base');

// Wire up constants
setupWindowConstants();

// Wire up services
servicesWireup();

// Wire up controllers
appWireup();

// Configure the application
angular.module('myApp.base')
    .config(routerConfig);

// Bootstrap the application and attach it to the document
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp.base'], {strictDi: true});
});
