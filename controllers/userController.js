angular
.module("petApp")
.controller("userController", function($scope, userService){
var _username;
var _password1;
var _password2;
$scope.Users = [];
var tempId = 0;
var i = 0;

userService.getUser().then(function(response){
  $scope.Users = response.data;
})

$scope.UserSubmit = function(){
  _username = $scope.username;
  _password1 = $scope.password1;
  _password2 = $scope.password2;;
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
      console.log("Username doesn't match.")
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
    
});