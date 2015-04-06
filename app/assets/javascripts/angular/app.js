var app = angular.module('todoList', [])

  app.controller('ProjectsCtrl', ['$scope', function ($scope) {
    $scope.projects=[{'name': "Проект 1"},{'name': "Проект 2"},
    {'name': "Проект 3"},{'name': "Проект 4"},{'name': "Проект 5"}]
  }]);

/*  app.controller('ProjectCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('TasksCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('TaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CreateTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('EditTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CommentsCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CreateCommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);*/