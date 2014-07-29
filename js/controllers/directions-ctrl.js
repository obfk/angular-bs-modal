angular.module('myApp')
  .controller('DirectionsCtrl', ['$scope', '$modal', '$http', function($scope, $modal, $http){
    $scope.open = function () {
      console.log('#1 click');
    };
}]);
