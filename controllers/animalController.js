app.controller("animalController", function($scope, $http, animalService){
    $scope.animals = [];

    // uiGmapGoogleMapApi
    
    
    animalService.getAnimals().then(function(response){
      $scope.animals = response.data;
      $scope.map = { center: { latitude: 33.703744, longitude: -117.846525 }, zoom: 10, markers: []};
    
      for (var i = 0; i < $scope.animals.length; i++) {
        var newCoord = $scope.animals[i].coordinates.split(",");
        var blueMarkerIcon = {
          url: 'http://localhost:8080/images/petsBlue.png'}
          var redMarkerIcon = {
          url: 'http://localhost:8080/images/petsRed.png'}
          if ($scope.animals[i].lostOrFound == "Found")
          {
        var marker  = {
            icon: blueMarkerIcon,
            id: $scope.animals[i].id,
            name: $scope.animals[i].name,
            address: $scope.animals[i].location,
            type: $scope.animals[i].type,
            breed: $scope.animals[i].breed,
            color: $scope.animals[i].color,
            size: $scope.animals[i].size,
            lostOrFound: $scope.animals[i].lostOrFound,
            date: $scope.animals[i].date,
            coords: {
              latitude: newCoord[0],
              longitude: newCoord[1]
            }
          }
        } else if ($scope.animals[i].lostOrFound == "Lost")
        {
          var marker  = {
            icon: redMarkerIcon,
            id: $scope.animals[i].id,
            name: $scope.animals[i].name,
            address: $scope.animals[i].location,
            type: $scope.animals[i].type,
            breed: $scope.animals[i].breed,
            color: $scope.animals[i].color,
            size: $scope.animals[i].size,
            lostOrFound: $scope.animals[i].lostOrFound,
            date: $scope.animals[i].date,
            coords: {
              latitude: newCoord[0],
              longitude: newCoord[1]
            }
          }
        }
      $scope.map.markers.push(marker)
      }
    })
//  public string Type {get; set;}
//     public string Breed {get; set;}
//     public string Color {get; set;}
//     public string Size {get; set;}
//     public string LostOrFound {get; set;}
//     public string Date {get; set;}
  
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
