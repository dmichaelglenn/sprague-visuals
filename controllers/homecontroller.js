angular.module("SpragueApp").controller("HomeController", [
    "$scope",
    function($scope) {
        $scope.photos = [
            {
                title: "home1",
                imgUrl: "../images/Carousel/1.jpg",
                carouselIndex: 1
            }, {
                title: "home2",
                imgUrl: "../images/Carousel/2.jpg",
                carouselIndex: 2
            }, {
                title: "home3",
                imgUrl: "../images/Carousel/3.jpg",
                carouselIndex: 3
            }, {
                title: "home4",
                imgUrl: "../images/Carousel/4.jpg",
                carouselIndex: 4
            }, {
                title: "home5",
                imgUrl: "../images/Carousel/5.jpg",
                carouselIndex: 5
            }, {
                title: "home6",
                imgUrl: "../images/Carousel/6.jpg",
                carouselIndex: 6
            }, {
                title: "home7",
                imgUrl: "../images/Carousel/7.jpg",
                carouselIndex: 7
            }
        ];
    $('.carousel').carousel({interval: 5000});
    }
]);
