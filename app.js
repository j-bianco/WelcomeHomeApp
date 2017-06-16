var app = angular.module("petApp", ["ui.router", "uiGmapgoogle-maps"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("user", {
      url: "/user",
      templateUrl: "./views/user.html",
      controller: "userController"
    })

    .state("help", {
      url: "/help",
      templateUrl: "./views/help.html",
      controller: "helpController"
    })

    .state("animal", {
      url: "/animal",
      templateUrl: "./views/animal.html",
      controller: "animalController",
    })

    .state("success", {
      url: "/success",
      templateUrl: "./views/success.html",
      controller: "successController"
    })

})

//Google maps configuration
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCPy9-rXe-uJeoCt6F4XHaDVTJBryOXT-4',
        v: '3.28',
        libraries: 'weather,geometry,visualization'
    });
  })
