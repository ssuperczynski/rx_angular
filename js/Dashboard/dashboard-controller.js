(function () {
    'use strict';

    angular
        .module('rx')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'DashboardFactory'];

    function DashboardCtrl($scope, DashboardFactory) {

        $scope.tasks = DashboardFactory.json;

    }


}());