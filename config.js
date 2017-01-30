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
        controller: "HomeController"
    })
    .when("/auto", {
        templateUrl: "./templates/main.html",
        controller: "AutoController"
    })
    .when("/portraits", {
        templateUrl: "./templates/main.html",
        controller: "PortraitController"
    });


});//close config
