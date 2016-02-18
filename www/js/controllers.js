angular.module('starter.controllers', [])

.controller('ListCtrl', function($scope, Elements) {
  $scope.elements = Elements.all();
})

.controller('ElementDetailCtrl', function($scope, $stateParams ,Elements) {
  console.log($stateParams);
  $scope.element = Elements.get($stateParams.elementId);
});
