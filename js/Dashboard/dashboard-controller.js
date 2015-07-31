(function () {
    'use strict';

    angular
        .module('rx')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'DashboardFactory'];

    function DashboardCtrl($scope, DashboardFactory) {

        $scope.selected = [];
        $scope.showSelected = false;
        $scope.showEdit = false;
        $scope.saved = false;
        $scope.persons = DashboardFactory.json;

        $scope.show = function (index) {
            $scope.showSelected = true;
            $scope.showEdit = false;
            $scope.selected = $scope.persons[index];
        };

        $scope.edit = function (id) {
            $scope.showEdit = true;
            $scope.showSelected = false;
            $scope.selected = $scope.persons[id];

        };

        $scope.save = function (selected) {
            DashboardFactory.save(selected)
                .then(function (response) {
                    console.log(response.data);
                    $scope.saved = true;
                })
                .catch(function () {
                    console.log('error');
                });
        };

        $scope.add = function (collection) {
            collection.id = ~~(Math.random() * 100);
            $scope.persons.push(collection);
            $scope.new = {};
        }


    }


}());