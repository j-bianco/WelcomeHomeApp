app.controller("animalController", function ($scope, $http, animalService) {
  $scope.animals = [];
  $scope.filterAll = true;

  // uiGmapGoogleMapApi

  animalService.getAnimals().then(function (response) {
    $scope.animals = response.data;
  })

  $scope.map = { center: { latitude: 33.703744, longitude: -117.846525 }, zoom: 15 };

  $scope.foundButton = function() {
    $scope.filterFound = true;
    $scope.filterLost = false;
    $scope.filterAll = false;
  }

  $scope.lostButton = function() {
    $scope.filterFound = false;
    $scope.filterLost = true;
    $scope.filterAll = false;
   
  }

  $scope.allButton = function() {
    $scope.filterFound = false;
    $scope.filterLost = false;
    $scope.filterAll = true;
  }
})
