(function () {
    'use strict';

    angular
        .module('rx')
        .directive('profile', profile);

    profile.$inject = [];

    function profile() {
        return {
            restrict: 'EA',
            scope: {
                name: '='
            },
            controller: function ($scope) {
                $scope.add = function(e) {
                    console.log(e);
                };

                $scope.name = '1';
            },
            link: function (scope, element, attrs) {

            },
            template: '<div>\n    <b>Hi [[ name ]]!</b>\n</div>'
        };
    }
}());