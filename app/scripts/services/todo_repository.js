'use strict';

angular.module('services', ['ngResource'])
  .factory('todoRepository', function($resource) {
    var todo = $resource('/api/todo/:todoId', {todoId: '@todoId'});
    return {
      find: function() {
        return todo.query();
      },
      get: function(todoId) {
        return todo.get({todoId: todoId});
      }
    };
  });


