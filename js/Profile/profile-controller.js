(function () {
    'use strict';

    angular
        .module('rx')
        .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['$scope'];

    function ProfileCtrl($scope) {

        $scope.$on('user-added', function (event, params) {
            console.log(event);
            console.log(params);
            console.log('Hello from ProfileCtrl');
        });

    }


}());