angular.module('starter.controllers', [])

.controller('WeatherCtrl', function($scope,CityData) {
  $scope.data = CityData.getData('Kitchener');
  $scope.city = 'Kitchener';
  $scope.selectedCity = function(city){
    $scope.data = CityData.getData(city);
  }
})

.controller('HelpCtrl', function($scope) {

})

.controller('AlertDetailCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {
  

})
