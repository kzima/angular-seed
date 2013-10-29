'use strict';

/* Common Controllers */

angular.module('myApp').controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {

   $scope.isRoute = function(routeName) {
    return $location.path() === routeName;
  };

}]);