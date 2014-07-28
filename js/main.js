angular.module('myApp', ['ui.bootstrap', 'myApp.controllers']);

angular.module('myApp.controllers', [])
  .controller('ModalCtrl', [ '$scope', '$modal', function ($scope, $modal) {

    $scope.open = function () {
      var modalInstance = $modal.open({
        template: 'templates/modal.html',
        controller: 'ModalInstanceCtrl'
      });
    };
  }])
  .controller('ModalInstanceCtrl', [ '$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);