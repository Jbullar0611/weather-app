
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.weather', {
    url: '/weather',
    views: {
      'tab-weather': {
        templateUrl: 'templates/tab-weather.html',
        controller: 'WeatherCtrl'
      }
    }
  })

  .state('tab.help', {
      url: '/help',
      views: {
        'tab-help': {
          templateUrl: 'templates/tab-help.html',
          controller: 'HelpCtrl'
        }
      }
    })


  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/weather');

});
