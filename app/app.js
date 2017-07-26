var app = angular.module('feedApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/app/home/views/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}]); 
