'use strict';

import {default as angular} from 'angular';
/**
 * Wire up controllers and all other stuff to angular for app here
 */
function appWireup() {
    angular.module('myApp.base')
        .controller('HomeController', require('../modules/home/home-controller'))
        .controller('AddContactController', require('../modules/contacts/add-contact-controller'))
        .controller('EditContactController', require('../modules/contacts/edit-contact-controller'))
        .controller('ManageContactController', require('../modules/contacts/manage-contact-controller'));

}

export default appWireup;

