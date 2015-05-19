angular.module('todoList').factory('Comments', ['$resource', function($resource) {

return $resource('/api/projects/:projectId/tasks/:taskId/comments',
  {projectId:'@id', taskId: '@id'},
  {
    'update': { method:'PUT' },
  });
}]);