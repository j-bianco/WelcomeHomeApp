angular
.module("petApp")
.controller("userController", function($scope, userService, animalService){
var _username;
var _password1;
var _password2;

var _name;
var _type;
var _breed;
var _color;
var _size;
var _lostOrFound;
var _date;
$scope.Users = [];
$scope.Animals = []
var tempId = 0;
var animaTempId = 0;
var i = 0;

userService.getUser().then(function(response){
  $scope.Users = response.data;
})
animalService.getAnimals().then(function(response){
  $scope.Animals = response.data;
})

$scope.UserSubmit = function(){
  _username = $scope.username;
  _password1 = $scope.password1;
  _password2 = $scope.password2;
  check = "";
  if(_password1 != _password2){
    console.log("Passwords don't match")
  };
  $scope.Users.forEach(function(user) {
    if(_username == user.username){
      console.log("Username taken")
      i++;
    }
    if(_username != user.username){
      console.log("Username doesnt match.")
      tempId = user.id;
    }
    
  }, this);
  if(i <= 0){
    console.log(_username)
    console.log(_password1)
    console.log(_password2)
    var user = {};
    user.username = _username;
    user.password = _password2;
    user.id = tempId + 1;
    userService.addUser(user);
    userService.getUser().then(function(response){
  $scope.Users = response.data;
})
    }
    i = 0;
};




// _______________________Animal form____________________________

$scope.animalSubmit = function(){
  _name = $scope.name;
  _type = $scope.type;
  _breed = $scope.breed;
  _color = $scope.color;
  _size = $scope.size;
  _lostOrFound = $scope.lostOrFound;
  _date = $scope.date;
  $scope.Animals.forEach(function(animal) {
      animalTempId = animal.id;
    }, this);


    var animal = {};
    animal.name = _name;
    animal.type = _type;
    animal.breed = _breed ;
    animal.color = _color;
    animal.size = _size;
    animal.lostOrFound = _lostOrFound;
    animal.date = _date;
    animal.id = animalTempId + 1;
    animalService.addAnimal(animal);
    animalTempId = 0;
    animalService.getAnimals().then(function(response){
      $scope.Animals = response.data;
})
}
    
});