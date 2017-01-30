var app = angular.module("SpragueApp");

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "./templates/main.html",
        controller: "HomeController"
    })
    .when("#portraits", {
        templateUrl: "./templates/login.html",
        controller: "PortraitController"
    })
    .when("/about", {
        templateUrl: "./templates/about.html",
        controller: "AboutController"
    });


});//close config
