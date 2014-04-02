'use strict';

angular.module('services', ['ngResource'])
  .factory('todoRepository', function($resource) {
    var Todo = $resource('/api/todo/:todoId', {todoId: '@todoId'});
    return {
      find: function() {
        return Todo.query();
      },
      get: function(todoId) {
        return Todo.get({todoId: todoId});
      },
      save: function(newTodo, success, error) {
        new Todo(newTodo).$save(success, error);
      }
    };
  });


