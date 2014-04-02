'use strict';

angular.module('angularApp').
  controller('AddTodoCtrl', function($scope, todoRepository) {
    $scope.title = '';
    $scope.description = '';
    $scope.dueDate = '';
    $scope.message = '';

    $scope.save = function() {
      var newTodo = {
        title: angular.copy($scope.title),
        description: angular.copy($scope.description),
        dueDate: angular.copy($scope.dueDate)
      };
      todoRepository.save(newTodo,
        function() {
          $scope.message = 'Saved!!';
        },
        function() {
          $scope.message = 'Failed!';
        });
    };
  });
