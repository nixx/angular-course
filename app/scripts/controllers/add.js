'use strict';

angular.module('angularApp').
  controller('AddTodoCtrl', function($scope, todoRepository, $routeParams) {
    $scope.title = '';
    $scope.description = '';
    $scope.due_date = '';
    $scope.message = '';

    $scope.save = function() {
      var new_todo = {
        title: angular.copy($scope.title),
        description: angular.copy($scope.description),
        due_date: angular.copy($scope.due_date)
      };
      var promise = todoRepository.save(new_todo,
        function() {
          $scope.message = 'Saved!!';
        },
        function() {
          $scope.message = 'Failed!';
      });
    };
  });
