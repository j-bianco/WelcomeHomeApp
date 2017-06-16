app
  .service("userService", function($http) {

    // Holds the list of users
    this.getUser = function(){
      return $http.get("http://localhost:5000/api/User/")
    }

    // Adds new user to the list
    this.addUser = function(user){
      return $http.post("http://localhost:5000/api/User/", user)
    }
  
})