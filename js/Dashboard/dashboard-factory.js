(function () {
    'use strict';

    angular
        .module('rx')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.$inject = ['$http'];

    function DashboardFactory($http) {

        var json = [];

        return {
            json: json
        }
    }


}());