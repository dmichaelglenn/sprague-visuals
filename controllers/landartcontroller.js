angular.module("SpragueApp")

.controller("LandArtController", ["$scope", function($scope){
    $scope.test = "yo dawg";
    console.log("yeah youre hitting the controller");
    $scope.photos = [
        {
            title: "neon",
            imgUrl: "https://static.wixstatic.com/media/0f24e8_0ac0b2d21c0244689db74e40e7e7ed8c~mv2_d_2380_1522_s_2.jpg/v1/fill/w_796,h_509,al_c,q_90,usm_0.66_1.00_0.01/0f24e8_0ac0b2d21c0244689db74e40e7e7ed8c~mv2_d_2380_1522_s_2.webp"
        },
        {
            title: "pour",
            imgUrl: "https://static.wixstatic.com/media/0f24e8_60bc56a7d706434d874d2d84774caf65~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_796,h_527,al_c,q_90,usm_0.66_1.00_0.01/0f24e8_60bc56a7d706434d874d2d84774caf65~mv2_d_4928_3264_s_4_2.webp"
        },
        {
            title: "aesthetic",
            imgUrl: "https://static.wixstatic.com/media/0f24e8_27183c11731f4ddf832ea34aa6aef98e~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_796,h_527,al_c,q_90,usm_0.66_1.00_0.01/0f24e8_27183c11731f4ddf832ea34aa6aef98e~mv2_d_4928_3264_s_4_2.webp"
        }
    ];

}]);
