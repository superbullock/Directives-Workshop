var app = angular.module('directiveWorkshop', []);

app.controller('mainCtrl', function ($scope, mainService) {
  $('#spinner').hide();
  $scope.getData = function () {
    return mainService.getData($scope.query).then(function (data) {
      console.log(data);
      return $scope.data = data;
    });
  };

});