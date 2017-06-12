app.service("animalService", function($http){
    this.getAnimals = function(){
      return $http.get("http://localhost:5000/api/Animal/")
    }

     this.addAnimal = function(animal){
      return $http.post("http://localhost:5000/api/Animal/", animal)
    }

  });