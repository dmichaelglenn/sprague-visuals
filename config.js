var app = angular.module("SpragueApp");

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "./templates/main.html",
        controller: "HomeController"
    })
    .when("/landscape", {
        templateUrl: "./templates/main.html",
        controller: "LandArtController"
    })
    .when("/about", {
        templateUrl: "./templates/about.html",
        controller: "AboutController"
    });


});//close config
