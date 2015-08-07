(function () {
    'use strict';

    angular
        .module('rx')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'DashboardFactory', '$firebaseArray', '$rootScope'];

    function DashboardCtrl($scope, DashboardFactory, $firebaseArray, $rootScope) {

        var ref = new Firebase("https://blinding-torch-9850.firebaseio.com");

        $scope.persons = $firebaseArray(ref);

        $scope.selected = [];
        $scope.showSelected = false;
        $scope.showEdit = false;
        $scope.saved = false;

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
            $scope.persons.$add(angular.copy(collection));
            $scope.new = {};
            $rootScope.$broadcast('user-added', [1, 2]);
        }


    }


}());