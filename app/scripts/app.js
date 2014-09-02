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
      .when('/todo/new', {
        templateUrl: 'views/add.html',
        controller: 'AddTodoCtrl'
      })
      .when('/todo/:id', {
        templateUrl: 'views/todo.html',
        controller: 'ShowTodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('topmenu', function() {
    return {
      template: '<a href="/#/todos">List</a> <a href="/#/todo/new">Ny</a>'
    };
  });
