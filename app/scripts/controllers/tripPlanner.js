'use strict';

/**
 * @ngdoc function
 * @name travelPlannerApp.controller:AboutCtrl
 * @description
 * # TripPlannerCtrl
 * Controller of the travelPlannerApp
 */
angular.module('travelPlannerApp')
  .controller('TripPlannerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.GetAttractionsFor = function($city)
    {
        if($city=='Chennai')
            {
                return ["Test"];
            }
    }
  });

angular.module('travelPlannerApp')
 .controller('CitiesDropDownController', function ($scope){
    $scope.cities = ['Chennai', 'Paris', 'Seattle', 'Amsterdam'];
    $scope.dropdownItemSelected = function($currentCity) {
        getAttractions($currentCity);
    }
});

angular.module('travelPlannerApp')
.controller('AttractionsController', function($scope){
    $scope.attractions=['Marina Beach', 'Spencer Plaza', 'High Court', 'Sree Mithai'];
    $scope.isShown=true;
});
