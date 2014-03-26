'use strict';


angular.module('angularApp').
  controller('ListTodoCtrl', function($scope) {
    $scope.todos = [{title: 'A'}, {title: 'B'}, {title: 'C'}];
  });
