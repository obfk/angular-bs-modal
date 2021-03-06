angular.module('myApp').service('modalService', ['$modal', function($modal) {
  var modalDefaults = {
    templateUrl: './js/templates/search-modal.html'
  };

  var modalOptions = {};

  this.showModal = function (customModalDefaults, customModalOptions) {
    return this.show(customModalDefaults, customModalOptions);
  };

  this.show = function (customModalDefaults, customModalOptions) {
    //Create temp objects to work with since we're in a singleton service
    var tempModalDefaults = {};
    var tempModalOptions = {};

    //Map angular-ui modal custom defaults to modal defaults defined in service
    angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

    //Map modal.html $scope custom properties to defaults defined in service
    angular.extend(tempModalOptions, modalOptions, customModalOptions);

    if (!tempModalDefaults.controller) {
      tempModalDefaults.controller = function ($scope, $modalInstance) {
        $scope.modalOptions = tempModalOptions;
        $scope.modalOptions.ok = function (result) {
          $modalInstance.close(result);
        };
        $scope.modalOptions.cancel = function (result) {
          $modalInstance.dismiss('cancel');
        };
      }
    }

    return $modal.open(tempModalDefaults).result;
  };
}]);