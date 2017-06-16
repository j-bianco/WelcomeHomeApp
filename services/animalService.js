app.service("animalService", function ($http) {

  // Gets the list of animals
  this.getAnimals = function () {
    return $http.get("http://localhost:5000/api/Animal/")
  }

  // puts new animals in the list
  this.addAnimal = function (animal) {
    return $http.post("http://localhost:5000/api/Animal/", animal)
  }

  // holds the default map attributes
  this.getMapStuff = function () {
    return { center: { latitude: 33.816985, longitude: -117.890241 }, zoom: 10, markers: [] };
  }
});