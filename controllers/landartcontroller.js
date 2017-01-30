angular.module("SpragueApp").controller("LandArtController", [
    "$scope",
    function($scope) {
        $scope.photos = [
            {
                title: "land1",
                imgUrl: "../images/Landscapes/1.jpg",
                carouselIndex: 1
            }, {
                title: "land2",
                imgUrl: "../images/Landscapes/2.jpg",
                carouselIndex: 2
            }, {
                title: "land3",
                imgUrl: "../images/Landscapes/3.jpg",
                carouselIndex: 3
            }, {
                title: "land4",
                imgUrl: "../images/Landscapes/4.jpg",
                carouselIndex: 4
            }, {
                title: "land5",
                imgUrl: "../images/Landscapes/5.jpg",
                carouselIndex: 5
            }, {
                title: "land6",
                imgUrl: "../images/Landscapes/6.jpg",
                carouselIndex: 6
            }, {
                title: "land7",
                imgUrl: "../images/Landscapes/7.jpg",
                carouselIndex: 7
            }, {
                title: "land8",
                imgUrl: "../images/Landscapes/8.jpg",
                carouselIndex: 8
            }, {
                title: "land9",
                imgUrl: "../images/Landscapes/9.jpg",
                carouselIndex: 9
            }, {
                title: "land10",
                imgUrl: "../images/Landscapes/10.jpg",
                carouselIndex: 10
            }, {
                title: "land11",
                imgUrl: "../images/Landscapes/11.jpg",
                carouselIndex: 11
            }, {
                title: "land12",
                imgUrl: "../images/Landscapes/12.jpg",
                carouselIndex: 12
            }, {
                title: "land13",
                imgUrl: "../images/Landscapes/13.jpg",
                carouselIndex: 13
            }
        ];
$('.carousel').carousel({interval: 5000});
    }
]);
