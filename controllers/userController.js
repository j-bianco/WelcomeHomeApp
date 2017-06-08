angular
.module("petApp")
.controller("userController", function($scope, userService){
var _username;
var _password1;
var _password2;
$scope.Users = [];

userService.getUser().then(function(response){
  $scope.Users = response.data;
})

$scope.UserSubmit = function(){
  _username = $scope.username

  // left off here____________________________
  for(i = 0; i < $scope.Users.Count; i++){
    if(Users[i].Username = _username){
      console.log("Username Taken!")
    }
    else{
      console.log("Username Open!")
    }
  }
// here_________________________________________
  _password1 = $scope.password1
  _password2 = $scope.password2
  if(_password1 != _password2){
    console.log("Passwords don't match")
  }
  else{
  console.log(_username)
  console.log(_password1)
  console.log(_password2)
  
  }
}
  
})