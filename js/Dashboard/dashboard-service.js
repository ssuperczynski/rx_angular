(function () {
    'use strict';

    angular
        .module('rx')
        .service('DashboardService', DashboardService);

    DashboardService.$inject = ['$http'];

    function DashboardService($http) {

        var self = this;

        self.show = function (index) {
            console.log('hi from service');
        };

        return self;
    }


}());