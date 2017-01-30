angular.module("SpragueApp").controller("AutoController", [
    "$scope",
    function($scope) {
        $scope.photos = [
            {
                title: "auto1",
                imgUrl: "../images/Auto/1.jpg",
                carouselIndex: 1
            }, {
                title: "auto2",
                imgUrl: "../images/Auto/2.jpg",
                carouselIndex: 2
            }, {
                title: "auto3",
                imgUrl: "../images/Auto/3.jpg",
                carouselIndex: 3
            }, {
                title: "auto4",
                imgUrl: "../images/Auto/4.jpg",
                carouselIndex: 4
            }
        ];
        $('.carousel').carousel({interval: 5000});
    }
]);
