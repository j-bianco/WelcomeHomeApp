app
  .service("userService", function($http) {
    this.getUser = function(){
      return $http.get("http://localhost:5000/api/User/")
    }

    this.postUser = function(){
      $http.post("http://localhost:5000/api/User/")
    }
  
})