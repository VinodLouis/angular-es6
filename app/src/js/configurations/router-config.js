
'use strict';

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerConfig($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.when('/components', '/components/contacts');
    $urlRouterProvider.when('/contacts', '/contacts/add');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url    : '/home'
            , views: {
                ''      : {
                    template      : require('../modules/home/home.html')
                    , controller  : 'HomeController'
                    , controllerAs: 'homeController'
                }
            }
        })
        .state('contacts', {
            abstract  : true,
            url       : '/contacts',
            template  : '<ui-view></ui-view>',
            controller: ['$scope', '$state',
                ($scope, $state) => {
                    $state.go('contacts.add');
                }]
        })
        .state('contacts.add', {
            url    : '/add'
            , views: {
                '': {
                    template      : require('../modules/contacts/contacts-add.html')
                    , controller  : 'AddContactController'
                    , controllerAs: 'addContactController'
                }
            }
        })
        .state('contacts.edit', {
            url    : '/edit/:contactId'
            , views: {
                '': {
                    template      : require('../modules/contacts/contacts-edit.html')
                    , controller  : 'EditContactController'
                    , controllerAs: 'editContactController'
                }
            }
        })
        .state('contacts.list', {
            url    : '/list'
            , views: {
                '': {
                    template      : require('../modules/contacts/contacts-list.html')
                    , controller  : 'ManageContactController'
                    , controllerAs: 'manageContactController'
                }
            }
        })
}

export default routerConfig;

