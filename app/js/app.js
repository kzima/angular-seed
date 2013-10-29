'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/partial1.html'
    }).state('view2', {
      url: '/',
      templateUrl: 'partials/partial2.html'
    })
}]).
run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
 	$state.transitionTo('home'); 
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])