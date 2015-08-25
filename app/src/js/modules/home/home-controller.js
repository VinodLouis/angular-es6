/**
 * Created by vinodlouis on 08/08/15.
 */
'use strict';

class HomeController {
    constructor($log) {
        this.$log = $log;
        $log.info('HomeController...');
    }
}
HomeController.$inject = ['$log'];

export default HomeController;