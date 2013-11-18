
angular.module( 'myApp', [
  'myApp.home',
  'myApp.view1',
  'ui.router'
])

.config([
  '$stateProvider', 
  '$urlRouterProvider', 
  function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
}])

.run([
  '$rootScope', 
  '$state', 
  '$stateParams', 
  function ($rootScope, $state, $stateParams) {
  // It's very handy to add references to $state and $stateParams to the $rootScope
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])

.controller( 'AppCtrl', [
  '$scope', 
  '$location', 
  function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Angular Seed' ;
    }
  });
}])

; //don't delete me