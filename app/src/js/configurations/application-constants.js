'use strict';

function setupWindowConstants() {
    angular.module('myApp.base')
        .constant('name', 'value');
}

export {setupWindowConstants}