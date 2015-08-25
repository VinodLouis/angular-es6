'use strict';
import {default as angular} from 'angular';
import {default as ContactsService} from './contacts/contact-service.js';

/**
 * Wire-up services
 */
function servicesWireup() {
    angular.module('myApp.services')
        .factory(ContactsService.serviceName, ContactsService.contactsServiceFactory);
        //Add more services here

}

export default servicesWireup;

