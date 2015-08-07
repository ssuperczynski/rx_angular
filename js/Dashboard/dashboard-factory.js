(function () {
    'use strict';

    angular
        .module('rx')
        .factory('DashboardFactory', DashboardFactory);

    DashboardFactory.$inject = ['$http'];

    function DashboardFactory($http) {

        function save(params) {
            return $http.post('http://httpbin.org/post', params);
        }

        return {
            save: save
        }
    }


}());