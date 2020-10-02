(function () {
    'use strict';
    angular.module('FoodItemCounterApp', [])
        .controller('FoodItemCounterCtrl',['$scope',
                                        FoodItemCounterCtrl]);

        FoodItemCounterCtrl.$inject = ['$scope'];
        function FoodItemCounterCtrl($scope) {
            $scope.foodItems = "";
            $scope.message = "Check If Too Much";

            var foodItemsCount = 0;
            
            $scope.calculateFoodItems = function () {
                foodItemsCount = _calculateItems($scope.foodItems);
            };

            function _calculateItems(_foodItems) {
                if(_foodItems ==="") {
                    $scope.message = "Please enter data first";
                }else {
                    var totalItems = 0;
                    var foodItemArray = _foodItems.split(",");
                    totalItems = foodItemArray.length;
                    $scope.foodItemsCount = totalItems
                    if(totalItems<=3) {
                        $scope.message = "Enjoy!";
                    }else {
                        $scope.message = "Too much!";
                    }
                }

            }
        }
})();