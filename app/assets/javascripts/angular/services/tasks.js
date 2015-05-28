angular.module('todoList').factory('Tasks', ['$resource', function($resource) {

return $resource('/api/projects/:projectId/tasks',
  {projectId:'@id'},
  {
    'update': { method:'PUT'},
  });
}]);