(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

    $scope.message="";
    $scope.checkIfTooMuch = function($scope) {
      console.log("poodle");
        let length = $scope.food.split(',').length;
        if (length === 0) {
          $scope.message = 'Please enter data first';
        } else if (length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      };

})();
