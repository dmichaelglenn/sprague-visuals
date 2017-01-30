angular.module("SpragueApp")

.controller("HomeController", ["$scope", function($scope){
    $scope.test = "hey man i'm here";
    $scope.photos = [
        {
            title: "neon",
            imgUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/16252092_1622923204683533_2526921655489765742_o.jpg?oh=2f288388c5c33857c9bf628735673077&oe=5905A71C"
        },
        {
            title: "pour",
            imgUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/15972717_1615612345414619_6341801033175387851_o.jpg?oh=8f32f956ad7fee62c6502f025ad4e455&oe=59113283"
        },
        {
            title: "aesthetic",
            imgUrl: "https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/15799919_1613903398918847_7150149405032176831_o.jpg?oh=b2a144e111fc824d8e13c03fe14b8274&oe=590239AD"
        }
    ];

}]);
