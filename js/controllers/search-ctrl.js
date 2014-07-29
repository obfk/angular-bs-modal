angular.module('myApp')
  .controller('SearchCtrl', ['$scope', '$modal', '$http', 'modalService', function($scope, $modal, $http, modalService) {
    var modalInstance = modalService;

    $scope.open = function () {
      modalInstance.show('./js/templates/search-modal.html');
    };
  }]);
