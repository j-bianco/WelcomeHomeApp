app.controller("animalController", function($scope, $http, animalService){
    $scope.animals = [];
    
    animalService.getAnimals().then(function(response){
      $scope.animals = response.data;
    })
})