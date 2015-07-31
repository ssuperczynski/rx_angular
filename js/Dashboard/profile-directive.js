(function () {
    'use strict';

    angular
        .module('rx')
        .directive('profile', profile);

    profile.$inject = [];

    function profile() {
        return {
            restrict: 'E',
            scope: {
                name: '='
            },
            controller: function ($scope) {

            },
            template: '<div>\n    <b>Hi [[ name ]]!</b>\n</div>'
        };
    }
}());