angular.module('myApp')
  .controller('DirectionsCtrl', ['$scope', '$http', 'modalService', function($scope, $http, modalService) {
    var modalDefaults = {
      templateUrl: './js/templates/directions-modal.html'
    };

    $scope.open = function (type) {
      modalService.showModal(modalDefaults, {})
    };
  }]);
