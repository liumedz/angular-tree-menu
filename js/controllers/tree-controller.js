'use strict';

app.controller('treeCtrl', ['$scope', 'treeService', function ($scope, treeService) {

    $scope.toggle = function (scope) {
        scope.toggle();
    };

    var getRootNodesScope = function () {
        return angular.element(document.getElementById("tree-root")).scope();
    };

    $scope.collapseAll = function () {
        var scope = getRootNodesScope();
        scope.collapseAll();
    };

    $scope.checked = function (node) {
        alert(node);
    };

    $scope.expandAll = function () {
        var scope = getRootNodesScope();
        scope.expandAll();
    };

    $scope.data = treeService.data;

}]);
