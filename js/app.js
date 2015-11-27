(function () {
    'use strict';

    var app = angular.module('rx', [
        'ngRoute'
    ]);

    app.config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }]);


}());