angular.module('starter.services', [])

.factory('CityData', function() {
  // Might use a resource here that returns a JSON array
var data = {
  'Kitchener':{
    currentTemp:6,
    description:'Light Rain Showers',
    yesterday: -3,
    tomorrow: 4 
  },
  'Waterloo':{
    currentTemp:12,
    description:'Hot and humid',
    yesterday: -8,
    tomorrow: 9 
  },
  'Toronto':{
    currentTemp:-7,
    description:'Cloudy',
    yesterday: 6,
    tomorrow: -10 
  },
  'Brampton':{
    currentTemp:-8,
    description:'Colder with wind',
    yesterday: 2,
    tomorrow: -3 
  },
  'Vancouver':{
    currentTemp:5,
    description:'Partly Cloudy',
    yesterday: 3,
    tomorrow: 11
  }
};
return {
  getData:function(city){
    return data[city];
  }
}
 });


factory('AlertData', function() {
  // Might use a resource here that returns a JSON array
var data = {
  'Kitchener':{
    currentTemp:6,
    description:'Light Rain Showers',
    yesterday: -3,
    tomorrow: 4 
  }
};
return {
  getData:function(city){
    return data[city];
  }
}
});