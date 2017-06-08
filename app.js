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

    .state("map", {
      url: "/map",
      templateUrl: "./views/map.html",
      controller: "mapController"
    })

    .state("animal", {
      url: "/animal",
      templateUrl: "./views/animal.html",
      controller: "animalController"
    })

    .state("lost", {
      url: "/lost",
      templateUrl: "./views/lost.html",
      controller: "lostController"
    })

    .state("found", {
      url: "/found",
      templateUrl: "./views/found.html",
      controller: "foundController"
    })

    .state("success", {
      url: "/success",
      templateUrl: "./views/success.html",
      controller: "successController"
    })


})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCPy9-rXe-uJeoCt6F4XHaDVTJBryOXT-4',
        v: '3.28', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})