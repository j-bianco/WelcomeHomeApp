app.controller("animalController", function ($scope, $http, animalService) {
  $scope.animals = [];

  //forces the page to reload on change-state
  var LoadPage = function () {
    location.reload(true);
  }

  //grabs the parameters for googlemaps, and sends it to the HTML
  $scope.map = animalService.getMapStuff();

  //Gets the animals from our database
  animalService.getAnimals().then(function (response) {
    $scope.animals = response.data;

    //creates markers for each animal, and color codes them based on lost or found
    for (var i = 0; i < $scope.animals.length; i++) {
      var newCoord = $scope.animals[i].coordinates.split(",");

      //sets a new variable for the location of the custom marker
      var blueMarkerIcon = {
        url: 'http://localhost:8080/images/petsBlue.png'
      }
      var redMarkerIcon = {
        url: 'http://localhost:8080/images/petsRed.png'
      }
      if ($scope.animals[i].lostOrFound == "Found") {
        //Even though they aren't shown, the markers have the attributes of the animal to allow the search function to work
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
      } /* end of color-coding markers */

      //Adds the markers to the array of "markers", which are then added to the map
      $scope.map.markers.push(marker)
    } /* End of Marker's for loop */
  }); /* End of GetAnimals.Then function */
});
