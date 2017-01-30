angular.module("SpragueApp").controller("PortraitController", [
    "$scope",
    function($scope) {
        $scope.photos = [
            {
                title: "portrait1",
                imgUrl: "../images/Portraits/1.jpg",
                carouselIndex: 1
            }, {
                title: "portrait2",
                imgUrl: "../images/Portraits/2.jpg",
                carouselIndex: 2
            }, {
                title: "portrait3",
                imgUrl: "../images/Portraits/3.jpg",
                carouselIndex: 3
            }, {
                title: "portrait4",
                imgUrl: "../images/Portraits/4.jpg",
                carouselIndex: 4
            }, {
                title: "portrait5",
                imgUrl: "../images/Portraits/5.jpg",
                carouselIndex: 5
            }, {
                title: "portrait6",
                imgUrl: "../images/Portraits/6.jpg",
                carouselIndex: 6
            }, {
                title: "portrait7",
                imgUrl: "../images/Portraits/7.jpg",
                carouselIndex: 7
            }, {
                title: "portrait8",
                imgUrl: "../images/Portraits/8.jpg",
                carouselIndex: 8
            }, {
                title: "portrait9",
                imgUrl: "../images/Portraits/9.jpg",
                carouselIndex: 9
            }
        ];
$('.carousel').carousel({interval: 5000});
    }
]);
