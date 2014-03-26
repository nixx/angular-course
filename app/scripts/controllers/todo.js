'use strict';


angular.module('angularApp').
  controller('ShowTodoCtrl', function($scope, todoRepository, $routeParams) {
    $scope.todo = todoRepository.get($routeParams.id);
  });
