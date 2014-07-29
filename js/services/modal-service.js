angular.module('myApp').service('modalService', ['$modal', function($modal) {
  this.show = function (templateUrl) {
    var modalInstance = $modal.open({
      templateUrl: templateUrl
    });
  };
}]);