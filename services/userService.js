app
  .service("userService", function($http) {
    this.getUser = function(){
      return $http.get("http://localhost:5000/api/User/")
    }

    this.addUser = function(user){
      return $http.post("http://localhost:5000/api/User/", user)
    }
  
})