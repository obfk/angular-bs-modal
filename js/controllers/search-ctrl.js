angular.module('myApp')
  .controller('SearchCtrl', ['$scope', '$modal', '$http', function($scope, $modal, $http){
    $scope.open = function () {
      console.log('#2 click');
    };
}]);
