'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'services'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'ListTodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
