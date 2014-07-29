angular.module('myApp')
  .controller('DirectionsCtrl', ['$scope', '$modal', '$http', function($scope, $modal, $http){
    $scope.open = function () {var modalInstance = $modal.open({
      templateUrl: './js/templates/modal.html'
    });
  };
}]);
