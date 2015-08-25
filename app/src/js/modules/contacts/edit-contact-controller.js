/**
 * Created by vinodlouis on 08/08/15.
 */
'use strict';

class EditContactController {
    constructor($log,$stateParams,contactsService,$state) {
        this.contactId = $stateParams.contactId;
        this.$log = $log;
        this.$state = $state;
        this.error = false;
        this.contactsService = contactsService;
        $log.info('EditContactController...');
        this.initData();
    }

    initData(){
        this.objContact = (this.contactsService.getContact(this.contactId) == 0)  ? {} : this.contactsService.getContact(this.contactId);
        //this.$log.debug(this.objContact);
    }

    discardContact(){
        this.$state.go('contacts.list');
    }

    saveContact(){
        if(this.objContact.name == "" || this.objContact.address == ""){
            this.error = true;
            return;
        }
        this.error = false;
        this.contactsService.editContact(this.contactId,this.objContact);
        this.$state.go('contacts.list');
    }
}
EditContactController.$inject = ['$log','$stateParams','contactsService','$state'];

export default EditContactController;