var app = angular.module("petApp", ["ui.router"])

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

});