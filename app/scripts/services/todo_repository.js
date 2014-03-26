'use strict';

angular.module('services', ['ngResource'])
  .factory('todoRepository', function($resource) {
    var todo = $resource('/api/todo/:todoId', {todoId: '@todoId'});
    return {
      find: function() {
        return todo.query();
      },
      get: function(id) {
        return todo.get({id: id});
      }
    };
  });


