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
      
        
       // location.reload(true);
      
    })

    // .state("lost", {
    //   url: "/lost",
    //   templateUrl: "./views/lost.html",
    //   controller: "lostController"
    // })

    // .state("found", {
    //   url: "/found",
    //   templateUrl: "./views/found.html",
    //   controller: "foundController"
    // })

    .state("success", {
      url: "/success",
      templateUrl: "./views/success.html",
      controller: "successController"
    })

})

//Google maps configuration
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: {Your API Key},
        v: '3.28',
        libraries: 'weather,geometry,visualization'
    });
  })
