app.controller("animalController", function ($scope, $http, animalService) {
  $scope.animals = [];

  // uiGmapGoogleMapApi
  var test = 0;
  var LoadPage = function () {
    location.reload(true);
  }
  $scope.map = animalService.getMapStuff();

  animalService.getAnimals().then(function (response) {
    $scope.animals = response.data;
    test = 1;




    for (var i = 0; i < $scope.animals.length; i++) {
      var newCoord = $scope.animals[i].coordinates.split(",");
      var blueMarkerIcon = {
        url: 'http://localhost:8080/images/petsBlue.png'
      }
      var redMarkerIcon = {
        url: 'http://localhost:8080/images/petsRed.png'
      }
      if ($scope.animals[i].lostOrFound == "Found") {
        var marker = {
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
      } else if ($scope.animals[i].lostOrFound == "Lost") {
        var marker = {
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

  //   if (test == 0)
  // {


  // } else {
  //   test = 0;
  // }


})
