angular
  .module("petApp")
  .controller("userController", function ($scope, userService, animalService) {

    //Declaration is Variables
    var _username;
    var _password1;
    var _password2;

    $scope.SignedInUser = "";

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
    var animalTempId = 0;
    var i = 0;

    $scope.usernameSignIn = "";
    $scope.passwordSignIn = "";

    $scope.username = "";
    $scope.password1 = "";
    $scope.password2 = "";

    $scope.name = "";
    $scope.type = "";
    $scope.breed = "";
    $scope.color = "";
    $scope.size = "";
    $scope.lostOrFound = "";
    $scope.address = "";
    $scope.city = "";
    $scope.state = "";
    $scope.zip = "";

    $scope.signInAcc = true;
    $scope.createAcc = false;
    $scope.createPost = false;
    $scope.signInWarn = false;
    $scope.wrongInfoWarn = false;
    $scope.signUpWarn = false;
    $scope.passwordWarn = false;
    $scope.usernameWarn = false;
// Hiding and Showing to start with ^

    userService.getUser().then(function (response) {
      $scope.Users = response.data;
    })
    animalService.getAnimals().then(function (response) {
      $scope.Animals = response.data;
    })
    // Gets all info from the database ^

    // ________________________User form_____________________________
    $scope.UserSubmit = function () {
      if (($scope.username == "") || ($scope.password1 == "") || ($scope.password2 == "")) {
        $scope.signUpWarn = true;
        // If any feild is blank show warning ^
      }
      if (($scope.username != "") && ($scope.password1 != "") && ($scope.password2 != "")) {
        $scope.signUpWarn = false;
        _username = $scope.username;
        _password1 = $scope.password1;
        _password2 = $scope.password2;
        check = "";
        if (_password1 != _password2) {
          $scope.passwordWarn = true;
          // Check if passwords match ^
        }
        else {
          $scope.passwordWarn = false;
          $scope.Users.forEach(function (user) {
            if (_username == user.username) {
              $scope.usernameWarn = true;
              i++;
              // loops through all users to check if username is unique^
            }
            if (_username != user.username) {
              console.log("Username doesn't match.")
              tempId = user.id;
              // If same username is found, addes 1 to i ^
            }

          }, this);
          // if username is unique then push the user through to the database 
          if (i <= 0) {
            $scope.SignedInUser = $scope.username;
            console.log($scope.SignedInUser)
            console.log(_password1)
            console.log(_password2)

            var user = {};
            user.username = _username;
            user.password = _password2;
            user.id = tempId + 1;
            
            userService.addUser(user);
            $scope.usernameWarn = false;
            $scope.username = "";
            $scope.password1 = "";
            $scope.password2 = "";
            userService.getUser().then(function (response) {
              $scope.Users = response.data;
            })
              $scope.createPost = true;
              $scope.createAcc = false;
              $scope.signInAcc = false;
          }
          
          i = 0;
          // push through and reset ^
        }
      }
    };

    // _______________________Sign In form___________________________
    $scope.SignIn = function () {
      if (($scope.usernameSignIn == "") || ($scope.passwordSignIn == "")) {
        $scope.signInWarn = true;
      }
      if (($scope.usernameSignIn != "") && ($scope.passwordSignIn != "")) {
        $scope.signInWarn = false;
      }
      // Checks if feilds are filled^
      if (true) {
        $scope.Users.forEach(function (User) {
          if (($scope.usernameSignIn == User.username) && ($scope.passwordSignIn == User.password)) {
            $scope.SignedInUser = $scope.usernameSignIn;
            $scope.createPost = true;
            $scope.createAcc = false;
            $scope.signInAcc = false;
            console.log("Signed In")
            // Searches data base for matching username and password, if found then signs into that username^
          }
          else {
            $scope.wrongInfoWarn = true;
            console.log("Username or Password not Correct")
            // else if nothing found, shows error^
          }
        }, this);
        console.log($scope.SignedInUser);
        $scope.usernameSignIn = "";
        $scope.passwordSignin = "";

      }
    }

    // _______________________Animal form____________________________

    $scope.animalSubmit = function () {
      if (($scope.name == "") || ($scope.type == "") || ($scope.breed == "") || ($scope.color == "") || ($scope.size == "") || ($scope.lostOrFound == "") || ($scope.address == "") || ($scope.city == "") || ($scope.state == "") || ($scope.zip == "")) {
        $scope.postWarn = true;
      }
      else if (($scope.name != "") && ($scope.type != "") && ($scope.breed != "") && ($scope.color != "") && ($scope.size != "") && ($scope.lostOrFound != "") && ($scope.address != "") && ($scope.city != "") && ($scope.state != "") && ($scope.zip != "")) {
        $scope.postWarn = false;
        // CHecks if feilds are filled, if all filled push through new animal ^
        _name = $scope.name;
        _type = $scope.type;
        _breed = $scope.breed;
        _color = $scope.color;
        _size = $scope.size;
        _lostOrFound = $scope.lostOrFound;
        _address = $scope.address
        _city = $scope.city
        _state = $scope.state
        _zip = $scope.zip
        _image = $scope.image
        _date = $scope.date;
        $scope.Animals.forEach(function (animal) {
          animalTempId = animal.id;
          // Gets last ID in the database ^
        }, this);

        var animal = {};
        animal.name = _name;
        animal.type = _type;
        animal.breed = _breed;
        animal.color = _color;
        animal.size = _size;
        animal.lostOrFound = _lostOrFound;
        animal.location = _address + " " + _city + " " + _state + " " + _zip;
        animal.date = _date;
        animal.image = _image;
        animal.id = animalTempId + 1;
        animal.user = $scope.SignedInUser
        animalService.addAnimal(animal);
        animalTempId = 0;
        animalService.getAnimals().then(function (response) {
          $scope.Animals = response.data;
        })
        // Pushes through animal ^
        $scope.name = "";
        $scope.type = "";
        $scope.breed = "";
        $scope.color = "";
        $scope.size = "";
        $scope.lostOrFound = "";
        $scope.date = "";
        $scope.address = "";
        $scope.city = "";
        $scope.state = "";
        $scope.zip = "";
        $scope.image = "";
        // Resets Form ^
      }
    }
    
$scope.SignInForm = function () {
  $scope.createPost = false;
  $scope.createAcc = false;
  $scope.signInAcc = true;
}

$scope.CreateForm = function () {
  $scope.createPost = false;
  $scope.createAcc = true;
  $scope.signInAcc = false;
}
// Buttons to navigate to and from sign and sign up pages ^

  });

