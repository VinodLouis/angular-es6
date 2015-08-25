/**
 * Created by vinodlouis on 08/08/15.
 */
'use strict';

class AddContactController {
    constructor($log,contactsService,$state) {
        this.$log = $log;
        this.contactsService = contactsService;
        this.$state = $state;
        $log.info('AddContactController...');
        this.objContact = {};
        this.error = false;
        this.initContact();
    }

    initContact(){
        this.objContact = {
            name : "",
            address : "",
            id : ""
        };
    }

    gotolist(){
        this.$state.go('contacts.list');
    }

    addContact(bln){
        if(this.objContact.name == "" || this.objContact.address == ""){
            this.error = true;
            return;
        }
        this.error = false;
        this.objContact.id = Date.parse(new Date());
       // this.$log.debug(this.objContact);
        this.contactsService.saveContact(this.objContact);
        this.initContact();
        if(!bln)
            this.$state.go('contacts.list');
    }

    discardContact(){
        this.initContact();
    }
}
AddContactController.$inject = ['$log','contactsService','$state'];

export default AddContactController;