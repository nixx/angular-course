'use strict';


angular.module('angularApp').
  controller('ListTodoCtrl', function($scope, todoRepository) {
    $scope.todos = todoRepository.find();
  });
