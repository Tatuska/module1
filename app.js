/**
 * Created by siryog on 03/12/16.


var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});

 */

(function(){
    'use strict';
    angular.module("countApp",[])
    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject=["$scope"];


function LunchCheckController($scope) {

    $scope.clickFunc=function () {
       // var lunch=undefined;
        var lunch=$scope.lunchDishes;
        console.log(lunch);
        var counter=0;
        $scope.message="";
        if(lunch==undefined || lunch=="")
        {$scope.message="Please enter data first";
        return;}

var arr=lunch.split(',');

       counter=arr.length;
        console.log(counter);
        console.log(arr);
        console.log(lunch);
           if(counter>=1 && counter<=3)
              $scope.message="Enjoy!";
               else if(counter==4 && arr[3]=="")
               $scope.message="Enjoy!";
            else if(counter>3)
              $scope.message="Too much!";


        //return  $scope.message;
    };



}

})();

