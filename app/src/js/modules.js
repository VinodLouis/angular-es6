'use strict';
import * as angular from 'angular';

function setupModuleDefinitions() {
    angular.module('myApp.templates', []);
    angular.module('myApp.services', ['ngCookies', 'ngResource']);
    angular.module('myApp.providers', ['ngCookies', 'ngResource']);
    angular.module('myApp.components', [
        'ngAria'
        , 'ngCookies'
        , 'ngResource'
        , 'ngSanitize'
        , 'ui.router'
        , 'myApp.templates'
        , 'myApp.services'
        , 'myApp.providers'
        , 'ui.bootstrap'
    ]);
    angular.module('myApp.base', [
        'ngAria'
        , 'ngCookies'
        , 'ngResource'
        , 'ngAnimate'
        , 'ngSanitize'
        , 'ui.router'
        , 'myApp.templates'
        , 'myApp.services'
        , 'myApp.components'
        , 'myApp.providers'
        , 'ui.bootstrap'
    ]);
}

export default setupModuleDefinitions;
