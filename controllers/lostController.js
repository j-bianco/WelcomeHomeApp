angular
.module("petApp")
.controller("lostController", function($scope, animalService){
  $scope.animals = [];

  animalService.getAnimals().then(function(response){
      $scope.animals = response.data;
    })
  
})