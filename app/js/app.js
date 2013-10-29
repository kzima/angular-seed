'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1', title: 'My Controller 1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2', title: 'My Controller 2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
    $rootScope.title = currentRoute.title;
	});
}]);