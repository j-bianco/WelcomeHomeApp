app.controller("animalController", function($scope, $http, animalService){
    $scope.animals = [];

    // uiGmapGoogleMapApi
    
    animalService.getAnimals().then(function(response){
      $scope.animals = response.data;
    })

    $scope.map = { center: { latitude: 33.703744, longitude: -117.846525 }, zoom: 15 };
    
})