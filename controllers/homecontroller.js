angular.module("SpragueApp")

.controller("HomeController", ["$scope", function($scope){
    $scope.test = "hey man i'm here";
    $scope.photos = [
        {
            title: "home1",
            imgUrl: "../images/Carousel/1.jpg"
        },
        {
            title: "home2",
            imgUrl: "../images/Carousel/2.jpg"
        },
        {
            title: "home3",
            imgUrl: "../images/Carousel/3.jpg"
        },
        {
            title: "home4",
            imgUrl: "../images/Carousel/4.jpg"
        },
        {
            title: "home5",
            imgUrl: "../images/Carousel/5.jpg"
        },
        {
            title: "home6",
            imgUrl: "../images/Carousel/6.jpg"
        },
        {
            title: "home7",
            imgUrl: "../images/Carousel/7.jpg"
        }
    ];

}]);
