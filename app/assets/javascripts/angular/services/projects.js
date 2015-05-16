angular.module('todoList').factory('Projects', ['$resource', function($resource) {

return $resource('/api/projects/:projectId',
  {projectId:'@id'},
  {
    'update': { method:'PUT' },
  });
}]);