angular.module('myApp')
  .controller('DirectionsCtrl', ['$scope', '$modal', '$http', 'modalService', function($scope, $modal, $http, modalService) {
    var modalInstance = modalService;

    $scope.open = function (type) {
      modalInstance.show('./js/templates/directions-modal.html');
    };
  }]);
