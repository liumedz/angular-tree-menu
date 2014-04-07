'use strict';

var app = angular.module('app', ['ngRoute', 'ui.tree']);



app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/',
    {
/*        templateUrl: 'js/customers/templates/accounts-template.html',
        controller: 'accountsCtrl'*/
    });
}]);

