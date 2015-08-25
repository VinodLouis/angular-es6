/**
 * Created by vinodlouis on 08/08/15.
 */
'use strict';

class ManageContactController {
    constructor($log,contactsService,$state) {
        this.$log = $log;
        this.contactsService = contactsService;
        this.arrContactData = [];
        this.$state = $state;
        $log.info('ManageContactController...');
        this.initData();
    }

    initData(){
        this.arrContactData = this.contactsService.getContactData();
    }

    addContact(){
        this.$state.go('contacts.add');
    }

    editData(id){
        this.$state.go('contacts.edit',{contactId:id});
    }

    deleteData(contact){
        this.contactsService.deleteContact(contact);
        this.initData();
    }
}
ManageContactController.$inject = ['$log','contactsService','$state'];

export default ManageContactController;