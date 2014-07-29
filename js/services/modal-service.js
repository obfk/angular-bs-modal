angular.module('myApp').service('modalService', ['$modal', function($modal) {
  this.show = function (templateUrl) {
    $modal.open({
      templateUrl: templateUrl
    });
  };

  this.close = function () {
    $modal.close();
  };
}]);