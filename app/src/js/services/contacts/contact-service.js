/**
 * Created by vinodlouis on 08/08/15.
 */
import {default as angular} from 'angular';
'use strict';

const moduleName = 'myApp.services';

class ContactsService{
    constructor($log) {
        this.contactData = [];
    }

    getContactData(){
        return this.contactData;
    }

    saveContact(obj){
        this.contactData.push(obj);
    }

    editContact(id,obj){
        this.contactData.every((ele)=>{
            if(ele.id == id){
                ele.name = obj.name;
                ele.address = obj.address;
                return false;
            }else{
                return true;
            }
        });
    }

    deleteContact(obj){
        if(confirm("Are you sure You want to delete this Contact ?"))
            this.contactData.splice(this.contactData.indexOf(obj),1);
    }

    getContact(id){
        var arrData = this.contactData.filter((ele)=>{
           return(ele.id == id);
        });

        if(arrData.length == 1)
            return arrData[0];
        return 0;
    }

    toString() {
        return 'ContactsService';
    }

    static contactsServiceFactory($log) {
        return new ContactsService($log);
    }
}

ContactsService.serviceName = 'contactsService';
ContactsService.contactsServiceFactory.$inject = ['$log'];

export default ContactsService;