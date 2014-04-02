'use strict';

describe('TodoRepository test', function () {

  // Last modulen
  beforeEach(module('services'));

  var resource = {};
  var todoRepository;

  beforeEach(function() {
    resource.query = jasmine.createSpy('query spy').andReturn({});
    resource.get = jasmine.createSpy('get spy').andReturn({});
    module(function($provide){
      $provide.factory('$resource', function(){
        return function() {
          return resource;
        };
      });
    });

    inject(function(_todoRepository_) {
      todoRepository = _todoRepository_;
    });
  });

  it('should call query on resource when called with find', function() {
    todoRepository.find();
    expect(resource.query).toHaveBeenCalled();
  });

  it('should call get on resource when called with get', function() {
    todoRepository.get(1);
    expect(resource.get).toHaveBeenCalledWith({todoId: 1});
  });

});
