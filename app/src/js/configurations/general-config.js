'use strict';

staticStringConfig.$inject = ['configProvider'];
function staticStringConfig(configProvider) {
    configProvider.initString();
    //configProvider.getThings();
}

export {staticStringConfig};
