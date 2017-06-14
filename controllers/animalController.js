app.controller("animalController", function($scope, $http, animalService){
    $scope.animals = [];

    // uiGmapGoogleMapApi
    
    
    animalService.getAnimals().then(function(response){
      $scope.animals = response.data;
      $scope.map = { center: { latitude: 33.703744, longitude: -117.846525 }, zoom: 10, markers: []};
    
      for (var i = 0; i < $scope.animals.length; i++) {
        var newCoord = $scope.animals[i].coordinates.split(",");
        var marker  = {
            id: $scope.animals[i].id,
            coords: {
              latitude: newCoord[0],
              longitude: newCoord[1]
            }
          }
      $scope.map.markers.push(marker)
      }
    })

  
  $scope.filterAll = true;



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
