angular.module('myApp')
  .controller('SearchCtrl', ['$scope', '$http', 'modalService', function($scope, $http, modalService) {
    var modalDefaults = {
      templateUrl: './js/templates/search-modal.html'
    };

    $scope.open = function () {
      modalService.showModal(modalDefaults, {})
    };
  }]);
