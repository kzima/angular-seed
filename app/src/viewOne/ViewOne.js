angular.module( 'myApp.view1', [
  'ui.router'
])

.config([
	'$stateProvider', 
	function config( $stateProvider ) {
  $stateProvider.state( 'view1', {
    url: '/view1',
    controller: 'ViewCtrl',
    templateUrl: 'src/viewOne/viewOne.html',
    data:{ pageTitle: 'View One' }
  });
}])

.controller( 'ViewCtrl', [
	'$scope', 
	function ViewCtrl( $scope ) {

}])

; // don't delete me