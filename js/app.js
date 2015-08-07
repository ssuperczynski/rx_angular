(function () {
    'use strict';

    var app = angular.module('rx', [
        'firebase',
        'ngRoute'
    ]);

    app.config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/profile', {
                    templateUrl: 'partials/show.html',
                    controller: 'ProfileCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

}());