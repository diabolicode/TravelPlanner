'use strict';

/**
 * @ngdoc overview
 * @name travelPlannerApp
 * @description
 * # travelPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('travelPlannerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/tripPlanner', {
        templateUrl: 'views/tripPlanner.html',
        controller: 'TripPlannerCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
